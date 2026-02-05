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

	const closeMenu = () => {
		overlay.classList.remove('open-menu')
		document.body.style.overflow = ''
	}

	const closeMenuKeepScroll = () => {
		overlay.classList.remove('open-menu')
	}

	// відкриття меню
	openButtons.forEach(btn => {
		btn.addEventListener('click', openMenu)
	})

	// кнопка закриття
	if (closeButton) {
		closeButton.addEventListener('click', closeMenu)
	}

	// кнопка каталогу
	if (catalogButton) {
		catalogButton.addEventListener('click', closeMenuKeepScroll)
	}

	// клік по оверлею
	overlay.addEventListener('click', e => {
		if (e.target === overlay) {
			closeMenu()
		}
	})

	// 🔥 ЗАКРИТТЯ ПО КЛІКУ НА ПОСИЛАННЯ / КНОПКИ В МЕНЮ
	overlay.addEventListener('click', e => {
		const target = e.target.closest('a, button')
		if (!target) return

		// винятки (не закривати)
		if (
			target.closest('.header__switch-burger') ||
			target.closest('.mobile-menu__btn-catalog') ||
			target.closest('.mobile-menu__close')
		) {
			return
		}

		closeMenu()
	})
}
