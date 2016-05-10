$(document).ready(function() {
  console.log("ready");


  

   $('#storyspace').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/ss_hover.png')
    }, function () { //second function
        $(this).attr('src', 'images/ss2.jpg')
    });

   $('#infographics').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/infographic_hover.png');
    }, function () { //second function
        $(this).attr('src', 'images/cindymockup.jpg');
});
     $('#soothe').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/soothe_hover.png');
     
    }, function () { //second function
        $(this).attr('src', 'images/soothe.jpg');
      
    });
     $('#ui').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/ui_hover.png');
    }, function () { //second function
        $(this).attr('src', 'images/RakMockup.jpg');
    });

          $('#paint').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/paint_hover.png');
    }, function () { //second function
        $(this).attr('src', 'images/tote.jpg');
    });


          $('#rb').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/remedy_hover.png');
    }, function () { //second function
        $(this).attr('src', 'images/rb.jpg');
        });

}); //end