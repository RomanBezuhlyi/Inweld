let thumbsSwiper
let mainSwiper

export function initProductSwiper() {
	initSwipers()
	window.addEventListener('resize', debounce(initSwipers, 200))
}

function initSwipers() {
	const isDesktop = window.innerWidth >= 1025
	const direction = isDesktop ? 'vertical' : 'horizontal'

	// якщо слайдери вже існують — видаляємо їх
	if (thumbsSwiper) thumbsSwiper.destroy(true, true)
	if (mainSwiper) mainSwiper.destroy(true, true)

	thumbsSwiper = new Swiper('.thumbs-swiper', {
		slidesPerView: 4,
		spaceBetween: 10,
		direction: direction,
		watchSlidesProgress: true,
	})

	mainSwiper = new Swiper('.main-swiper', {
		spaceBetween: 10,
		thumbs: {
			swiper: thumbsSwiper,
		},
		pagination: { el: '.swiper-pagination', clickable: true },
	})
}

// простий debounce, щоб resize не викликав постійно реініціалізацію
function debounce(fn, delay) {
	let timer
	return () => {
		clearTimeout(timer)
		timer = setTimeout(fn, delay)
	}
}
