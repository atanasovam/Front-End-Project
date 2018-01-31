

// var fs = require('fs');
// var fs = window.writeFileSync
// var path = require('path')


var destination = (function () {
    // privates
    var name;
    var country;
    var id;
    var location;
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
     setTemperatureC: function (temperatureCity) {
         temperatureC = temperatureCity
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
            id: id}
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

// destination.setName("Sofia") 
// destination.setCountry("France")
// destination.setId(3);
// destination.setTemperatureC(10)
// destination.addTemperatureHistorical(10, 1995)

// cityData = destination.getAllData()
// console.log(destination.getAllData())
// var data = JSON.stringify(cityData);  
// var nameString = destination.getAllData().name.trim() + ""
// var folderName = './Front-End-Project/TelerikWeatherSpa/data/'
// var fileName = nameString + '.json'

// //var myPath = path.join( './Front-End-Project/TelerikWeatherSpa/data/', fileName)

// window.writeFileSync('./Front-End-Project/TelerikWeatherSpa/data/' + fileName, data);  

// var obj = {a: 123, b: "4 5 6"};
// var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

// $('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#partTwo');