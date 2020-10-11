document.addEventListener("DOMContentLoaded", () => {
	main();
});

function main() {
	stickyHeader();
	mobileMenu();
	closeModal();
	sliderInit();
	const slidersRules = document.querySelectorAll(".rules__block");
	const slidersOnline = document.querySelectorAll(".online__block");
	const slidersCosts = document.querySelectorAll(".costs__block");
	maxSliderHeight(slidersOnline);
	maxSliderHeight(slidersRules);
	maxSliderHeight(slidersCosts);
	questions();
}
