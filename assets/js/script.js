var userScrollValue = 0;

$(window).scroll(function() {
	var scrollFromTop = $(this).scrollTop();

	if(scrollFromTop - userScrollValue >= 50) {
		var navbarHeight = $(".navbar").css("height");
	}
})

$(document).ready(function() {
	$(".carousel").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false
	})
})