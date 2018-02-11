jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(this.hash).offset().top - $("#navbar")[0].offsetHeight }, 900);
    });

    $('.profile-page').addClass('hidden');
    $('.log-in').addClass('hidden');
    $("#admin").addClass('hidden');
    $("#navBarOne").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $(".navbar-button").css('box-shadow', '0 0px black inset, 0 0px red inset, 0px 0 blue inset, 0px 0 green inset');
        $("#navBarOne").css("background", 'whitesmoke');
        $("#navBarOne").css('box-shadow', '0 0px black inset, 0 -2px #2A3E59 inset, 0px 0 blue inset, 0px 0 green inset');
    }); 
    $("#navBarTwo").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $(".navbar-button").css('box-shadow', '0 0px black inset, 0 0px red inset, 0px 0 blue inset, 0px 0 green inset');
        $("#navBarTwo").css("background", 'whitesmoke');
        $("#navBarTwo").css('box-shadow', '0 0px black inset, 0 -2px #2A3E59 inset, 0px 0 blue inset, 0px 0 green inset');
    }); 
    $("#navBarThree").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $(".navbar-button").css('box-shadow', '0 0px black inset, 0 0px red inset, 0px 0 blue inset, 0px 0 green inset');
        $("#navBarThree").css("background", 'whitesmoke');
        $("#navBarThree").css('box-shadow', '0 0px black inset, 0 -2px #2A3E59 inset, 0px 0 blue inset, 0px 0 green inset');
    }); 
    $("#navBarFour").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $(".navbar-button").css('box-shadow', '0 0px black inset, 0 0px red inset, 0px 0 blue inset, 0px 0 green inset');
        $("#navBarFour").css("background", 'whitesmoke');
        $("#navBarFour").css('box-shadow', '0 0px black inset, 0 -2px #2A3E59 inset, 0px 0 blue inset, 0px 0 green inset');
    }); 
    $(".navbar-logo").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $(".navbar-button").css('box-shadow', '0 0px black inset, 0 0px red inset, 0px 0 blue inset, 0px 0 green inset');
        
    }); 

});
