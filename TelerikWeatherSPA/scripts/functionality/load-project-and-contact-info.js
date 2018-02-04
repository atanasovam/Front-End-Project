(function () {

    var createProjectInfo = function () {
        var projectBox = $("<div/>")
            .append($("<h1/>").html("For the project"))
            .append($("<p/>").html("WheatherTour is WebApp, created as group project in Telerik Academy Alpha JavaScript Nov’2017. The members of the team are Lachezar, Milena, and Slavka."))
            .append($("<p/>").html("Our App represent current weather data in chosen city. Also show some images and info for the city and top tourist places, some weather history for the period that you choose."))
            .append($("<p/>").html("You can choose city, admin can add info for new cities."))
            .append($("<p/>").html("Logged visitors can see them own favorite cities in different category, visited destinations and next trip places."));

        return projectBox.html();
    }

    var createFooter = function () {
        var footerBox = $("<div/>")
            .append($("<h1/>").html("Contact us"))
            .append($("<p/>").html("Learning company name: Telerik Academy"))
            .append($("<p/>").html("Programme name: Alpha JavaScript Nov" + "&#39;" + "2017"))
            .append($("<p/>").html("GitHub repository of the project: ").append($("<a/>").html("https://github.com/atanasovam/Front-End-Project").attr("href", "https://github.com/atanasovam/Front-End-Project")))
            .append($("<p/>").html("Team members:"))
            .append($("<p/>").html("1. Lachezar Todorov;"))
            .append($("<p/>").html("2. Milena Atanasova;"))
            .append($("<p/>").html("3. Slavka Todorova."))
        return footerBox.html();
    }
 
    $(function () {
        var $projectInfo = createProjectInfo();
        $("#about-part").html($projectInfo);
        var footer = createFooter();
        $("#footer").html(footer);
    });

})();