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
    
}());
