const swiper = new Swiper('.storyline__swiper', {
	direction: 'vertical',
	mousewheel: {
		thresholdDelta: 100,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: (index, className) => {
			let label = ''
			if (index === 0) {
				label = 'Главная'
			}
			else {
				label = `Сезон ${index}`
			}
			return `<div class="swiper-pagination-bullet swiper-pagination-bullet-storyline">${label}</div>`
		},
	},
});

let slideFromUrl = getSlideIndexFromUrl('season')
if (slideFromUrl) {
	if (slideFromUrl > 4) {
		slideFromUrl = 4
	}
	swiper.slideTo(slideFromUrl)
}

function getSlideIndexFromUrl(search) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const slideIndex = Number(urlParams.get(search))
	return isNaN(slideIndex) ? null : slideIndex
}