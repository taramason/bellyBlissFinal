console.log("inJS");

$( document ).ready(function() {

    console.log( "ready!" );

    $(".dropdown-button").dropdown();

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $('.carousel').carousel({ noWrap: true });

//figure out how to stop after going through once
    // $('.carousel').carousel(setTimeout(autoplay, 4500));
    //   function autoplay() {
    //     $('.carousel').carousel('next');
    //     setTimeout(autoplay, 4500);
    //   }

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
