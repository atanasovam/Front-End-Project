 var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
    });
}





// navigator.geolocation.getCurrentPosition(success, error);

//         function success(position) {

//             var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

//             $.getJSON(GEOCODING).done(function(location) {
//                 alert(location.results[0].address_components[5].long_name)
//                 $('#country').html(location.results[0].address_components[5].long_name);
//                 $('#state').html(location.results[0].address_components[4].long_name);
//                 $('#city').html(location.results[0].address_components[2].long_name);
//                 $('#address').html(location.results[0].formatted_address);
//                 $('#latitude').html(position.coords.latitude);
//                 $('#longitude').html(position.coords.longitude);
//             })

//         }

//         function error(err) {
//             console.log(err)
//         }

