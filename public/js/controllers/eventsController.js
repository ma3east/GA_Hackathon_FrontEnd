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

EventController.$inject = ['Event', 'CurrentUser']; 

function EventController(Event, CurrentUser){
  // this.all = Event.query();

  var self = this;
  self.all = [];
  self.query = {};
  self._id = {};
    self.event = {};
  self.currentEvent = {};
  // getEvent 
  self.showEvent = function (event) {
      self.currentEvent = event;
    // Event.get({ id: "55ef307df1ada951af60e8c1" }, getEventResponse)
  }
  self.pairUp = function (event, $event) {
    self.currentUser = CurrentUser.check();
    console.log(self.currentUser);
    Event.save(event, function (resp) {
      console.log('event saved', resp);
      $($event.target).html('Pairing');
      Event.invite({ 'eventId': resp.event._id, 'userId': self.currentUser.id }, function (resp) {
        console.log('invited', resp);
      })
    });

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