let weather = {
    "apiKey":"c79622f95291d904ab227f0c3c10defd",
      fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=c79622f95291d904ab227f0c3c10defd&units=metric"
        ).then((response) => response.json())
        .then((data) => console.log(data));
    },

};