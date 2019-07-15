(function ($) {
    'use strict';

    var nav_offset_top = $('header').height() + 50;

    /*--------------------------------------------------------
    * Navbar
    * -------------------------------------------------------*/

    // Navbar Fixed
    function navbarFixed() {
        if ($('.header_section').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top){
                    $('.header_section').addClass("navbar_fixed");
                } else {
                    $('.header_section').removeClass("navbar_fixed");
                }
            });
        }
    }
    navbarFixed();

    /*Mailchimp*/
    /*function mailChimp(){
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    $('select').niceSelect();*/

    /*-------------------------------------------------------*/
    /*--------------Start portofolio Pop Up------------------*/
    /*-------------------------------------------------------*/
    $(window).on('load', function () {
        $('.portofolio-filter ul li').on('click', function(){
            $('.portofolio-filter ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $workGrid.isotope({
                filter: data
            });

        });
        if (document.getElementById('portofolio')) {
            var $workGrid = $('.portofolio-grid').isotope({
                itemSelector: '.all',
                percentPosition: true,
                masonry: {
                    columnWidth:'.all'
                }
            });
            console.log($workGrid);
        }

    });

    /*-------------------------------------------------------*/
    /*------------- Start Testimonial -----------------------*/
    /*-------------------------------------------------------*/
    function testimonials_slider() {
		if ($('.testi_slider').length) {
			$('.testi_slider').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: true,
				smartSpeed: 2500,
				dots: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					991: {
						items: 2
					}
				}
			});
		}
	}
	testimonials_slider();

})(jQuery);
