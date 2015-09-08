angular
.module("eventMatchApp", ['angular-jwt', 'ngResource', 'ui.router', 'jcs-autoValidate', 'angular-ladda']).config(MainRouter);

angular
.module("eventMatchApp").run(function($http, $window) {
  var token = $window.localStorage.getItem('token');
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token 
})

.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
      errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
      errorMessages['badUsername'] = 'Username can only contain numbers and letters and _';
    });
  }
)

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
  })
  .state('search', {
    url: '/search',
    templateUrl: 'partials/search'
  });

  $urlRouterProvider.otherwise('/signup')

}
