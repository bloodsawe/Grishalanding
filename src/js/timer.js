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
				progress(item);
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

function progress(item) {
	var bar = new ProgressBar.Circle(item, {
		strokeWidth: 3,
		easing: "linear",
		duration: 4000,
		color: "#6832ac",
		trailWidth: 0.1,
		svgStyle: null,
	});

	bar.animate(1.0);
}
