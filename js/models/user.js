angular
.module('eventMatchApp')
.factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  var url = 'http://localhost:9000/api'
  var UserResource = $resource(url + 'users/:id', {id: '@id'}, {
    'get': { method: 'GET'},
    'update': { method: 'PUT'},
    'login': { url: url + 'login', method: 'POST' },
    'join': {
      url: url + 'signup',
      method: 'POST'
    }
  })
  return UserResource;
} // closes the function
