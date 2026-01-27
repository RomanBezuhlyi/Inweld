export function initProductAccordion() {
	const items = document.querySelectorAll('.product__list-item')

	if (!items.length) return

	items.forEach(item => {
		const top = item.querySelector('.product__list-item--top')
		if (!top) return

		top.addEventListener('click', () => {
			// закриваємо всі інші
			items.forEach(otherItem => {
				if (otherItem !== item) {
					otherItem.classList.remove('open-list')
				}
			})

			// тогл поточного
			item.classList.toggle('open-list')
		})
	})
}
