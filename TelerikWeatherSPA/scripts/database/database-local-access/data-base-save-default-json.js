
var fs = require('fs');


var destination = (function () {
    // privates
    var name;
    var averageTemp;
    var country;
    var id;
    var continent;
    var location;
    var info;
    var categoryType = [{historical: false}, {seaside: false}, 
       {mountain: false}];

    var temperatureHistory = [];
    var currentTemperature;

    return {
      setContinent: function(continentCity) {
          continent = continentCity;
      },
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
            averageTemp: averageTemp,
            continent: continent
        }
     }
   };

})();


destination.setContinent("My Continent")

destination.setName("Destination Name") 
destination.setCountry("Country")
destination.setId("OpenWeather API ID");
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
fs.writeFileSync('./Front-End-Project/TelerikWeatherSpa/data/' + fileName, data);  
