var userScrollValue = 0;

$(window).scroll(function(event) {
	var scrollFromTop = $(this).scrollTop();

	console.log("scrollFromTop", scrollFromTop)

	if(scrollFromTop - userScrollValue > 58) {
		var navbarHeight = $(".navbar").css("height");

		// console.log(navbarHeight)

		$(".navbar").animate({
		 top: "-" + navbarHeight 
		}, 150);
		
		userScrollValue = scrollFromTop; 		
	} else if (userScrollValue - scrollFromTop > 58) { 
		$(".navbar").animate({
			top: "0px"
		}, 150);

		userScrollValue = scrollFromTop; 

		console.log("scrollFromTopafter", scrollFromTop)
		console.log("userScrollValue", userScrollValue)
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