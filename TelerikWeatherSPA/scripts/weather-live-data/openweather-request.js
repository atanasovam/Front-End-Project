var weatherAPI = "d02c694acad022199a1b3557673bc4e5";
var weatherURL = "?";
var convertTemp = (function(degreesKelvin) {
    var degreesCels = Math.round(Number(degreesKelvin) - 273.15);
    return degreesCels;
})

var requestForecast = (function(myCity) {
    //var myCity = "London"
    //alert("hi" + myCity)
    weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + myCity + "&appid=" + weatherAPI;
    //alert(weatherURL)
    $.ajax({
        type: "GET",
        url: weatherURL,
        dataType: "json",
        error: function() {
            console.log('Error on request')
            // var json = {"coord":{"lon":23.32,"lat":42.7},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"base":"stations","main":{"temp":279.15,"pressure":1013,"humidity":70,"temp_min":279.15,"temp_max":279.15},"visibility":8000,"wind":{"speed":0.5},"clouds":{"all":8},"dt":1517500800,"sys":{"type":1,"id":5444,"message":0.0035,"country":"BG","sunrise":1517463635,"sunset":1517499640},"id":727011,"name":"Sofia","cod":200}
            // /alert("Temperature in " + myCity + " " +  convertTemp(json.main.temp))
            // alert(convertTemp(json.main.temp)  + "&deg;C");
            // showCurrentWeather(json);
            return json;
        },
        success:  function (data) {
           
            data  = JSON.stringify(data)
            var json = JSON.parse(data);
            showCurrentWeather(myCity, json);
            showHistoryPanel(json.id);
            return;

        }
    })
})



// d02c694acad022199a1b3557673bc4e5
// api.openweathermap.org/data/2.5/weather?q=London&appid=d02c694acad022199a1b3557673bc4e5