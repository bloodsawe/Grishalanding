document.addEventListener("DOMContentLoaded", () => {
	main();
});

function main() {
	stickyHeader();
	mobileMenu();
	timer();
	sliderInit();
	let slidersOnline = document.querySelectorAll(".online__block");
	let slidersRules = document.querySelectorAll(".rules__block");
	maxSliderHeight(slidersOnline);
	maxSliderHeight(slidersRules);
	questions();
	// progress();
}
