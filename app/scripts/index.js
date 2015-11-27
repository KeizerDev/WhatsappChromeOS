$(function() {
    adview();
    $('.overlay').on('click', ' .close', function(event) {
        $('.overlay').removeClass('visable');
        adview();
        event.preventDefault();
    });
});

function adview() {
    setTimeout(function() {
        $('.overlay').addClass('visable');
    }, 2000000);
}
