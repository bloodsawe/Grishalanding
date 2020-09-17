function questions() {
	const container = document.querySelector(".questions__container");
	console.log("fas");
	container.addEventListener("click", ({ target }) => {
		const item = target.closest(".questions__item");
		item.querySelector(".questions__text").classList.toggle("open");
		item.querySelector(".questions__plus").classList.toggle("open");
	});
}
