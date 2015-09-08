angular
.module("eventMatchApp")
  .controller("eventsController", EventController);

EventController.$inject = ['Event']; 

function EventController(Event){
  // this.all = Event.query();

  var self = this;
  self.all = [];

  self.newEvent = {};
  self.getEvents = getEvents;

  getEvents();
  function getEvents(){

  }


}  