function timer() {
	let timerItems = document.querySelectorAll(".timer__percent");
	timerItems.forEach((item) => {
		window.addEventListener("scroll", () => {
			timerCount(item);
		});
	});
}

function timerCount(timer) {
	let i = 0;
	let interval = setInterval(() => {
		timer.textContent = `${i}%`;
		i++;

		if (i > 100) {
			clearInterval(interval);
		}
	}, 20);
}
