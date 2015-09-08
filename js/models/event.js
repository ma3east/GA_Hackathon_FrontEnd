angular
 .module('eventMatchApp')
 .factory('Event', Event);

 Event.$inject = ['$resource', 'API'];
 function User($resource, API) {
  var url = 'http://localhost:9000/api'


  
 }