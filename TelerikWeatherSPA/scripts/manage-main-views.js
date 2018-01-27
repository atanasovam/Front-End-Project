const showProfilePage = function () {
    $('.visited-dest').css('display','none');
    $('.next-trip-places').css('display','none');
    $('.select-dest-type')  .css('display','none');

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

// LOGIN
const login = function () {
    showProfilePage();

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

$('#sign-up').on('click', login);
$('#sign-out').on('click', logout);
$('#logged').on('click', showProfilePage);
$('.scroll').on('click', hideProfilePage);