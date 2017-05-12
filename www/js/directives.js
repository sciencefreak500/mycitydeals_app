angular.module('app.directives', [])

.directive('exampleDirective', [function(){
    
 

}])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  
  ionic.Platform.setPlatform('ios');
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  //ionicConfigProvider.scrolling.jsScrolling(false);
})

.factory('CouponClick', [function () {
    var store = {};

    return {
      setState: function (data,name) {
        var temp = {businessName:name,discountList:data};
        store = temp;
        return true;
      },

      getState: function () {
        for(var i in store.discountList)
        {
            store.discountList[i].displayCode = 'false';
        }
        return store;
      }
    };

  }]);
