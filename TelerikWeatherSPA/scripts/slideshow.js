$(document).ready(function() {
    var directions = (function() {
        $("#myCarousel").carousel({ interval: 2500 });

        $(".item1").click(function() {
            $("#myCarousel").carousel(0);
        });
        $(".item2").click(function() {
            $("#myCarousel").carousel(1);
        });
        $(".item3").click(function() {
            $("#myCarousel").carousel(2);
        });
        $(".item4").click(function() {
            $("#myCarousel").carousel(3);
        });

        // Enable Carousel Controls
        $(".left").click(function() {
            $("#myCarousel").carousel("prev");
        });
        $(".right").click(function() {
            $("#myCarousel").carousel("next");
        });
    })();

    // $('container').resize(function () {
    //     alert('size')
    //     var width = $('body').width();
    //     console.log(width);
    // });
});
