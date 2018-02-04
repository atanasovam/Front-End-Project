jQuery(document).ready(function ($) {
    const showProfilePage = function () {
        $('.last-searched').addClass('hidden');
        $('.next-trip-places').addClass('hidden');
        $('.select-dest-type').addClass('hidden');

        $('.log-in').addClass('hidden');
        $('.profile-page').removeClass('hidden');
        $('.last-searched .next-trip-places .select-dest-type').addClass('hidden');
    };

    const hideProfilePage = function () {
        $('log-in').addClass('hidden');
        $('.profile-page')
            .addClass('hidden');

        $('.index')
            .removeClass('hidden');
    };

    const showLogInForm = function () {
        const login = function () {
            const email = $('#email').val().trim();
            const pass = $('#password').val().trim();

            // const rgx = new RegExp(/(\S+)@(\S+)\.(\S+)/, 'g');
            const isAdmin = email === 'admin@ad.com' && pass === 'admin';
            const isValidUser = email.length > 6 && pass.length > 6;
            // debugger
            const loginButton = $('#sign-up');
            const logoutButton = $('#sign-out');
            const greetings = $('#logged');
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

    const logout = function () {
        hideProfilePage();
        $('#logged').text('');
        $('#sign-up').text('Sign up');
        $('#sign-out').text('');
    };

    const manageGreetings = function () {
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