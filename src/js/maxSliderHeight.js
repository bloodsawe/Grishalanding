function maxSliderHeight(sliders) {
	let max = 0;
	sliders.forEach(({ clientHeight }) => {
		if (clientHeight > max) {
			max = clientHeight;
		}
	});
	sliders.forEach((e) => {
		e.style.height = `${max + 15}px`;
	});
}
