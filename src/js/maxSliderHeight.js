function maxSliderHeight(sliders) {
	let max = 0;
	sliders.forEach((e) => {
		if (e.clientHeight > max) {
			max = e.clientHeight;
		}
	});
	console.log(max);
	sliders.forEach((e) => {
		e.style.height = `${max + 15}px`;
	});
}
