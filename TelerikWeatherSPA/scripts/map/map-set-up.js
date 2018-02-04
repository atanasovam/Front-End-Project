var map;
var cityName;
var cityMap = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.683, lng: 23.390 },
        zoom: 8
    });

    google.maps.event.addListener(map, 'click', function (event) {
        //alert(event.latLng)
        //var address = encodeURIComponent($("#location").val());
        var API = "AIzaSyB0HeNhdqO0V6nJXW7CYQ28QoUQhUYqkYc"
        //var myLatLng = "40.714224,-73.961452"
        var myLatLng = event.latLng.toString() + ""

        myLatLng = myLatLng.split("(")[1]
        myLatLng = myLatLng.split(")")[0].split(" ").join("")
        //console.log(myLatLng)
        var GEOCODING = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + myLatLng + "&key=" + API
        $.ajax({
            type: "GET",
            url: GEOCODING,
            dataType: "json",
            error: function () {
                console.log('Error on request')
            },
            success: function (data) {
                data = JSON.stringify(data)
                var json = JSON.parse(data);
                // Do stuff here
                //console.log(json);
                for (i in json.results) {
                    // console.log(json.results[0]);
                    // debugger;
                    for (k in json.results[i].address_components) {
                        // console.log(json.results[i].address_components[k].types);
                        // debugger;
                        if ("locality" === json.results[i].address_components[k].types[0]) {
                            // console.log(json.results[i].address_components.);
                            // debugger;
                            cityName = json.results[i].address_components[k].long_name
                            // alert(cityName);
                            appendLastSearched(cityName);
                            requestForecast(cityName);
                            return;
                        }
                    }
                }
            }
        })
    })
}

var appendLastSearched = function (city) {
    var lastSearchedUl = $('.last-searched-ul');
    var destLi = $('<li><p></p></li>').html(`${city}`);

    if (cityMap.indexOf(city) > -1) {
        return;
    }

    cityMap.push(city);
    destLi.appendTo(lastSearchedUl);
};
