angular
 .module('eventMatchApp')
 .factory('Event', Event);

 Event.$inject = ['$resource'];
 function Event ($resource) {
  var EventResource = $resource('http://172.19.5.100:9000/api/events/:id', {id: '@_id'}, {
    'update': { method: 'PUT' }

  });
  return EventResource; 
 }