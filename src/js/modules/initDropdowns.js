export function initDropdowns() {
	const dropdowns = document.querySelectorAll('.dropdown')
	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => {
		// Захист від повторної ініціалізації
		if (dropdown.dataset.inited === 'true') return
		dropdown.dataset.inited = 'true'

		const trigger = dropdown.querySelector('.dropdown__trigger')
		if (!trigger) return

		const label = trigger.querySelector('span')
		const items = dropdown.querySelectorAll('li')

		if (!label || !items.length) return

		trigger.addEventListener('click', e => {
			e.stopPropagation()

			// Закриваємо всі інші dropdown
			dropdowns.forEach(dd => {
				if (dd !== dropdown) dd.classList.remove('open')
			})

			dropdown.classList.toggle('open')
		})

		items.forEach(item => {
			item.addEventListener('click', e => {
				e.stopPropagation()

				const value = item.dataset.value
				if (!value) return

				label.textContent = item.textContent.trim()
				dropdown.dataset.value = value
				dropdown.classList.remove('open')
			})
		})
	})

	// Глобальне закриття при кліку поза dropdown
	if (!document.__dropdownOutsideListenerAdded) {
		document.__dropdownOutsideListenerAdded = true

		document.addEventListener('click', e => {
			document.querySelectorAll('.dropdown.open').forEach(dd => {
				if (!dd.contains(e.target)) {
					dd.classList.remove('open')
				}
			})
		})
	}
}
