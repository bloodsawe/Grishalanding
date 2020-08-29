function timer() {
	let timerItems = document.querySelectorAll(".timer__percent");
	timerItems.forEach((item) => {
		let i = 0;

		let interval = setInterval(() => {
			item.textContent = `${i}%`;
			i++;

			if (i > 100) {
				clearInterval(interval);
			}
		}, 20);
	});
}
