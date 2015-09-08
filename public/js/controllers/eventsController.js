angular
.module("eventMatchApp")
  .controller("eventsController", EventController)

  .filter('cmdate', [
      '$filter', function($filter) {
          return function(input, format) {
              return $filter('date')(new Date(input), format);
          };
      }
  ]);

EventController.$inject = ['Event']; 

function EventController(Event){
  // this.all = Event.query();

  var self = this;
  self.all = [];
  self.query = {};
  self._id = {};
    self.event = {};
  self.newEvent = {};

  // getEvent 
  self.getEvent = function () {
    Event.get({ id: "55ef307df1ada951af60e8c1" }, getEventResponse)
  }
  self.search = function (){
    $('.spinner').fadeIn();
    self.all = {};
    Event.search(self.query, searchResponse);
  }

  function searchResponse(response) {
    $('.spinner').fadeOut();
    self.all = response;
    // moment( ).format('MMMM Do YYYY, h:mm:ss a'
   
}  

function getEventResponse(response) {
  console.log(response);
  self.event = response;
}
}