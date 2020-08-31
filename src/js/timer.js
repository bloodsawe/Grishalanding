function timer() {
	const timerItems = document.querySelectorAll(".timers__item");
	const documentHeight = document.documentElement.clientHeight;
	const timersFlags = [];
	timersFlags.length = timerItems.length;
	timersFlags.fill(true);
	window.addEventListener("scroll", (e) => {
		timerItems.forEach((item, i) => {
			let distanceScroll =
				item.offsetTop - window.pageYOffset - documentHeight;
			if (distanceScroll <= 0 && timersFlags[i]) {
				timerCount(item, i, timersFlags);
			}
		});
	});
}

// TODO: removeEventListener
function timerCount(timer, index, timersFlags) {
	let text = timer.querySelector(".timer__percent");
	let i = 0;
	let interval = setInterval(() => {
		text.textContent = `${i}%`;
		i++;

		if (i > 100) {
			clearInterval(interval);
		}
	}, 40);
	timersFlags[index] = false;
}
