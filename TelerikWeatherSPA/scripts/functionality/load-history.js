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

    $(function () {
       // data.getCityHistoryData()
       var cityHistoryData;
       setTimeout(()=>{
       var cityJson = {"name":"Sofia","country":"Bulgaria","imgUrl": "../styles/images/cities/Sofia.jpg", "temperatureHistory":[{"temperature":10,"date":1995}],"temperatureC":10,"id":2};
       cityHistoryData = JSON.stringify(cityJson);
       }, 3000).then(function (cityHistoryData) {
        var $info =  $("<p/>").html(cityHistoryData.name);
        //var $info = createHistoryInfoBox(cityHistoryData);
        $("#photo").html($info);
       }
       );
    });
            

})(window);