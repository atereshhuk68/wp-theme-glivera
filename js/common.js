document.addEventListener("DOMContentLoaded", () => {
	// Close top banner
	const closeBtn = document.querySelector(".top-banner__close");
	const topBanner = document.querySelector(".top-banner");

	closeBtn.addEventListener("click", () => {
		topBanner.classList.add("top-banner--hidden");
	})
})
