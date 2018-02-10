$(document).ready((function () {
    var $container = $('#container');
    $container.addClass("vertical-align");

    var $row = $('<div>')
        .addClass('mainDivIntro row');

    var $first = $('<div>')
        .addClass('col-md-2 col-sm-2 col-xs-2 col-sm-offset-1 col-xs-offset-1 vertical-align text')
        .append($("<p/>")
            .html('Want to travel?'));

    var $second = $('<div>')
        .addClass('col-md-2 col-sm-2 col-xs-2 vertical-align text')
        .append($("<p/>")
            .html(`Don't know where?`));

    var $third = $('<div>')
        .addClass('col-md-2 col-sm-2 col-xs-2 vertical-align text')
        .append($("<p/>")
            .html('We help you choose!'));


    $row.append($first);
    $row.append($('<div/>')
    .addClass('col-md-2 col-sm-2 col-xs-2 vertical-align')
        .append($("<p/>")
            .addClass('triangle')));

    $row.append($second);
    $row.append($('<div/>')
    .addClass('col-md-2 col-sm-2 col-xs-2 vertical-align')
        .append($("<p/>")
            .addClass('triangle')));

    $row.append($third);

    $container.append($row);
})());