function timer() {
	const timerItems = document.querySelectorAll(".timers__item");
	const documentHeight = document.documentElement.clientHeight;
	const timerContainer = document.querySelector(".timers__container")
		.offsetTop;
	let flag = true;
	window.addEventListener("scroll", (e) => {
		let distanceScroll =
			timerContainer - window.pageYOffset - documentHeight;
		if (distanceScroll <= 0 && flag) {
			timerItems.forEach((item, i) => {
				timerCount(item, i);
				progress(item);
			});
			flag = false;
		}
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
	}, 20);
}

function progress(item) {
	var bar = new ProgressBar.Circle(item, {
		strokeWidth: 3,
		easing: "linear",
		duration: 2000,
		color: "#6832ac",
		trailWidth: 0.1,
		svgStyle: null,
	});

	bar.animate(1.0);
}
