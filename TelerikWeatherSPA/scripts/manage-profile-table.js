const favPlaces = $('.fav-places');
const visitedDest = $('.visited-dest');
const nextTripDest = $('.next-trip-places');
const selectDestType = $('.select-dest-type');

const show = function (elementsArr) {
    console.log(elementsArr)
    debugger
    elementsArr.forEach((el) => {
        el.css('display', 'inline');
    });
};
const hide = function (elementsArr) {
    elementsArr.forEach((el) => {
        el.css('display', 'none');
    });
};

$('#fav-places').on('click', function () {
    // hide([visitedDest, nextTripDest, selectDestType]);
    // show(favPlaces);
});
$('#visited-dest').on('click', function () {
    hide([favPlaces, nextTripDest, selectDestType]);
    show(visitedDest);
});
$('#next-trip-places').on('click', function () {
    // hide([favPlaces, visitedDest, selectDestType]);
    // show(nextTripDest);
});
$('#select-dest-type').on('click', function () {
    // hide([favPlaces, visitedDest, nextTripDest]);
    // show(selectDestType);
});

