var backtop = function($elem, showHeight) {
	showHeight = showHeight || 200;

	$elem.on("click", function() {
		$("html,body").animate({
			scrollTop: "0px"
		}, 600);
	});

	var timer;

	$(window).on("scroll", function() {
		clearTimeout(timer);

		timer = setTimeout(function() {
			$elem.toggle($(window).scrollTop() > showHeight);
		}, 30);
	});

	$elem.hide();
};