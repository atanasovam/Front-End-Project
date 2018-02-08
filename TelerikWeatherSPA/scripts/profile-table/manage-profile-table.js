var favPlaces = $('.fav-places');
var visitedDest = $('.last-searched');
var nextTripDest = $('.next-trip-places');
var selectDestType = $('.select-dest-type');

var show = function(el) {
    el.removeClass('hidden');
};
var hide = function(el) {
    el.addClass('hidden');
};

$('#fav-places').on('click', function() {
    hide(visitedDest);
    hide(nextTripDest);
    hide(selectDestType);

    show(favPlaces);
});
$('#last-searched').on('click', function() {
    hide(favPlaces);
    hide(nextTripDest);
    hide(selectDestType);

    show(visitedDest);
});
$('#next-trip-places').on('click', function() {
    hide(favPlaces);
    hide(visitedDest);
    hide(selectDestType);

    show(nextTripDest);
});
$('#select-dest-type').on('click', function() {
    hide(favPlaces);
    hide(visitedDest);
    hide(nextTripDest);

    show(selectDestType);
});
