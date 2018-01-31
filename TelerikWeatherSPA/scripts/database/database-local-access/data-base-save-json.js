var fs = require('fs');



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

destination.setName("Berlin") 
destination.setCountry("France")
destination.setId(3);
destination.setTemperatureC(10)
destination.addTemperatureHistorical(10, 1995)

cityData = destination.getAllData()
console.log(destination.getAllData())
var data = JSON.stringify(cityData);  
var nameString = destination.getAllData().name.trim() + ""
var folderName = './Front-End-Project/TelerikWeatherSpa/data/'
var fileName = folderName + nameString + '.json'
fs.writeFileSync(fileName, data);  
