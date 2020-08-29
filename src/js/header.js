function stickyHeader() {
	window.addEventListener("scroll", () => {
		let sticky = header.offsetTop;
		window.pageYOffset > sticky
			? header.classList.add("sticky")
			: header.classList.remove("sticky");
	});
}
