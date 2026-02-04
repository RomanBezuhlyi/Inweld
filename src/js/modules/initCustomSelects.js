export function initCustomSelects() {
	const fields = document.querySelectorAll('[data-select]')
	if (!fields.length) return

	fields.forEach(field => {
		// захист від повторної ініціалізації
		if (field.dataset.inited === 'true') return
		field.dataset.inited = 'true'

		const trigger = field.querySelector('.select-trigger')
		const options = field.querySelectorAll('.custom-option')
		const hiddenSelect = field.querySelector('select')

		// перевірки на наявність елементів
		if (!trigger || !hiddenSelect || !options.length) return

		// клік по тригеру
		trigger.addEventListener('click', () => {
			// закриваємо інші селекти
			document.querySelectorAll('[data-select].open').forEach(openField => {
				if (openField !== field) openField.classList.remove('open')
			})
			field.classList.toggle('open')
		})

		// вибір опції
		options.forEach(option => {
			option.addEventListener('click', () => {
				const value = option.dataset.value
				const text = option.textContent.trim()

				// перевірка на валідність
				if (!value || !text) return

				trigger.textContent = text
				hiddenSelect.value = value
				field.classList.remove('open')
			})
		})

		// клік поза селектом
		document.addEventListener('click', e => {
			if (!field.contains(e.target)) {
				field.classList.remove('open')
			}
		})

		// закриття по Escape
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				field.classList.remove('open')
			}
		})
	})
}
