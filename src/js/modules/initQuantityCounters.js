export function initQuantityCounters() {
	const counters = document.querySelectorAll('.quantity-counter')

	if (!counters.length) {
		console.warn('No quantity counters found.')
		return
	}

	counters.forEach(counter => {
		const decreaseBtn = counter.querySelector('.decrease')
		const increaseBtn = counter.querySelector('.increase')
		const countDisplay = counter.querySelector('.count')

		if (!decreaseBtn || !increaseBtn || !countDisplay) {
			console.warn('Missing elements in counter:', counter)
			return
		}

		let count = parseInt(countDisplay.textContent, 10) || 1

		decreaseBtn.addEventListener('click', () => {
			if (count > 1) {
				count--
				countDisplay.textContent = count
			}
		})

		increaseBtn.addEventListener('click', () => {
			count++
			countDisplay.textContent = count
		})
	})
}
