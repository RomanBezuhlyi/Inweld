export function initProductsSwiper() {
	new Swiper('.products__swiper', {
		spaceBetween: 8,
		slidesPerView: 1.2,
		navigation: {
			prevEl: '.products__pagination-prev',
			nextEl: '.products__pagination-next',
		},
		breakpoints: {
			767: {
				slidesPerView: 2.5,
				spaceBetween: 24,
			},
			1024: {
				slidesPerView: 3.2,
				spaceBetween: 24,
			},
			1920: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
	})
}
