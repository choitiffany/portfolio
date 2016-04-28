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


    $('section#caption').hide();
console.log("hover over ");
    $('.story').hover(function () {
        $('section#caption').slideToggle(500);
});
}); //end