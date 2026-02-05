export function initContactsMapSwitcher() {
	const buttons = document.querySelectorAll('.contacts__right-route--city')
	const maps = document.querySelectorAll('.contacts__right iframe')

	if (!buttons.length || !maps.length) return

	buttons.forEach(button => {
		button.addEventListener('click', e => {
			e.preventDefault()

			const city = button.dataset.city
			if (!city) return

			// active на кнопках
			buttons.forEach(btn => btn.classList.remove('active'))
			button.classList.add('active')

			// active на iframe
			maps.forEach(map => {
				if (map.dataset.city === city) {
					map.classList.add('active')
				} else {
					map.classList.remove('active')
				}
			})
		})
	})
}
