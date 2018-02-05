(function(scope) {
    var URL = "../../styles/images/" + city.name+"/";
    var getCityInfo = function() {
        return http.getJson( URL );
    };

    var getSuperheroDetails = function( id ) {
        return http.getJson( URL + "/" + id );
    };

    var createSuperhero = function( name, secretIdentity, bio, imgUrl ) {
        return http.postJson ( url, { name, secretIdentity, bio, imgUrl} );
    };

    scope.data = {
        getSuperheroes: getSuperheroes,
        getSuperheroDetails: getSuperheroDetails,
        createSuperhero: createSuperhero
    };

})(window);