angular.module('app.controllers', [])
  
.controller('businessSelectCtrl', ['$scope', '$stateParams', '$firebaseArray', 'CouponClick', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray,CouponClick) {

var ref = firebase.database().ref();
$scope.list = $firebaseArray(ref);
$scope.list.$loaded()
  .then(function(x) {
    console.log($scope.list);
    $scope.couponList = $scope.list.$getRecord("Categories");
    console.log($scope.couponList);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

$scope.passStoreData = function(data,name)
{14
    console.log("pass to factory");
    CouponClick.setState(data,name);
};

$scope.getLength = function(obj) {
    return Object.keys(obj).length;
}
}])
   
.controller('couponsCtrl', ['$scope', '$stateParams', 'CouponClick', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,CouponClick) {

$scope.triggerCoupon = function(item)
{
    item.displayCode = 'true';
};

$scope.$on('$ionicView.beforeEnter', function () 
      {
            $scope.storeData = CouponClick.getState();
      });


}])
   
.controller('businessPageCtrl', ['$scope', '$stateParams', '$firebaseArray', 'CouponClick', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray,CouponClick) {

$scope.subcategory = 'false';
$scope.catText = 'Beauty';

var ref = firebase.database().ref();
$scope.list = $firebaseArray(ref);
$scope.list.$loaded()
  .then(function(x) {
    console.log($scope.list);
    $scope.couponList = $scope.list.$getRecord("Categories")["Beauty"];
    console.log($scope.couponList);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

$scope.passStoreData = function(data,name)
{
    console.log("pass to factory");
    CouponClick.setState(data,name);
};

$scope.getLength = function(obj) {
    return Object.keys(obj).length;
};


$scope.subcat = function(result,select)
{
  $scope.subcategory = result;
  $scope.catText = select;
  $scope.businessList = angular.copy($scope.couponList);
  $scope.oldbusinessList = angular.copy($scope.couponList);
  if(select != 'Beauty')
  {
    for(var i in $scope.couponList)
    {
        for(var j in $scope.couponList[i])
        {
            if($scope.couponList[i][j].tag != select)
            {
                delete $scope.businessList[i][j];
            }
            if(Object.keys($scope.businessList[i]).length === 0)
            {
                delete $scope.businessList[i];
            }
        }
    }
  }
    console.log("final result",$scope.businessList);
};


$scope.searchBiz = function(text)
{
    $scope.businessList = angular.copy($scope.oldbusinessList);
    if(text !== "" || text !== " ")
    {
        for(var i in $scope.businessList)
        {
            var temp = i.toLowerCase();
            if(temp.indexOf(text.toLowerCase()) == -1)
            {
                console.log("got eem");
                delete $scope.businessList[i];
            }
        }
    }
    
};

}








])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 