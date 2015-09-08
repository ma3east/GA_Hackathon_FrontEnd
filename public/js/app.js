angular
.module("eventMatchApp", ['angular-jwt', 'ngResource', 'ui.router'])
.constant('API', 'http://localhost:3000/api')
.config(MainRouter);

angular
.module('eventMatchApp')
.run(function($http, $window) {
  var token = $window.localStorage.getItem('token');
  $http.defaults.headers.common['Authorization'] = 'Bearer'
})

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider  
  .state('signup', {
    url: '/signup',
    templateUrl: 'partials/signup'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'partials/login'
  })
  .state('logout', {
    url: '/'
  });

  $urlRouterProvider.otherwise('/')

}
