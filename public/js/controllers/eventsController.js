angular
.module("eventMatchApp")
  .controller("eventsController", EventController);

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
    console.log(self.query)
    Event.search(self.query, searchResponse);
  }

  function searchResponse(response) {
    console.log(response);
}  

function getEventResponse(response) {
  console.log(response);
  self.event = response;
}
}