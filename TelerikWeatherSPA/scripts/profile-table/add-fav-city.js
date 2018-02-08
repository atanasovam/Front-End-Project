var cityArr = [];

var makeDeleteButton = (function() {
    return $('<button>')
        .attr('class', 'cityToAdd')
        .attr('type', 'button')
        .text('Delete all.');
})();

$('#labelFavCity').append(makeDeleteButton);

$('#addFav').on('click', function() {
    var cityToAdd = $('#addInput').val();
    cityArr.push(cityToAdd);

    var ol = $('.fav-places-ol');
    var customDiv = $('<div>').attr('class', 'cityToAdd');
    var li = $('<li>').html(cityToAdd);

    customDiv.append(li);
    customDiv.appendTo(ol);

    $('#addInput').val('');

    $('.cityToAdd').on('click', function() {
        $('.fav-places-ol')
            .children()
            .addClass('hidden');

        $('#label').removeClass('hidden');
    })
})
