const favPlaces = $('.fav-places');
const visitedDest = $('.visited-dest');
const nextTripDest = $('.next-trip-places');
const selectDestType = $('.select-dest-type');

const show = function (el) {
    el.removeClass('hidden');
};
const hide = function (el) {
    el.addClass('hidden');
};

$('#fav-places').on('click', function () {
    hide(visitedDest);
    hide(nextTripDest);
    hide(selectDestType);

    show(favPlaces);
});
$('#visited-dest').on('click', function () {
    hide(favPlaces);
    hide(nextTripDest);
    hide(selectDestType);

    show(visitedDest);
});
$('#next-trip-places').on('click', function () {
    hide(favPlaces);
    hide(visitedDest);
    hide(selectDestType);

    show(nextTripDest);
});
$('#select-dest-type').on('click', function () {
    hide(favPlaces);
    hide(visitedDest);
    hide(nextTripDest);

    show(selectDestType);
});

