const heroesSwiper = new Swiper(".heroes__swiper-descr", {
	// If we need pagination
	pagination: {
		el: '.heroes-swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		renderBullet: (index, className) => `<span class="swiper-pagination-bullet ${className}-descr"><img src="src/assets/images/Thomas-Shelby-Peaky-Blinders.jpg" /></span>`,
	},
	spaceBetween: 10,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const imageSwiper = new Swiper(".hero__swiper", {
	allowTouchMove: false,
	spaceBetween: 1,
	parallax: true,
});

heroesSwiper.controller.control = imageSwiper;

const slideFromUrl = getSlideIndexFromUrl()
if (slideFromUrl) {
	heroesSwiper.slideTo(slideFromUrl)
}

function getSlideIndexFromUrl() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const slideIndex = Number(urlParams.get('s'))
	return isNaN(slideIndex) ? null : slideIndex
}