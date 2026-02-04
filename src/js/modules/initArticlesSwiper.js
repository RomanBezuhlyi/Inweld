export function initArticlesSwiper() {
	new Swiper('.articles__swiper', {
		spaceBetween: 24,
		slidesPerView: 1.2,
		navigation: {
			prevEl: '.articles__pagination-prev',
			nextEl: '.articles__pagination-next',
		},
		breakpoints: {
			1025: {
				slidesPerView: 2.2,
				spaceBetween: 24,
			},
			1920: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
		},
	})
}
