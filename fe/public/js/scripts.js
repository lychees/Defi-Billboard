/*
==============================================
	KNIT
	Version: 1.0
	Author: BootEx
	Author URL: http://www.ahadhossain.com
------------------------------------------------
================================================
*/

'use strict';

$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
	Isotope Filter
	--------------------*/


	(function($){

		/*------------------
			Navigation
		--------------------*/
		$('.responsive-switch').on('click', function(e) {
			$('.site-menu').toggleClass('active');	
			e.preventDefault();
		});

		$('.menu-list>li>a, .sm-close').on('click', function() {
			$('.site-menu').removeClass('active');
		});

		$('.menu-list').onePageNav({
			easing: 'swing'
		});


		/*------------------
			Hero section
		--------------------*/
		var hero_h = $('.hero-section').innerHeight(),
			body_h = $('body').innerHeight(),
			header_height =  hero_h - body_h;

		$(window).on('scroll resize',function(e) {
			if ($(this).scrollTop() > header_height) {
				$('.hero-content').addClass('sticky');
			}else{
				$('.hero-content').removeClass('sticky');
			}
			e.preventDefault();
		});






		/*------------------
			Service
		--------------------*/
		$('.service-slider').owlCarousel({
			loop:true,
			autoplay:true,
			nav:false,
			dots: false,
			margin:30,
			responsive:{
				0:{
					items:1
				},
				720:{
					items:2
				},
				992:{
					items:3
				}
			}
		});



		/*------------------
			Testimonial
		--------------------*/
		$('.review-slider').owlCarousel({
			dots: false,
			nav: true,
			loop: true,
			margin:30,
			smartSpeed: 700,
			items:1,
			autoplay:true,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>']
		});


		/*------------------
			WOW JS
		--------------------*/
		new WOW().init();


		/*------------------
			CONTACT FORM
		--------------------*/
		$('#contact-form').on('submit', function() {
			var send_btn = $('#send-form'),
				form = $(this),
				formdata = $(this).serialize(),
				chack = $('#form-chack');
				send_btn.text('Wait...');

			function reset_form(){
				$("#name").val('');
				$("#email").val('');
				$("#massage").val('');
			}

			$.ajax({
				url:  $(form).attr('action'),
				type: 'POST',
				data: formdata,
				success : function(text){
					if (text == "success"){
						send_btn.addClass('done');
						send_btn.text('Success');
						setTimeout(function() {
							reset_form();
							send_btn.removeClass('done');
							send_btn.text('Send Massage');
						}, 3000);
					}
					else {
						reset_form();
						send_btn.addClass('error');
						send_btn.text('Error');
						setTimeout(function() {
							send_btn.removeClass('error');
							send_btn.text('Send Massage');
						}, 5000);
					}
				}
			});
			return false;
		});

	})(jQuery);

});