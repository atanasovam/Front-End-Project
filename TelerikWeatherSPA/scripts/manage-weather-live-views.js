

jQuery(document).ready(function ($) { 
    var temperatureCelsius ='';

    var $iconWeatherTemp = $('<div>').html("").attr("id", "icon-weather-temp")
                            .addClass('row')

    var $cityNameDiv= $('<div>').html("").attr("id", "city-name");
    
    var $cloudinessDiv = $('<div>').html("").attr("id", "city-clouds");


    var $empty = $('<div>').html('').addClass('col-xs-2')
                            .css('display', 'inline')

    var $weatherIcon = $('<img>').attr('type', 'image/svg+xml')
                            .attr("id", "weather-icon")
                            .addClass('col-xs-4')
                            .css('display', 'inline')
                            .css('text-align', 'center')
                            .css('bottom', '0');

    var $empty2 = $('<div>').html('').addClass('col-xs-2')
                            .css('display', 'inline')
    var $tempCDiv = $('<div>').html(temperatureCelsius).attr("id", "city-tempC")
                            .addClass('col-xs-4')
                            .css('display', 'inline');

    $empty.appendTo($iconWeatherTemp);                        
    $weatherIcon.appendTo($iconWeatherTemp);
    $empty2.appendTo($iconWeatherTemp);
    $tempCDiv.appendTo($iconWeatherTemp);
    

    $cityNameDiv.appendTo("#weather-box");
    $cloudinessDiv.appendTo("#weather-box");
    $iconWeatherTemp.appendTo("#weather-box");

});


var showCurrentWeather = (function(city, jsonWeather) {

    //var $dataContainer = ('<div>').attr("id", "divContainer")
    var temperatureCelsius = convertTemp(jsonWeather.main.temp)  + "&deg;C";
    var iconName = jsonWeather.weather[0].icon;
    $("#city-name").html(city);
    $("#city-tempC").html(temperatureCelsius).css("font-size", "300%");
    $("#city-clouds").html(jsonWeather.weather[0].main);
    $('#weather-icon').attr('src', '../styles/images/weather-icons/'+iconName+'.svg').css('width', '20%');
    


});
