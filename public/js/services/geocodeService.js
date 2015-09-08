// angular
// .module('eventMatchApp').factory('Geocoder', Geocoder)

// function Geocoder () {


// }



// function Geolocation () {

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(GeoL);
//     if (document.getElementById('lat') === null) {
//      OtherThanGeo(); 
//    }
//  }
//  else {
//   OtherThanGeo();
// }

// function OtherThanGeo () {
//  $('input#search_query').html("Geolocation is not supported by this browser. Please Provide your address.");
//  form = document.createElement("input");
//  form.attr({ name: "address", id: "address", title: "Address", placeholder: "Type Address"});
//  document.getElementsByTagName('form')[0].appendChild(form)
// }
// function GeoL(position) {
//   document.getElementById('lat').value = position.coords.latitude;
//   document.getElementById('lon').value = position.coords.longitude;
// }
// }


//   <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
//   <script>
//   // Geolocation
//  function GeoL(position) {
//    latitude = position.coords.latitude;
//    longitude = position.coords.longitude;
//  }
//   var columnleft, latitude, longitude, type, bounds, boundsObject, counter=0;
//   // sendMessage
//   function sendMessage (query){
//     $('.tweet-container-right').html('');
//     $('.tweet-container-left').html('');
//     $('#counter').html('0');
//     counter = 0;
//     geocoder = new google.maps.Geocoder();
//     var socket = io();

//     switch ($('#search-type').val()) {
//       case 'By Location':
      
//       geocoder.geocode( { 'address': query}, function(results, status) {
//                 if (status == google.maps.GeocoderStatus.OK) {
//         bounds =  { 'A': String(results[0].geometry.viewport.getSouthWest().lng()),  'B': String(results[0].geometry.viewport.getSouthWest().lat()), 'C': String(results[0].geometry.viewport.getNorthEast().lng()), 'D': String(results[0].geometry.viewport.getNorthEast().lat()) }
                
//                    type = 'By Location';
//                    socket.emit('query', {'query': query, 'bounds' : bounds , 'type': type });
//         }});
      
//       break;
//       case "By Your Location":
//       var latlng = new google.maps.LatLng(latitude, longitude);
//        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//            if (status == google.maps.GeocoderStatus.OK) {
       
//                bounds =  { 'A': String(results[0].geometry.viewport.getSouthWest().lng()),  'B': String(results[0].geometry.viewport.getSouthWest().lat()), 'C': String(results[0].geometry.viewport.getNorthEast().lng()), 'D': String(results[0].geometry.viewport.getNorthEast().lat()) }
               
//                 type = 'By Your Location';
//                 socket.emit('query', {'query': query, 'bounds' : bounds , 'type': type });
//            } });
  
//       break;
//       default: 
//       type = 'By Keyword';
//       socket.emit('query', {'query': query, 'bounds' : bounds , 'type': type });
//     }

    


//     $('h1').html('Stream Tweets for '+query)
//   }
// // Onload
//   $(function(){
//      if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(GeoL)
//     }

//     $('#form').on('submit', function () {
//       event.preventDefault();
//       sendMessage($('#query').val());
    
//     });
//     $('#clear').on('click', function () {
//      $('.tweet-container-right').html('');
//      $('.tweet-container-left').html('');
//     })


