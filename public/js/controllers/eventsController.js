angular
.module("eventMatchApp")
.controller("eventsController", EventController);

EventController.$inject = ['Event']; 

function EventController(Event){
  // this.all = Event.query();

  var self = this;
  self.all = [];
  self.event = {};
  self.query = {};
  self._id = {};
  self.newEvent = {};
  // self.getEvents = getEvents;

  // getEvent 
  self.getEvent = function () {
    Event.get({ id: "55ef307df1ada951af60e8c1" }, getEventResponse)
  }
  self.search = function (){
    Event.search(self.query, searchResponse)
  }

  function searchResponse(response) {
    console.log(response);
  }  

  function getEventResponse(response) {
    console.log(response);
    self.event = response;
  }

}  
 