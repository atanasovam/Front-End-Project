jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(this.hash).offset().top - $("#navbar")[0].offsetHeight }, 900);
    });
    $('.profile-page').addClass('hidden');
    $('.log-in').addClass('hidden');
   // $("#admin").addClass('hidden')
   $("#admin").addClass('hidden')
});

