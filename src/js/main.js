document.addEventListener("DOMContentLoaded", () => {
	main();
});

function main() {
	stickyHeader();
	mobileMenu();
	// timer();
	sliderInit();
	let slidersRules = document.querySelectorAll(".rules__block");
	let slidersOnline = document.querySelectorAll(".online__block");
	maxSliderHeight(slidersOnline);
	maxSliderHeight(slidersRules);
	questions();
	// progress();
}
