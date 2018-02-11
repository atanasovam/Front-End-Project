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
        $("#navBarOne").css("background", 'whitesmoke');
    }); 
    $("#navBarTwo").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $("#navBarTwo").css("background", 'whitesmoke');
    }); 
    $("#navBarThree").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $("#navBarThree").css("background", 'whitesmoke');
    }); 
    $("#navBarFour").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        $("#navBarFour").css("background", 'whitesmoke');
    }); 
    $(".navbar-logo").click(function (event) {
        event.preventDefault();
        $(".navbar-button").css("background", 'white');
        
    }); 

});
