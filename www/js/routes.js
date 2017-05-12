angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('businessSelect', {
    url: '/businessSelectPage',
    templateUrl: 'templates/businessSelect.html',
    controller: 'businessSelectCtrl'
  })

  .state('coupons', {
    url: '/couponsPage',
    templateUrl: 'templates/coupons.html',
    controller: 'couponsCtrl'
  })

  .state('businessPage', {
    url: '/business',
    templateUrl: 'templates/businessPage.html',
    controller: 'businessPageCtrl'
  })

  .state('page', {
    url: '/page7',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/business')

  

});