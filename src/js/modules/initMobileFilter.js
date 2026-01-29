export function initMobileFilter() {
	const openBtn = document.querySelector('.filter-mobile-open')
	const closeBtn = document.querySelector('.filter__title-close')
	const overlay = document.querySelector('.filter-overlay')

	if (!overlay || !openBtn || !closeBtn) return

	const openFilter = () => {
		overlay.classList.add('open-mobile-filter')
		document.body.classList.add('lock-scroll') // блокуємо скрол через клас
	}

	const closeFilter = () => {
		overlay.classList.remove('open-mobile-filter')
		document.body.classList.remove('lock-scroll') // знімаємо блокування
	}

	openBtn.addEventListener('click', openFilter)
	closeBtn.addEventListener('click', closeFilter)

	overlay.addEventListener('click', e => {
		if (e.target === overlay) {
			closeFilter()
		}
	})
}
