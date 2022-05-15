let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {

    let data = new FormData(form);
    e.preventDefault();

    const url = 'https://hackoceanmapamb.azurewebsites.net/mapamb/reports';
    const urlLocal = 'http://localhost:8080/mapamb/reports';

    fetch(urlLocal, {
        method: 'POST',
        body: data
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

});