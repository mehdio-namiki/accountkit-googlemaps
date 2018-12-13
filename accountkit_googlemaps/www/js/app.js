function login_phone(){
  // body...




var options = {

  useAccessToken: true,
  defaultCountryCode: "MA",
  facebookNotificationsEnabled: true

}

  AccountKitPlugin.loginWithPhoneNumber(options, function(obj){
    
    alert(JSON.stringify(obj));


  }, function(err){

    alert(JSON.stringify(err));



  });






}


function login_email(){
  // body...
var options = {

  useAccessToken: true,
  defaultCountryCode: "US",
  facebookNotificationsEnabled: true

}

AccountKitPlugin.loginWithEmail(options, function(obj){
    
    alert(JSON.stringify(obj));


  }, function(err){

    alert(JSON.stringify(err));



  });





}

function logout(){

  AccountKitPlugin.logout();
  alert("logout successful");

}


/*var position = {lat: 31.6123116, lng: -7.971766};
function loaded(){
  var div = document.getElementById("map_canvas");


    map = new google.maps.Map(div, {
          center: position,
          zoom: 18
        });



}
*/

























document.addEventListener('deviceready', function() {

var div = document.getElementById("map_canvas");

// Create a Google Maps native view under the map_canvas div.
var map = plugin.google.maps.Map.getMap(div);

map.animateCamera({
  target: {lat: 31.6123116, lng: -7.971766},
  zoom: 20,
  tilt: 60,
  bearing: 140,
  duration: 5000
});



});

var location_house = {lat: 31.6123116, lng: -7.971766};

document.addEventListener("deviceready", function() {
  // Define a div tag with id="map_canvas"
  var mapDiv = document.getElementById("map_canvas");

  // Initialize the map plugin
  var map = plugin.google.maps.Map.getMap(mapDiv, {
    'camera': {
      'latLng': location_house,

    }
  });

  // You have to wait the MAP_READY event.
  map.one(plugin.google.maps.event.MAP_READY, onMapInit);
});
function onMapInit(map) {

var htmlInfoWindow = new plugin.google.maps.HtmlInfoWindow();

var html = [
  '<div align="center"><b><h4>Welcome</h4></b>',
  '<br><img src="img/ionic.png" width="50" height="50"></div>',
].join("");
htmlInfoWindow.setContent(html);




  setTimeout(function(){


  // Add a marker
  map.addMarker({
    'position': location_house,
     icon : 'blue',
  }, function(marker) {

    // Show the infoWindow
    marker.showInfoWindow();
    htmlInfoWindow.open(marker);

  }).map.animateCamera({
  target: location_house,
  zoom: 18,
  tilt: 60,
  bearing: 140,
  duration: 8000
  });







  },3000);


}