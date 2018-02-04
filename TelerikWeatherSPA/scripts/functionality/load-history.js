(function () {
    var createHistoryInfoBox = function (cityHistory) {
        
        var $box = $("<div/>");

        var $photo = $("<div/>").addClass("col-xs-4").attr("id", "photo")
            .append($("<img/>")
                .addClass("max-width-100-height-auto"));
        var $info = $("<div/>").addClass("col-xs-4").attr("id", "city-info")
            .append($("<p/>").addClass(""));
        var $places = $("<div/>").addClass("col-xs-4").attr("id", "top-places")
            .append($("<p/>").addClass(""))
            .append($("<img/>").addClass("max-width-100-height-auto"));

        (function () {
            var cityImgUrl = "../../styles/images/cities/" + cityHistory.id + "/";
            $photo.find("img").attr("src", cityImgUrl  + "main.jpg");
            $info.find("p").html(cityHistory.info);
            $places.find("p").html(cityHistory.places[0].name);
            $places.find("img").attr("src", cityImgUrl + 0 + ".jpg");

            $box.append($photo)
                .append($info)
                .append($places);
        })();

        return $box.html();
    };

    $(function () {
        var cityHistory = destination(727011).getDataCity();
        var $infoBox = createHistoryInfoBox(cityHistory);
        $("#partTwo").html($infoBox);
    });


})();