$(function () {
    console.log('ready');

    $('.slide').hover(
        function () {
            $(this).find('.caption').slideToggle(300);
        },
        function () {
            $(this).find('.caption').slideToggle(300);
        }
    );

}); //end