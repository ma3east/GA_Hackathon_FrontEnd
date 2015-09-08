angular
.module('eventMatchApp')
.factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  var url = 'http://localhost:9000/api'

  return $resource(
    url+'/users/:id',
    {id: '@id'},
    { 'get': { method: 'GET' },
    'save': { method: 'POST' },
    'join': {
      url: url +'/signup',
      method: 'POST'
    }
  }
  );
} // closes the function

