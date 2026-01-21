export function initReviewsSwiper() {
	new Swiper('.reviews__swiper', {
		spaceBetween: 24,
		slidesPerView: 4.2,
		navigation: {
			prevEl: '.reviews__pagination-prev',
			nextEl: '.reviews__pagination-next',
		},
		breakpoints: {
			1920: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
	})
}
