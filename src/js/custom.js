$(function () {
	/*phone-tabs
	===============================*/
	$("#js-top-phone .tab_item").not(":first").hide();
	$("#js-top-phone .wrapper .tab").click(function() {
		$("#js-top-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("#js-top-phone .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
	
	/*header-tabs
	===============================*/
	$("#js-header-tabs .tab_item").not(":first").hide();
	$("#js-header-tabs .wrapper .tab").click(function() {
		$("#js-header-tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("#js-header-tabs .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	/*stellar.js
	===============================*/
	$.stellar({
		responsive: true
	});

	/*slick
	===============================*/
	$('#js-slider').slick({
		dots: true,
	  speed: 800,
	  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }  
  ]
	});

	$('#js-slider').hover(function(){
		$('#js-slider .slick-prev, #js-slider .slick-next').removeClass('hover').addClass('hover');
	},
	function(){
			$('#js-slider .slick-prev, #js-slider .slick-next').removeClass('hover');
		}
	);

	/*magnific-popup
	===============================*/
	$('#js-slider').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  // other options
	  gallery: {
	    // options for gallery
	    enabled: true
  	},
	});
    
}());
