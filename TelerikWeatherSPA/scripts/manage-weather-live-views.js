

jQuery(document).ready(function ($) { 
    var temperatureCelsius =""
    var $cityNameDiv= $('<div>').html("").attr("id", "city-name")
    var $tempCDiv = $('<div>').html(temperatureCelsius).attr("id", "city-tempC");
    $tempCDiv.appendTo("#weather-box")
    $cityNameDiv.appendTo("#weather-box")
    // $cityNameDiv.appendTo("#divContainer")
    // $dataContainer.appendTo("#weather-box")
});


var showCurrentWeather = (function(city, jsonWeather) {

    //var $dataContainer = ('<div>').attr("id", "divContainer")
    var temperatureCelsius = convertTemp(jsonWeather.main.temp)  + "&deg;C"
    $("#city-name").html(city)
    $("#city-tempC").html(temperatureCelsius).css("font-size", "400%")
    

});
