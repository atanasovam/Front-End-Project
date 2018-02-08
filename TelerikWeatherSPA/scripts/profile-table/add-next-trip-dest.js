var cityArr = [];

var makeDeleteButton = (function() {
    return $('<button>').attr('class', 'destToAdd').attr('type', 'button').text('Delete all.');
})();

$('#labelNextDest').append(makeDeleteButton);

$('#addNextDest').on('click', function() {
    var cityToAdd = $('#nextTrip').val();
    cityArr.push(cityToAdd);

    var ol = $('.next-trip-places-ol');
    var customDiv = $('<div>').attr('class', 'nextDest');
    var li = $('<li>').html(cityToAdd);

    customDiv.append(li);
    customDiv.appendTo(ol);
    $('#nextTrip').val('');

    $('.destToAdd').on('click', function() {
        $('.next-trip-places-ol').children().addClass('hidden');
        $('#labelNextDest').removeClass('hidden');
    })
})