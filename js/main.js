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
 window.onload = function() {
            Calendar.setup({
              dateField     : 'date',
              parentElement : 'calendar'
            })
          }
// dropdown.............................................
        const $dropdown = $(".dropdown");
        const $dropdownToggle = $(".dropdown-toggle");
        const $dropdownMenu = $(".dropdown-menu");
        const showClass = "show";
     
    $(window).on("load resize", function() {
      if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
          function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });

    // scrollbar.........................
        //Get the button
        var mybutton = document.getElementById("myBtn");
    
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
    
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
    
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }


  
}(jQuery));





