angular
 .module('eventMatchApp')
 .factory('Event', Event);

 Event.$inject = ['$resource'];
 function Event ($resource) {
  var url = 'http://172.19.5.100:9000/api/events/'
  var EventResource = $resource(url + ':id', {id: '@_id'}, {
    'update': { method: 'PUT' },
    'search': { method: 'POST', url: url+ 'search', isArray:true }
  });

  
  return EventResource; 
 }

 // var EventResource = $resource('http://172.19.5.100:9000/api/events/search', {id: '@_id'}, {
 //   'update': { method: 'PUT' }

 // });