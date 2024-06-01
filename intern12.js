// scripts.js
$(document).ready(function() {
    var modal = $('#contactModal');

    $('#contactUsBtn').on('click', function() {
        modal.show();
    });

    $('.close').on('click', function() {
        modal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });
});