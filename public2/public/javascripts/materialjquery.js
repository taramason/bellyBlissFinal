console.log("inJS");

$( document ).ready(function() {

    console.log( "ready!" );

    $(".dropdown-button").dropdown();

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $('.carousel').carousel({ noWrap: true });

      $(document).ready(function(){
        $('.modal').modal();
      });

// make statement to add border to bottom of classes diff color based on location
//     if ($('.card .card-content').hasClass('cherryCreek')) {
//       $(this).addClass('cherryCreekBorder');
//     };

//figure out how to stop after going through once
    // $('.carousel').carousel(setTimeout(autoplay, 4500));
    //   function autoplay() {
    //     $('.carousel').carousel('next');
    //     setTimeout(autoplay, 4500);
    //   }

//change colors based on where scrolled to.  Need to make slower transition.
    // $(window).scroll(function() {
    //         var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    //         var osWork = $('#workshopsID').offset().top; // pixels to the top of div1
    //         var htWork = $('#workshopsID').height(); // height of div1 in pixels
    //         var osWork = $('#specialsID').offset().top; // pixels to the top of div1
    //         var htWork = $('#specialsID').height();
    //         // if you've scrolled further than the top of workshopsID plus it's height
    //         // change the color. either by adding a class or setting a css property
    //         if(scroll >= osWork - htWork ){
    //             $('body').addClass('orangeBorder');
    //         }
    //         if(scroll >= osSpec - htSpec ){
    //             $('body').addClass('tealBorder');
    //         }
    //     });

 //collapsible on workshops page
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
});
