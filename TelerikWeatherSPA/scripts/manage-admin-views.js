var adminTable = $("<div/>");

$(adminTable).addClass("container")
            .html("Add Custom Destination below")

var form = $("<form/>");

$(form).appendTo(adminTable)
        .attr("id", "form");

var buttonDiv = $("<div/>");
// $(buttonDiv).offset({top: $(form).last().offset().top, left:$(form).offset().left})
$(buttonDiv).appendTo(adminTable)
            .attr("align", "left")

var  button = $('<button/>');
$(button).appendTo(buttonDiv)
        .attr("id", "form-button")
        .attr('type', 'button')
        //.before(form)
        .addClass('btn btn-default')
        .html('Compile File')
        // .offset({top: $(form).last().offset().top + 30, left:$(form).offset().left})
var buttonDownload = $('<a/>');
$(buttonDownload).appendTo(buttonDiv)
                 .attr("id", "download-button")
                .addClass('btn btn-default')
                .html('Download');
jQuery.fn.extend({
    disable: function(state) {
        return this.each(function() {
            var $this = $(this);
            $this.toggleClass('disabled', state);
        });
    }
});

$(buttonDownload).disable(true);
        

var inputElement = function(inputField, checkbox) {
    var rowPart = $("<div/>")
    $(rowPart).addClass("row")
            .attr("style","margin-left:0px;")
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
$(adminTable).appendTo( $("#admin"));



var defaultDestination = destination("default-file")

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
    $(buttonDownload).disable(false);
    $("#download-button").attr("href", 'data:' + data)
                        .attr("download",  objData["name"] + '-'+ objData["id"]+'.json')
     
    //$('<a class="btn btn-primary btn-lg" href="data:' + data + '" download="' +objData["name"] + '-'+ objData["id"]+'.json">download JSON</a>').appendTo(form);
    // $('<a href="data:' + data + '" download="' +objData["name"] + '-'+ objData["id"]+'.json">download JSON</a>').appendTo(form);
})

