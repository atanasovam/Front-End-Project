const showProfilePage = function () {
    $('.visited-dest').addClass('hidden');
    $('.next-trip-places').addClass('hidden');
    $('.select-dest-type').addClass('hidden');

    $('.index').addClass('hidden');
    $('#profile-page').addClass('hidden');
    $('.visited-dest .next-trip-places .select-dest-type').addClass('hidden');
};
const hideProfilePage = function () {
    $('#profile-page')
        .addClass('hidden');

    $('.index')
        .css('display', 'inline');
};

// LOGIN
const login = function () {
    const showLoginPopUp = function () {
        $('#log-in-pop-up').css('display', 'inline');
        const email = $('#email').val().trim();
        const pass = $('#password').val().trim();

        // const isAdmin = email === 'admin@ad.com' && pass === 'admin';
        // const isValidUser = '(\S+)@(\S+)\.(\S+)'.test(email) && pass === 'admin';

        if (false) {
            showAdminPanel();
        } else if (true) {
            showProfilePage();
        } else {
            alert('invalid tokens!');
        }
    };

    const buttonVal = $('#sign-up').text();
    if (buttonVal === 'Sign up') {
        showLoginPopUp();
    } else {
        alert('out');
    }

    $('#logged').text('Hello, user!');
    $('#sign-up').text('');
    $('#sign-out').text('Sign out');
};
// LOGOUT
const logout = function () {
    hideProfilePage();
    $('#logged').text('');
    $('#sign-up').text('Sign up');
    $('#sign-out').text('');
};

// $('#user').on('click', login);
// $('#sign-out').on('click', logout);
$('#logged').on('click', showProfilePage);
$('.scroll').on('click', hideProfilePage);
$('#top').on('click', hideProfilePage);
