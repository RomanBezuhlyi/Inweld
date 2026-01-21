export function initNewsSwiper() {
	new Swiper('.news__swiper', {
		spaceBetween: 24,
		slidesPerView: 3.2,
		navigation: {
			prevEl: '.news__pagination-prev',
			nextEl: '.news__pagination-next',
		},
		breakpoints: {
			1920: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
	})
}
