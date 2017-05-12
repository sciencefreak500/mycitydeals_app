angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);


angular.module('ionicApp', ['ionic']).config(function($ionicConfigProvider)   {
    if (ionic.Platform.isAndroid())
       $ionicConfigProvider.scrolling.jsScrolling(false);
     })