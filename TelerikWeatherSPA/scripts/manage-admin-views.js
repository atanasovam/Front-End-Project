var adminTable = document.createElement("div");
$(adminTable).addClass("container")
            .appendTo($("#admin"))
            .html("Add Custom Destination below")


var form = document.createElement("div");
$(form).appendTo(adminTable)
        .attr("id", "form")

// <div>
//     <input type="submit" name="g" value="Submit" id="g">
//   </div>
 var  button = document.createElement('button');
        $(button).appendTo(adminTable)
                .attr("id", "form-button")
                .attr('type', 'button')
                .before(form)
                .addClass('btn btn-default')
                .html('Compile File')
                .offset({top: $(form).last().offset().top + 30, left:$(form).offset().left})
    $(button).on('click', function(event){
        alert("R")
       console.log($(form).submit().serializeArray() )

    })
//                 // .css('padding-top', 'px')
//     console.log($(form).last().offset().top)

var inputElement = function(inputField, checkbox) {
    var rowPart = document.createElement("div")
    $(rowPart).addClass("row")
            .appendTo(form);
    var colPart = document.createElement("div")
    $(colPart).addClass("col-25")
                .appendTo(rowPart)
     var labelPart = document.createElement("label");
     $(labelPart).html(inputField)
                .attr('for', inputField)
                .appendTo(colPart)
    var colPartTwo = document.createElement("div")

    $(colPartTwo).addClass("col-75")
            .appendTo(rowPart)
            .before(colPart)

    var inputPart = document.createElement("input")
    $(inputPart).attr('id', inputField)
                .attr('name', inputField)
                .appendTo(colPartTwo)
 
    if(checkbox === true) {
        $(inputPart).attr('type', 'checkbox')

    } else {
        $(inputPart).attr('type', 'text')
    }


    return
}


name = "default-file"
var myDB = (function () {
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
   
})(name);


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

jQuery(document).ready(function ($) {
   for(var k in destination.getDataCity())  {
       if(typeof(destination.getDataCity()[k]) === 'string') {

        inputElement(destination.getDataCity()[k])
       }
   }

});
// var submitForm = document.createElement("div")
// var submitFormButton = document.createElement("input")
// $(submitForm).appendTo(form)
            //.offset({top: $(form).last().offset().top + 30, left:$(form).offset().left})
// $(submitFormButton).attr('type', 'submit')
//                    .attr('value', 'commit')
//                    //.before($(form).last())
//                    .appendTo(form)

// $(form)[0].submit(function( event ) {
//     alert("SD")
//     console.log( $( this ).serializeArray() );
//     event.preventDefault();
    
//   });

// jQuery(document).ready(function () {
//     jQuery('#form').bind('submit', function(event) {
//          console.log($(this).serializeArray())
//          console.log($(this).innerText)
//          alert("SD");
//          console.log("SD")
//          //event.preventDefault();
//        // do your stuff here..I have already used this for my forms
//     });
// })
// });
$(form).submit(function( event ) {
        event.preventDefault()
        console.log($(this).serializeArray())
        alert("Sdsgfh") });

//     // $( "#form-button" ).on('click', function( event ) {
//     //     var texty =  document.createElement("div")
        
//     //      $(texty).html($( this ).serializeArray())
//     //             .appendTo("#partTwo")

//     //      console.log( $( this ).serializeArray() );
//     //     event.preventDefault();
        
//     //   });
  
