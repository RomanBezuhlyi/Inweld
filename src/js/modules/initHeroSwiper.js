export function initHeroSwiper() {
	new Swiper('.hero-wrap__swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	})
}
