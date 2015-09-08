angular
 .module('eventMatchApp')
 .factory('Event', Event);

 Event.$inject = ['$resource'];
 function Event ($resource) {
  var url = 'http://localhost:9000/api/'
  var EventResource = $resource(url + 'events/search', {id: '@_id'}, {
    'update': { method: 'PUT' }

  });

  
  return EventResource; 
 }





 // var EventResource = $resource('http://172.19.5.100:9000/api/events/search', {id: '@_id'}, {
 //   'update': { method: 'PUT' }

 // });