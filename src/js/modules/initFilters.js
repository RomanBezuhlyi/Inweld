export function initFilters() {
	const filters = document.querySelectorAll('.filter')
	if (!filters.length) return

	filters.forEach(filter => {
		const button = filter.querySelector('.filter__btn')
		const checkboxes = filter.querySelectorAll('.checkbox input')
		const resetButton = filter.querySelector('.filter__reset')

		// toggle open-filter-item
		filter.querySelectorAll('.filter__item-top').forEach(top => {
			top.addEventListener('click', () => {
				const item = top.closest('.filter__item')
				item.classList.toggle('open-filter-item')
			})
		})

		// update button count
		const updateButtonCount = () => {
			let sum = 0

			checkboxes.forEach(checkbox => {
				if (checkbox.checked) {
					const calc = checkbox
						.closest('.filter__item-item')
						?.querySelector('.calc')

					if (calc) {
						sum += Number(calc.textContent) || 0
					}
				}
			})

			if (button) {
				button.textContent = `Показати ${sum} товарів`
			}
		}

		// listeners for checkboxes
		checkboxes.forEach(cb => {
			cb.addEventListener('change', updateButtonCount)
		})

		// listener for reset button
		if (resetButton) {
			resetButton.addEventListener('click', () => {
				// скидаємо всі чекбокси
				checkboxes.forEach(cb => {
					cb.checked = false
				})

				// закриваємо всі відкриті items (опціонально)
				filter
					.querySelectorAll('.filter__item.open-filter-item')
					.forEach(item => {
						item.classList.remove('open-filter-item')
					})

				// оновлюємо кнопку
				updateButtonCount()
			})
		}

		// initial update
		updateButtonCount()
	})
}
