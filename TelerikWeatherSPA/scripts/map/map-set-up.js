
var map;
var cityName;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.683, lng: 23.390},
    zoom: 8
    });
    google.maps.event.addListener(map, 'click', function(event) {
        //alert(event.latLng)
        //var address = encodeURIComponent($("#location").val());
        var API = "AIzaSyB0HeNhdqO0V6nJXW7CYQ28QoUQhUYqkYc"
        //var myLatLng = "40.714224,-73.961452"
        var myLatLng = event.latLng.toString() +""
        
        myLatLng = myLatLng.split("(")[1]
        myLatLng = myLatLng.split(")")[0].split(" ").join("")
        //console.log(myLatLng)
        var GEOCODING = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ myLatLng + "&key=" + API
        $.ajax({
            type: "GET",
            url: GEOCODING,
            dataType: "json",
            error: function() {
                console.log('Error on request')
            },
            success:  function (data) {
                data  = JSON.stringify(data)
                var json = JSON.parse(data);
                // Do stuff here
                //console.log(json);
                for(i in  json.results ) {
                    for(k in json.results[i].address_components) {
                        //console.log(json.results[i].address_components[k].types);
                        if("locality"===json.results[i].address_components[k].types[0]) {
                            //console.log(i, k, )
                            cityName = json.results[i].address_components[k].long_name
                            //alert(json.results[i].address_components[k].long_name)
                            console.log(cityName)
                            requestForecast(cityName)
                            return;
                        }
                    }
                }
                
            }
        })
        
    })

}



