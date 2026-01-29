export function initCart() {
	const openButtons = document.querySelectorAll('.open-cart') // всі кнопки відкриття корзини
	const closeBtn = document.querySelector('.cart__top-close')
	const overlay = document.querySelector('.cart-overlay')
	const cart = overlay?.querySelector('.cart') // сам контейнер з контентом корзини

	if (!overlay || !closeBtn || !openButtons.length || !cart) return

	const openCart = () => {
		overlay.classList.add('visible-cart')
		document.body.classList.add('lock-scroll') // блокуємо скрол
	}

	const closeCart = () => {
		overlay.classList.remove('visible-cart')
		document.body.classList.remove('lock-scroll') // відновлюємо скрол
	}

	// Всі кнопки відкриття
	openButtons.forEach(btn => {
		btn.addEventListener('click', e => {
			e.stopPropagation() // щоб клік по кнопці не спрацював на документ
			openCart()
		})
	})

	// Закриття по кнопці закриття
	closeBtn.addEventListener('click', e => {
		e.stopPropagation()
		closeCart()
	})

	// Закриття по кліку на оверлей
	overlay.addEventListener('click', e => {
		if (e.target === overlay) {
			closeCart()
		}
	})

	// Закриття по кліку поза корзиною
	document.addEventListener('click', e => {
		// якщо корзина відкрита, і клік не по самому контейнеру чи кнопках відкриття
		if (
			overlay.classList.contains('visible-cart') &&
			!cart.contains(e.target) &&
			![...openButtons].some(btn => btn.contains(e.target))
		) {
			closeCart()
		}
	})
}
