(function () {
    var createHistoryInfoBox = function (cityHistoryData) {
        var $box = $("<div/>")
            .addClass("container");
        var $template = $("<img/>");

        (function ( cityHistoryData ) {
            $template.find("img")
                .attr("src", cityHistoryData.imgUrl);

            $box.append(
                $template.html()
            );
        })();

        return $box;
    };

    $(function (city) {
      
        var $info =  $("<p/>").html(city.name);
        //var $info = createHistoryInfoBox(cityHistoryData);
        $("#photo").html($info);

    });
            

})();