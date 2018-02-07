// name = "London"
var myDB = (function (name) {
    console.log('../data/'+name+'.json')
    var dataFile = [];
        $.ajax({
            url: '../data/'+name+'.json',
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
   
});

var openDB = (function(name) {
        console.log(name)
      var db = [];
    
      databaseOpen(function(data) {
        alert("The json file has been opened successfully");
        db.push(data);
      });
    
      function databaseOpen(callback) {
        myDB(name).getError ? databaseError("Err") : callback(myDB(name).getData);
      }
    
      function databaseError(e) {
        alert("Couldn't open file")
      }
    return {
        loadData: db,
    }
});
    
var destination = (function (name) {
    console.log(name)
    var dataCities = openDB(name).loadData
    console.log(dataCities)
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
         return name;
       },
       getId: function() {
           return id;
       }

    };
});
