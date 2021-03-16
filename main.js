$(document).ready(function () {
    $('form').submit(function () {
        let ciudad = $('#clima').val().trim();
        let dominio = $('select').val();
        if (dominio == 0) {
            alert('Seleccione un pais.');
        }
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${dominio}&appid=19755e6bdb51227cff932412679ba322&lang=es`, function (info) {
            let ambiente = info.weather[0].description;
            let temp = info.main.temp;
            let coordenadas1 = info.coord.lat;
            let coordenadas2 = info.coord.lon;
            let temp1 = Math.trunc(temp - 273.15);

            $("#informacion").html(`
            <p><b>${ciudad}:</b> ${ambiente}</p>
            <p><b>Temperatura:</b> ${temp1} C</p>
            <p><b>coordenadas:</b> ${coordenadas2}, ${coordenadas1}</p>`
            )
        });
        return false;
    });
});