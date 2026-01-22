export function initCatalogAccordion() {
	const items = document.querySelectorAll('.catalog-mobile__item')

	if (!items.length) return

	items.forEach(item => {
		const header = item.querySelector('.catalog-mobile__item-top')

		if (!header) return

		header.addEventListener('click', () => {
			const isOpen = item.classList.contains('open-item')

			// закриваємо всі
			items.forEach(i => i.classList.remove('open-item'))

			// якщо він раніше був закритий — відкриваємо
			if (!isOpen) {
				item.classList.add('open-item')
			}
		})
	})
}
