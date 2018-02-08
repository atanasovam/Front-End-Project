jQuery(document).ready(function ($) {

            var $box = $("<div/>");

            var $photo = $("<div/>").addClass("col-xs-4").attr("id", "photo")
                .append($("<img/>")
                    .addClass("max-width-100-height-auto"));
            var $info = $("<div/>").addClass("col-xs-4").attr("id", "city-info")
                .append($("<p/>"));
            var $places = $("<div/>").addClass("col-xs-4").attr("id", "places")
                .append($("<p/>"))
                    .append($("<img/>").addClass("max-width-100-height-auto"));

                    $box.append($photo)
                    .append($info)
                    .append($places);

                    $("#partTwo").html($box.html());

                });

        var changePlacesImg = function (cityHistory) {
            var i = 0;
            var time = 3000;
            var cityImgUrl1 = "../styles/images/cities/" + cityHistory.id + "/";
            var len = cityHistory.places.length;
            var currCity = cityHistory.name;

            function changeImg() {
                if (currCity != $("#places").attr("name")) {
                    return;
                }
                $("#places p").first().html(cityHistory.places[i % len].name);
                $("#places img").first().attr("src", cityImgUrl1 + i % len + ".jpg");
                i += 1;
                setTimeout(function () {
                    changeImg();
                }, time);
            }
            changeImg();
        }

        var showHistoryPanel = function (cityId) {

            var cityHistory = destination(cityId).getDataCity();

            var cityImgUrl = "../styles/images/cities/" + cityHistory.id + "/";
            $("#places").attr("name", cityHistory.name);
            $("#photo").find("img").attr("src", cityImgUrl + "main.jpg");
            $("#city-info p").first().html(cityHistory.info);

            changePlacesImg(cityHistory);
        };