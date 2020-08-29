function stickyHeader() {
	window.addEventListener("scroll", () => {
		let sticky = header.offsetTop;
		window.pageYOffset > sticky
			? header.classList.add("sticky")
			: header.classList.remove("sticky");
	});
}

function mobileMenu() {
	burger.addEventListener("click", () => {
		nav.classList.add("nav__open");
		header.style.background = "transparent";
		header.style.opacity = 1;
	});
	mobileClose.addEventListener("click", () => {
		nav.classList.remove("nav__open");
		header.style.background = "";
		header.style.opacity = 0.9;
	});
}
