name = "London"
var myDB = (function () {
    var dataFile = [];
        $.ajax({
            url: '../data/London.json',
            dataType: "JSON",  
            async: false,
            error: function() {
            dataFile.push({error: true,
                sampleData: null});
            },
            success: function(data) {
                dataFile.push({error: false,
                    sampleData: data});
            },
            type: 'GET'
            });
        
    if (dataFile[0].error == false) {
        return {
            getError: dataFile[0].error,
            getData: dataFile[0].sampleData,

        }
    } else {
        return {
            getError: dataFile[0].error,
            getData: ""
        }
    }
   
})();


var openDB = (function() {
  
      var db = [];
    
      databaseOpen(function(data) {
        alert("The json file has been openned successfully");
        db.push(data);
      });
    
      function databaseOpen(callback) {

        //var request = indexedDB.open('todos', version);        
        //request.onsuccess = function(e) {
          //db = e.target.result;
        myDB.getError ? databaseError("Err") : callback(myDB.getData);

      }
    
      function databaseError(e) {
        //console.error('An IndexedDB error has occurred', e);
        alert("Couldn't open file")
      }
    return {
        loadData: db,
    }
}());
    
console.log(openDB.loadData)



var destination = (function (dataCities) {
     var data = dataCities[0];
     console.log(data)
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
        
       getDataCity:  function() {
           //console.log("data" + data[0])
           var readyData = jQuery.parseJSON(JSON.stringify(data))
        return readyData;
      },
       getName: function() {
         return name
       }

    };
})(openDB.loadData);

alert(destination.getDataCity().name)

jQuery(document).ready(function ($) {
   for(var k in destination.getDataCity())  {
       
       console.log(k + destination.getDataCity()[k])
   }

    $('#data').text(destination.getDataCity().currentTemperature)

});

