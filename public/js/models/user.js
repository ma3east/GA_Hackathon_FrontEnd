angular
.module('eventMatchApp')
 .factory('User', User);
User.$inject = ['$resource'];
function User ($resource) {
  var url = 'http://172.19.5.100:9000/api/';
  var UserResource = $resource(url + 'users/:id', {id: '@_id'}, {
    'update': { method: 'PUT'},
    'login': { url: url + 'login', method: 'POST'},
    'signup': { url: url + 'join', method: 'POST' }
  })
  return UserResource;
}
