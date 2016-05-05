$(document).ready(function() {
  console.log("ready");


  

   $('#storyspace').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/ss_hover.png').animate({
     fadeIn:450
        })
    }, function () { //second function
        $(this).attr('src', 'images/ss2.jpg').animate({
            swing:450
        })
    });

   $('#infographics').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/infographic_hover.png').animate({
     swing:450
        })
    }, function () { //second function
        $(this).attr('src', 'images/cindymockup.jpg').animate({
            swing:450
        })
    });

     $('#soothe').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/soothe_hover.png').animate({
     swing:450
        })
    }, function () { //second function
        $(this).attr('src', 'images/soothe.jpg').animate({
            swing:450
        })
    });
     $('#ui').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/ui_hover.png').animate({
     swing:450
        })
    }, function () { //second function
        $(this).attr('src', 'images/RakMockup.jpg').animate({
            swing:450
        })
    });

          $('#paint').hover(function () {
        console.log("hover over");
        $(this).attr('src', 'images/paint_hover.png').animate({
     swing:450
        })
    }, function () { //second function
        $(this).attr('src', 'images/tote.jpg').animate({
            swing:450
        })
    });

}); //end