jQuery(document).ready(function ($) {
    var showProfilePage = function () {
        $('.last-searched').addClass('hidden');
        $('.next-trip-places').addClass('hidden');
        $('.select-dest-type').addClass('hidden');

        $('.log-in').addClass('hidden');
        $('.profile-page').removeClass('hidden');
        $('.last-searched .next-trip-places .select-dest-type').addClass('hidden');
    };

    var hideProfilePage = function () {
        $('log-in').addClass('hidden');
        $('.profile-page')
            .addClass('hidden');

        $('.index')
            .removeClass('hidden');
    };

    var showLogInForm = function () {
        var login = function () {
            var email = $('#email').val().trim();
            var pass = $('#password').val().trim();

            // var rgx = new RegExp(/(\S+)@(\S+)\.(\S+)/, 'g');
            var isAdmin = email === 'admin@ad.com' && pass === 'admin';
            var isValidUser = email.length > 6 && pass.length > 6;
            // debugger
            var loginButton = $('#sign-up');
            var logoutButton = $('#sign-out');
            var greetings = $('#logged');
            if (isAdmin) {
                // showControlPanel();
                alert('admin')
            } else if (isValidUser) {
                showProfilePage();

                $('#email').val('');
                $('#password').val('');

                greetings.text('Hello, user!');
                loginButton.text('');
                logoutButton.text('Sign out');
            } else {
                // hideProfilePage();

                // greetings.text('');
                // loginButton.text('Sign up');
                // logoutButton.text('');

                // alert('Invalid tokens!');
            }
        };

        $('.index').addClass('hidden');
        $('.log-in').removeClass('hidden');
        $('#log-user').on('click', login);
    };

    var logout = function () {
        hideProfilePage();
        $('#logged').text('');
        $('#sign-up').text('Sign up');
        $('#sign-out').text('');
    };

    var manageGreetings = function () {
        $('.index').addClass('hidden');
        $('.log-in').addClass('hidden');
        $('.profile-page').removeClass('hidden');
    };

    $('#sign-up').on('click', showLogInForm);
    $('#sign-out').on('click', logout);
    $('#logged').on('click', manageGreetings);
    $('.scroll').on('click', hideProfilePage);
    $('#top').on('click', hideProfilePage);
});