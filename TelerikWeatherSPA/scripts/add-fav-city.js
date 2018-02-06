var cityArr = [];

var makeDeleteButton = (function () {
    return $('<button>').attr('class', 'cityToAdd btn btn-primary').attr('type', 'button').text('Delete all.');
})();

$('#label').append(makeDeleteButton);

$('#add').on('click', function () {

    var cityToAdd = $('#addInput').val();
    cityArr.push(cityToAdd);

    var ol = $('.fav-places-ol');
    var customDiv = $('<div>').attr('class', 'cityToAdd');
    var li = $('<li>').html(cityToAdd);

    customDiv.append(li);
    customDiv.appendTo(ol);
    $('#addInput').val('');


    $('.cityToAdd').on('click', function () {
        $('.fav-places-ol').children().addClass('hidden');
        $('#label').removeClass('hidden');
    })
})
