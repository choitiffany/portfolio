$(function () {
    console.log('ready');


    //slide toggle
    $('div.caption').hide();


    $('.story').hover(function () {
        $('div#caption').slideToggle(500);

    });


}); //end