$(document).on('click', '#back_top_button', function () {
    var position = $('#welcome').position().top;
    $("html, body").animate({ scrollTop: position }, 500);
});