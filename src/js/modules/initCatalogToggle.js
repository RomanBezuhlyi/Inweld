export function initCatalogToggle() {
	const buttons = document.querySelectorAll('.catalog-open')
	const overlay = document.querySelector('.catalog-overlay')
	const catalogWrap = document.querySelector('.catalog-wrap')
	const closeButton = document.querySelector('.catalog-close') // нова кнопка

	if (!buttons.length || !overlay || !catalogWrap) return

	const openClass = 'open-catalog'

	function openCatalog() {
		overlay.classList.add(openClass)
		document.body.style.overflow = 'hidden'
	}

	function closeCatalog() {
		overlay.classList.remove(openClass)
		document.body.style.overflow = ''
	}

	// клік по кожній кнопці — відкриття
	buttons.forEach(button => {
		button.addEventListener('click', e => {
			e.stopPropagation()
			// якщо вже відкрито — закриваємо, інакше відкриваємо
			if (overlay.classList.contains(openClass)) {
				closeCatalog()
			} else {
				openCatalog()
			}
		})
	})

	// клік по оверлею — закриття
	overlay.addEventListener('click', () => {
		closeCatalog()
	})

	// забороняємо закриття при кліку всередині каталогу
	catalogWrap.addEventListener('click', e => {
		e.stopPropagation()
	})

	// клік по кнопці закриття — закриття
	if (closeButton) {
		closeButton.addEventListener('click', () => {
			closeCatalog()
		})
	}

	// клік будь-де в документі — закриття
	document.addEventListener('click', () => {
		closeCatalog()
	})
}
