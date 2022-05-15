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

        let crearTabla = function(data) {
            let StringTabla = "<tr><th>Numero de reporte</th><th>Coordenadas</th><th>Contaminante</th><th>Fecha</th></tr>";
            for (let i = 0; i < data.length; i++) {
                let fila = "<tr><td>" + data[i].id + "</td><td>" + data[i].lugar + "</td><td>" + data[i].contaminante + "</td><td>" + data[i].fecha + "</td></tr>";
                StringTabla += fila;
                console.log(StringTabla);
            }
            return StringTabla;
        }

        document.getElementById("tabla").innerHTML = crearTabla(data);
        crearTabla(data);
});
