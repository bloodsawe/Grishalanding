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
			navAsThumbnails: true,
			nav: true,
		});
	}
}