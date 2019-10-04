$(document).ready(function($){
	"use strict";
  

	// WOW Js Active
	new WOW().init();

	// ---- Active
  // news post slider..........................,.....
    $('.owl-crsl').owlCarousel({
    loop:true,
    margin:10,
    navText:['<sapn><i class="fa fa-arrow-left"></i><span>','<sapn><i class="fa fa-arrow-right"></i><span>'],
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// calender...........................................






  
}(jQuery));





