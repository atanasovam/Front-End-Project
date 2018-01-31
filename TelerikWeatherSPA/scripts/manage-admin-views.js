var adminTable = $("<div/>");

$(adminTable).addClass("container")
            .html("Add Custom Destination below");


var form = $("<div/>");

$(form).appendTo(adminTable)
        .attr("id", "form");

 var  button = $('<button/>');
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

var inputElement = function(inputField, checkbox) {
    var rowPart = $("<div/>")
    $(rowPart).addClass("row")
            .appendTo(form);
    var colPart = $("<div/>")
    $(colPart).addClass("col-25")
                .appendTo(rowPart)
     var labelPart = $("<label/>");
     $(labelPart).html(inputField)
                .attr('for', inputField)
                .appendTo(colPart)
    var colPartTwo = $("<div/>")

    $(colPartTwo).addClass("col-75")
            .appendTo(rowPart)
            .before(colPart)

    var inputPart = $("<input/>")
    $(inputPart).attr('id', inputField)
                .attr('name', inputField)
                .appendTo(colPartTwo)
 
    if(checkbox === true) {
        $(inputPart).attr('type', 'checkbox');

    } else {
        $(inputPart).attr('type', 'text');
    }
      return
}

$(adminTable).appendTo($("#admin"));

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
});
$(button).on('click', function(event){
   var newData = $(form).serializeArray().map(function(index){    
        for(var k in defaultDestination.getDataCity())  {
            if(typeof(defaultDestination.getDataCity()[k]) === 'string') {        
                if( index.name === defaultDestination.getDataCity()[k])
                    return {[k]: index.value}
            }
        }
    }) 
    var objData = {};
    newData.map(function(value, index){
        Object.assign(objData, newData[index])
    })
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objData));
    $('<a href="data:' + data + '" download="' +objData["name"] + '-'+ objData["id"]+'.json">download JSON</a>').appendTo(form);
})

