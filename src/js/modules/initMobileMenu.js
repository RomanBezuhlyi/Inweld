export function initMobileMenu() {
	const openButtons = document.querySelectorAll('.header__switch-burger')
	const overlay = document.querySelector('.mobile-menu-overlay')
	const closeButton = document.querySelector('.mobile-menu__close')
	const catalogButton = document.querySelector('.mobile-menu__btn-catalog')

	if (!overlay || !openButtons.length) return

	const openMenu = () => {
		overlay.classList.add('open-menu')
		document.body.style.overflow = 'hidden'
	}

	// Звичайне закриття (скрол відновлюється)
	const closeMenu = () => {
		overlay.classList.remove('open-menu')
		document.body.style.overflow = ''
	}

	// Закриття через кнопку каталога (скрол заборонений)
	const closeMenuKeepScroll = () => {
		overlay.classList.remove('open-menu')
		// document.body.style.overflow лишається 'hidden'
	}

	// відкриття меню
	openButtons.forEach(btn => {
		btn.addEventListener('click', openMenu)
	})

	// закриття по кнопці
	if (closeButton) {
		closeButton.addEventListener('click', closeMenu)
	}

	// закриття по кнопці "каталог"
	if (catalogButton) {
		catalogButton.addEventListener('click', closeMenuKeepScroll)
	}

	// закриття по кліку на оверлей
	overlay.addEventListener('click', e => {
		if (e.target === overlay) {
			closeMenu()
		}
	})
}
