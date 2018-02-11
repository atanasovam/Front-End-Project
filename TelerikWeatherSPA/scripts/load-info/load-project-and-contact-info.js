(function() {

    
        var projectBoxOne = $("<div/>").addClass('col-sm-6')
            .append($("<p/>")
                .html("WheatherTour is a WebApp, created as team project at Telerik Academy - Alpha JavaScript Nov’2017. "+
                "This App can show the current weather data for a chosen city. "+ 
            "The second part of this App shows images and information for the city and its top tourist places. " +
            " It also shows statistical climate data for a city chosen by the user. Thus the user can use the App as a guide for planning a trip or holiday to the particular destination. "))
          
            var projectBoxTwo = $("<div/>").addClass('col-sm-6')
              .append($("<p/>")
                    .html("You can choose city and the admin can add info for new cities."+
                    "Logged visitors can see their own favorite cities in different categories, their visited destinations and saved future trips. "+
                    "The members of the team are Lachezar, Milena, and Slavka. "
                ));
    
        var footerBoxOne = $("<div/>").addClass('col-sm-6 col-xs-12')
        
            .append($("<h1/>")
                .html("Contact us"))
            .append($("<p/>")
                .html("Company name: Telerik Academy"))
            .append($("<p/>")
                .html("Programme name: Alpha JavaScript Nov" + "&#39;" + "2017"))
            .append($("<p/>")
                .html("GitHub repository of the project: ").append($("<a/>").html("https://github.com/atanasovam/Front-End-Project").attr("href", "https://github.com/atanasovam/Front-End-Project")))

            var footerBoxTwo = $("<div/>").addClass('col-sm-6 col-xs-12')
               
                .append($("<h1/>")
                    .html("Team members"))
                .append($("<p/>")
                    .html("1. Lachezar Todorov;"))
                .append($("<p/>")
                    .html("2. Milena Atanasova;"))
                .append($("<p/>")
                    .html("3. Slavka Todorova."));
       

    $(function() {
        // var $projectInfo = createProjectInfo();
        
        $("#about-part").append(projectBoxOne)
        .append(projectBoxTwo)

        $("#footer").append(footerBoxOne)
        .append(footerBoxTwo);
        // var footer = createFooter();
        // $("#footer").html(footer);
    });
})();