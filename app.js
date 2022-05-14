/*
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYmxhY2ttb3JlMCIsImEiOiJjaXlub251ZjIwMDJmMnBxems2bmpiYXA2In0.2Hxl5QoDhIY6OR4p3GsU2w'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
*/


 // You can remove the following line if you don't need support for RTL (right-to-left) labels:
 mapboxgl.setRTLTextPlugin('https://cdn.maptiler.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');
 var map = new mapboxgl.Map({
   container: 'map',
   style: 'https://api.maptiler.com/maps/basic/style.json?key=CmTWz8ruTLwKb6cVyJRY',
   center: [-100, 24],
   zoom: 4
 });

 var marker = L.marker([51.5, -0.09]).addTo(map);
