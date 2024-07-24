(function($) {
	
	"use strict";
	
	
	
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="far fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	if ($('.offers-carousel').length) {
		$('.offers-carousel').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			dots: true,
			autoHeight: true,
			dotsEach: true,
			smartSpeed: 500,
			autoplay: false,
			rewind: false,
			navRewind: false,
			navText: [ '<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>' ],
			responsive: {
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	if ($('.products-carousel').length) {
		$('.products-carousel').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			dots: true,
			autoHeight: true,
			dotsEach: true,
			smartSpeed: 500,
			autoplay: false,
			rewind: false,
			navRewind: false,
			navText: [ '<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>' ],
			responsive: {
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	if ($('.awards-carousel').length) {
		$('.awards-carousel').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			dots: true,
			autoHeight: true,
			dotsEach: true,
			smartSpeed: 500,
			autoplay: false,
			rewind: false,
			navRewind: false,
			navText: [ '<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>' ],
			responsive: {
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	$(document).ready(function() {
	    $('.main-menu .navigation > li.dropdown').click(function(event) {
	        event.stopPropagation();
	        // Close all other dropdowns
	        $('.main-menu .navigation > li.dropdown').not(this).removeClass('open');
	        // Toggle the clicked dropdown
	        $(this).toggleClass('open');
	    });

	    $(document).click(function() {
	        $('.main-menu .navigation > li.dropdown').removeClass('open');
	    });
	});


})(window.jQuery);




















