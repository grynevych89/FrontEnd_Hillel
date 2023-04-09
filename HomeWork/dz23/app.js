 $(document).ready(function() {
    $('form').submit(function() {
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + $('#weather_input').val() + '&units=metric&APPID=5d066958a60d315387d9492393935c19', function(data) {
            let html_str = "";
            html_str += "<h2>Місто: " + data.name + "</h2>";
            html_str += "<h3>Температура: " + data.main.temp + " °C</h3>";
            html_str += "<h3>Тиск: " + data.main.pressure + "</h3>";
            html_str += "<h3>Опис: " + data.weather[0].description + "</h3>";
            html_str += "<h3>Вологість: " + data.main.humidity + "</h3>";
            html_str += "<h3>Швидкість вітру: " + data.wind.speed + "</h3>";
            html_str += "<h3>Напрям у градусах: " + data.wind.deg + "</h3>";
            const icon = data.weather[0].icon
            html_str += `<img src='http://openweathermap.org/img/w/${icon}.png'></img>`;
            html_str += "<p>____________________________________________________________</p>";
            $('#weather_loc').append(html_str);
        }, "json");
        return false;
    });
});
