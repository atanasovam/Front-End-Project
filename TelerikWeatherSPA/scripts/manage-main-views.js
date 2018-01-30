const showProfilePage = function () {
    $('#log-in-pop-up').css('display', 'none')
    $('.visited-dest').css('display', 'none');
    $('.next-trip-places').css('display', 'none');
    $('.select-dest-type').css('display', 'none');

    $('.index').css('display', 'none');
    $('#profile-page').css('display', 'inline');
    $('.visited-dest .next-trip-places .select-dest-type').css('display', 'none');
};
const hideProfilePage = function () {
    $('#profile-page')
        .css('display', 'none');

    $('.index')
        .css('display', 'inline');
};
// LOGOUT
const logout = function () {
    hideProfilePage();
    $('#logged').text('');
    $('#sign-up').text('Sign up');
    $('#sign-out').text('');
};
const logIn = function () {
    const email = $('#email').val().trim();
    const pass = $('#password').val().trim();

    const rgx = new RegExp(/(\S+)@(\S+)\.(\S+)/, 'g');
    const isAdmin = email === 'admin@ad.com' && pass === 'admin';
    const isValidUser = email.length > 6 && pass.length > 6;

    if (isValidUser) {
        // debugger
        showProfilePage();
    } else {
        alert('invalid tokens!');
    }
};

jQuery(document).ready(function ($) {
    // $('#user').on('click', login);
    // $('#sign-out').on('click', logout);
    $('#logged').on('click', showProfilePage);
    $('.scroll').on('click', hideProfilePage);
    $('#top').on('click', hideProfilePage);

    $('#log-in-pop-up').on('click', '#user', logIn);
});