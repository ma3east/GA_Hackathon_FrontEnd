angular
.module("eventMatchApp")
  .controller("eventsController", EventController);

EventController.$inject = ['Event'];  
function EventController(Event){
  // this.all = Event.query();

}  