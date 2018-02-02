

jQuery(document).ready(function ($) { 
    var temperatureCelsius =""
    var $cityNameDiv= $('<div>').html("").attr("id", "city-name")
    var $tempCDiv = $('<div>').html(temperatureCelsius).attr("id", "city-tempC");
    var $cloudinessDiv = $('<div>').html("").attr("id", "city-clouds");
    $tempCDiv.appendTo("#weather-box")
    $cityNameDiv.appendTo("#weather-box")
    $cloudinessDiv.appendTo("#weather-box")
    // $cityNameDiv.appendTo("#divContainer")
    // $dataContainer.appendTo("#weather-box")
});


var showCurrentWeather = (function(city, jsonWeather) {

    //var $dataContainer = ('<div>').attr("id", "divContainer")
    var temperatureCelsius = convertTemp(jsonWeather.main.temp)  + "&deg;C"
    $("#city-name").html(city)
    $("#city-tempC").html(temperatureCelsius).css("font-size", "400%")
    $("#city-clouds").html(jsonWeather.weather[0].main)
    alert(jsonWeather.weather[0].main)

});
