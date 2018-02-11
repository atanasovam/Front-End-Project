var dataPlaces; 
var indexCityTemp;
var indexCitySun;
var dataPlacesSunshine;
var dataAverageTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dataAverageSunshine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d3 = Plotly.d3;
var layout = {
    
     title: 'Average Temperature',
     font: {
        family:'Helvetica serif', 
        size: 15,
        color: 'white', 
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


var plotTemp = function() {
    gd.data[0].x = monthNames;
    gd.data[0].y = dataAverageTemp;
    layout.yaxis.autorange = true;
    gd.data[0].marker.line.width = 0;
    gd.data[0].marker.color = "rgb(0,34,102)";
    layout.title ='Average monthly temperature in '  + dataPlaces[indexCityTemp].City;
    Plotly.redraw(gd, layout)

}
var plotSun = function() {
    gd.data[0].x = monthNames;
    gd.data[0].y = dataAverageSunshine;
    gd.data[0].marker.line.width = 0;
    gd.data[0].marker.color = "rgb(255,194,102)";
    layout.yaxis.autorange = true;
    layout.title ='Average monthly number of sunshine hours in '  + dataPlacesSunshine[indexCitySun].City;
    Plotly.redraw(gd, layout)
}


$( "#form-data-submit" ).on('click', function( event ) {
        //indexCityTemp = 0;
        //indexCitySun = 0;   
        dataAverageTemp = [];
        dataAverageSunshine = [];
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
        var name = "cities-sunshine";
        $.ajax({
            url: '../data/data-statistical/' + name + '.json',
            dataType: "JSON",
            async: false,
            error: function () {
               alert("problem")
            },
            success: function (data) {
                dataPlacesSunshine = data;
            },
            type: 'GET'
        });
       
       
        for(var index = 0; index<dataPlaces.length; index++) {
            
           if(place.trim().length>0 && dataPlaces[index].City.toLowerCase() === place) {
               for(var monthIndex = 0; monthIndex<monthNames.length; monthIndex++) {
                    dataAverageTemp.push(dataPlaces[index][monthNames[monthIndex]]);
               }
               indexCityTemp = index;
               break;
            
           }
           //alert("We found not it" + dataPlaces[index].City)
        }
          
       for(var indexSun = 0; indexSun<dataPlacesSunshine.length;  indexSun++) {
        
            if(place.trim().length>0 && dataPlacesSunshine[indexSun].City.toLowerCase() === place) {
                for(var monthIndex = 0; monthIndex<monthNames.length; monthIndex++) {
                        dataAverageSunshine.push(dataPlacesSunshine[indexSun][monthNames[monthIndex]]);
                }
                indexCitySun = indexSun;
                break;
            }
       //alert("We found not it" + dataPlaces[index].City)
        }
       if(month>0) {
            $('#temp-text').html("The expected average temperature for " + dataPlaces[index].City + " in " + monthNamesFull[month-1] + " is " 
            +  Math.round(Number(dataAverageTemp[month-1])) +  "&deg;C." );
       }
       if(month>0) {
        $('#sun-text').html( "If you go to " + dataPlacesSunshine[indexSun].City  +" in " + monthNamesFull[month-1] +
         " you'll get around " +  Math.round(Number(dataAverageSunshine[month-1])/31) +  " hours of sunlight per day." );
        }
       
        if($('#select-data').val() ==="temp") {
            //alert(dataPlaces[index].City)
            plotTemp();


        } 
        if($('#select-data').val() ==="sun") {
            plotSun();

        } 
      

});

$(document).ready(function() {

    $('#select-data').on('change', function() {
        if($('#select-data').val() ==="temp") {

            plotTemp();
   

        } 
        if($('#select-data').val() ==="sun") {
            plotSun();

        } 
      })
});
