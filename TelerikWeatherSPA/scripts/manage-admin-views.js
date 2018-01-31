var adminTable = document.createElement("div");
$(adminTable).addClass("container")
            .appendTo($("#partOne"))
            .html("Add Custom Destination below")


var form = document.createElement("form");
$(form).appendTo(adminTable)
        .attr("id", "form")
 var  button = document.createElement('button');
        $(button).appendTo(adminTable)
                .attr("id", "form-button")
                .attr('type', 'button')
                .before(form)
                .addClass('btn btn-default')
                .html('Compile File')
                .offset({top: $(form).last().offset().top + 30, left:$(form).offset().left})
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
        $(inputPart).attr('type', 'checkbox');

    } else {
        $(inputPart).attr('type', 'text');
    }
      return
}
var defaultDestination = destination("default-file");
jQuery(document).ready(function ($) {
    for(var k in defaultDestination.getDataCity())  {
        if(typeof(defaultDestination.getDataCity()[k]) === 'string') {
            inputElement(defaultDestination.getDataCity()[k])
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

