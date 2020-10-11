document.addEventListener("DOMContentLoaded", () => {
	main();
});

function main() {
	stickyHeader();
	mobileMenu();
	// timer();
	sliderInit();
	closeModal();
	let slidersRules = document.querySelectorAll(".rules__block");
	let slidersOnline = document.querySelectorAll(".online__block");
	let slidersCosts = document.querySelectorAll(".costs__block");
	maxSliderHeight(slidersOnline);
	maxSliderHeight(slidersRules);
	maxSliderHeight(slidersCosts);
	questions();
	// progress();
}
