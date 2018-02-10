$(document).ready((function () {
    var $container = $('#container');

    var $row = $('<div>')
        .addClass('row')
        .addClass('mainDivIntro');

    var $first = $('<div>')
        .addClass('intro')
        .addClass('col-sm-2')
        .html('Want to travel?');

    var $second = $('<div>')
        .addClass('intro')
        .addClass('col-sm-2')
        .html(`Don't know where?`);

    var $third = $('<div>')
        .addClass('intro')
        .addClass('col-sm-2')
        .html('We help you to choose!');


    $row.append($first);
    $row.append($('<p>')
        .addClass('triangle').addClass('col-sm-2'));

    $row.append($second);
    $row.append($('<p>')
        .addClass('triangle').addClass('col-sm-2'));

    $row.append($third);

    $container.append($row);
    $('.intro').css('color', 'white');
})());
