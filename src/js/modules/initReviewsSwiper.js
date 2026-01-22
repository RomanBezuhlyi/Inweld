export function initReviewsSwiper() {
	new Swiper('.reviews__swiper', {
		spaceBetween: 24,
		slidesPerView: 1.2,
		navigation: {
			prevEl: '.reviews__pagination-prev',
			nextEl: '.reviews__pagination-next',
		},
		breakpoints: {
			767: {
				slidesPerView: 2.6,
				spaceBetween: 24,
			},
			1024: {
				slidesPerView: 4.2,
				spaceBetween: 24,
			},
			1920: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
	})
}
