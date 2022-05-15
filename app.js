var map = L.map('map').setView(new L.LatLng(23, -102), 5);

const url = 'https://hackoceanmapamb.azurewebsites.net/mapamb/reports';
fetch(url).then((res) =>{
    //res arroja un status de 200, quiere decir que se encontro. Son los errores como el 404 que significa que no se encontro
    if(res.status !=200){
        console.log(res);
        console.log("Failed to fetch data");
    }
    else{
        return res.json();
    }
})
.then((data) =>{
    console.log(data);
    let NumeroCoordenadas = data.length;
    console.log("Numero de coordenadas: " + NumeroCoordenadas);

    for(let i=0; i<=NumeroCoordenadas; i++){
        let coordenadas = data[i].lugar;
        let coordenadasSplit = coordenadas.split(",");
        console.log(coordenadasSplit);
        let marker = L.circleMarker(coordenadasSplit, {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.5,
            radius: 20
        }).addTo(map);
        marker.bindPopup("<b>Coordenadas: </b>" + coordenadas + "\n <b>Contaminante: </b>" + data[i].contaminante + "\n <b>Fecha: </b>" + data[i].fecha);
    }
});





L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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