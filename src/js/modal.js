function closeModal(params) {
	const modal = document.querySelector(".modal");

	modal.addEventListener("click", ({ target }) => {
		if (
			target.classList.contains("modal") ||
			target.closest(".modal__close") ||
			target.closest(".modal__button")
		) {
			modal.style.display = "none";
			document.body.style.overflow = "auto";
		}
	});
}
