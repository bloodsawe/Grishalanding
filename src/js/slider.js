function sliderInit() {
	const windowWidth = document.documentElement.clientWidth;
	if (windowWidth <= 576) {
		var onlineSlider = tns({
			container: "#onlineSlider",
			items: 1.2,
			slideBy: 1,
			loop: false,
			autoplayButton: true,
			autoplayButtonOutput: false,
			startIndex: 0,
			controls: false,
			mouseDrag: true,
			swipeAngle: 0,
			navAsThumbnails: true,
			nav: true,
			navPosition: "bottom",
		});
		var rulesSlider = tns({
			container: "#rulesSlider",
			center: true,
			items: 1.2,
			slideBy: 1,
			loop: false,
			autoplayButton: true,
			autoplayButtonOutput: false,
			startIndex: 0,
			controls: false,
			mouseDrag: true,
			swipeAngle: 0,
			navAsThumbnails: true,
			nav: true,
			navPosition: "bottom",
		});
		var subjectsSlider = tns({
			container: "#subjectsSlider",
			items: 1.2,
			slideBy: 1,
			loop: false,
			autoplayButton: true,
			autoplayButtonOutput: false,
			mouseDrag: true,
			startIndex: 0,
			swipeAngle: 0,
			controls: false,
			navAsThumbnails: true,
			nav: true,
			navPosition: "bottom",
		});
		var costsSlider = tns({
			container: "#costsSlider",
			items: 1.1,
			slideBy: 1,
			loop: false,
			autoplayButton: true,
			autoplayButtonOutput: false,
			startIndex: 0,
			controls: false,
			mouseDrag: true,
			swipeAngle: 0,
			navAsThumbnails: true,
			nav: true,
			navPosition: "bottom",
		});
	}

	var reviewsSlider = tns({
		container: "#reviewsSlider",
		items: 1.2,
		slideBy: 1,
		loop: false,
		autoplayButton: true,
		autoplayButtonOutput: false,
		gutter: 0,
		startIndex: 1,
		controls: false,
		navAsThumbnails: true,
		nav: true,
		controlsContainer: ".reviews__controls",
		navPosition: "bottom",
		mouseDrag: true,
		swipeAngle: 0,
		responsive: {
			768: {
				items: 3,
				controls: true,
				nav: false,
				gutter: 70,
			},
		},
	});
}
