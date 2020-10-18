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
	const reviewsBlock = document.querySelectorAll(".reviews__block");
	maxSliderHeight(slidersOnline);
	maxSliderHeight(slidersRules);
	maxSliderHeight(slidersCosts);
	maxSliderHeight(reviewsBlock);
	questions();
}
