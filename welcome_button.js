$(document).on('click', '#skills-teleport-button', function () {
    var position = $('#skills').position().top;
    $("html, body").animate({ scrollTop: position }, 750);
});
$(document).on('click', '#games-teleport-button', function () {
    var position = $('#games').position().top;
    $("html, body").animate({ scrollTop: position }, 750);
});
$(document).on('click', '#profile-teleport-button', function () {
    var position = $('#profile').position().top;
    $("html, body").animate({ scrollTop: position }, 750);
});
$(document).on('click', '#link-teleport-button', function () {
    var position = $('#link').position().top;
    $("html, body").animate({ scrollTop: position }, 750);
});