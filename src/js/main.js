document.addEventListener("DOMContentLoaded", () => {
	main();
});

function main() {
	stickyHeader();
	mobileMenu();
	timer();
	sliderInit();
	let sliders = document.querySelectorAll(".online__block");
	maxSliderHeight(sliders);
	questions();
	// progress();
}
