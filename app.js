
var map = L.map('map').setView(new L.LatLng(23, -102), 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var circle = L.circle([23, -102], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

document.getElementById("SeleccionaLugar").addEventListener('change', function(e) {
    let cords = e.target.value.split(',');
    map.flyTo(cords,16);
    console.log(cords);
});

map.on('click', onMapClick);