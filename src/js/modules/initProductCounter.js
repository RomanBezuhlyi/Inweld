export function initProductCounter() {
	const counters = document.querySelectorAll('.counter__box')
	if (!counters.length) return

	counters.forEach(counter => {
		// захист від повторної ініціалізації
		if (counter.dataset.inited === 'true') return
		counter.dataset.inited = 'true'

		const valueEl = counter.querySelector('.counter__value')
		const buttons = counter.querySelectorAll('.counter__btn')

		if (!valueEl || !buttons.length) return

		const MIN = Number(counter.dataset.min) || 1
		const MAX = Number(counter.dataset.max) || 10

		let value = Number(valueEl.textContent.trim()) || MIN

		function update() {
			value = Math.min(Math.max(value, MIN), MAX)
			valueEl.textContent = value

			const incBtn = counter.querySelector('[data-action="inc"]')
			const decBtn = counter.querySelector('[data-action="dec"]')

			if (incBtn) incBtn.disabled = value >= MAX
			if (decBtn) decBtn.disabled = value <= MIN
		}

		buttons.forEach(btn => {
			btn.addEventListener('click', () => {
				const action = btn.dataset.action
				if (action === 'inc') value++
				if (action === 'dec') value--

				update()
			})
		})

		update()
	})
}
