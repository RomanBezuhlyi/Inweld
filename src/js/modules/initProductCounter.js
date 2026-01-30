export function initProductCounter() {
	const valueEl = document.getElementById('counterValue')
	const inputEl = document.getElementById('counterValue-input')
	const buttons = document.querySelectorAll('.counter__btn')

	// якщо основного елемента або кнопок немає — виходимо
	if (!valueEl || !buttons.length) return

	const MIN = 1
	const MAX = 10
	let value = MIN

	function update() {
		valueEl.textContent = value
		if (inputEl) inputEl.value = value

		const decBtn = document.querySelector('[data-action="dec"]')
		const incBtn = document.querySelector('[data-action="inc"]')

		if (decBtn) decBtn.disabled = value === MIN
		if (incBtn) incBtn.disabled = value === MAX
	}

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			const action = btn.dataset.action
			if (action === 'inc' && value < MAX) value++
			if (action === 'dec' && value > MIN) value--

			update()
		})
	})

	update()
}
