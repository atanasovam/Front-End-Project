
var fs = require('fs');
// var fs = window.writeFileSync
// var path = require('path')


var destination = (function () {
    // privates
    var name;
    var averageTemp;
    var country;
    var id;
    var location;
    var info;
    var categoryType = [{historical: false}, {seaside: false}, 
       {mountain: false}];

    var temperatureHistory = [];
    var currentTemperature;

    return {
      setName: function (nameCity) {
          name = nameCity;
      },
      setId: function (idCity) {
        id = idCity;
      } ,
      setCountry: function (countryOfCity) {
        country = countryOfCity;
     } ,
     setAverageTemp: function (averageTempOfCity) {
        averageTemp= averageTempOfCity;
     } ,
     setTemperatureC: function (temperatureCity) {
         temperatureC = temperatureCity
     },
     setInfo: function (infoCity){
         info = infoCity
     },
     addTemperatureHistorical: function (tempCity, dateCity) {
         temperatureHistory.push({temperature: tempCity, 
        date: dateCity})
     },
     getAllData: function () {
         return  {name: name,
            country: country, 
            temperatureHistory: temperatureHistory,
            temperatureC: temperatureC,
            id: id,
            info: info, 
            averageTemp: averageTemp
        }
     }
   };

})();

// jQuery(document).ready(function ($) {
//     $("#submit").on('click', function() {
//         var myText = $('#name')
//         alert(myText)
//         // console.log(myText)
//         alert("e")
//     });
// // });

destination.setName("DestinationName") 
destination.setCountry("Country")
destination.setId("OpenWeatherAPIID");
destination.setTemperatureC("Temperature");
destination.setInfo("Information")
destination.setAverageTemp("Average Temperature")
//destination.addTemperatureHistorical("Add historical temperature")
var cityData = destination.getAllData()
// console.log(destination.getAllData())
var data = JSON.stringify(cityData);  
var nameString = destination.getAllData().name.trim() + "";
var folderName = './Front-End-Project/TelerikWeatherSpa/data/'
var fileName = 'default-file' + '.json'

// //var myPath = path.join( './Front-End-Project/TelerikWeatherSpa/data/', fileName)
fs.writeFileSync('./Front-End-Project/TelerikWeatherSpa/data/' + fileName, data);  

// var obj = {a: 123, b: "4 5 6"};
// var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

// $('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#partTwo');