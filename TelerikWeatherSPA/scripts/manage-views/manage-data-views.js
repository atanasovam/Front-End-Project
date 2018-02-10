var dataPlaces; 
var dataAverageTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var d3 = Plotly.d3;
var layout = {
    
     title: 'Average Temperature',
     font: {
        family: 'Courier New',
        size: 15,
        color: 'black', 
        weight: 900
      },
     yaxis: {
        autorange: true, 
         showgrid: false
     },
     margin: {
         l: 50,
         r: 0,
         b: 30,
         t: 30,
         pad: 0
       },
     paper_bgcolor: 'rgba(0,0,0,0)',
     plot_bgcolor: 'white',
 }
    
var WIDTH_IN_PERCENT_OF_PARENT = 80,
 HEIGHT_IN_PERCENT_OF_PARENT = 80;
    
var gd3 = d3.select('#data-plot')
    .append('div')
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
            // 'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
            // 'margin-left': '10%',
        height: HEIGHT_IN_PERCENT_OF_PARENT + '%',
        'margin-top':'2%',
        'margin-bottom':'10%'
    });
    
var gd = gd3.node();
   
    
Plotly.plot(gd, [{
    type: 'bar',
    x: monthNames,
    y: dataAverageTemp,
    marker: {
        color: '#001f33',
        line: {
            width: 1
        }
    }
}], layout,  {displayModeBar: false});
    
window.onresize = function() {
    Plotly.Plots.resize(gd);
};
    



$( "#form-data-submit" ).on('click', function( event ) {
    
        dataAverageTemp = [];

        var place = $('#destination-input').val().toLowerCase();
        //alert(place)
        var date = new Date($('#date-input').val());
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();

        event.preventDefault();
        
    //var dataPage = "List_of_cities_by_temperature";
    //data = $.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles="  + dataPage +"&prop=revisions&rvprop=content&format=json&origin=*&formatversion=2")
    // $.ajax( {
    //     // url: "https://en.wikipedia.org/w/api.php?action=parse&page=" + dataPage +"&format=json&origin=*&formatversion=2",
    //     // data: queryData,
    //     dataType: 'json',
    //     type: 'POST',
    //     //headers: { 'Api-User-Agent': 'Example/1.0' },
    //     success: function(data) {
    //         newData = data;
    //         //console.log(data.query.pages[0].revisions[0].content)
    //         // coco = $('<div/>').html($.parseHTML(data.parse.text['*']));
    //         //   bio = coco.find('table');
    //         //bio =data.query.pages[0].revisions[0].content
    //     }
    // } );
        var name = "cities-temperatures";
        $.ajax({
            url: '../data/data-statistical/' + name + '.json',
            dataType: "JSON",
            async: false,
            error: function () {
               alert("problem")
            },
            success: function (data) {
                dataPlaces = data;
            },
            type: 'GET'
        });
       
        for(var index = 0; index<dataPlaces.length; index++) {
            
           if(place.trim().length>0 && dataPlaces[index].City.toLowerCase() === place) {
               for(var monthIndex = 0; monthIndex<monthNames.length; monthIndex++) {
                    dataAverageTemp.push(dataPlaces[index][monthNames[monthIndex]]);
               }
               
               break;
           }
           //alert("We found not it" + dataPlaces[index].City)
       }
       //alert(dataPlaces[index].City)
       gd.data[0].x = monthNames;
       gd.data[0].y = dataAverageTemp;
       layout.yaxis.autorange = true;
       layout.title ='Average monthly temperature in '  + dataPlaces[index].City;
       Plotly.redraw(gd, layout)

});
