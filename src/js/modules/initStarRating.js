export function initStarRating() {
	const rating = document.querySelector('.rating')
	if (!rating) return

	const input = rating
		.closest('form')
		?.querySelector('input[type="hidden"][name="rating"]')

	if (!input) return

	const MAX = 5

	const svg = `
	<svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29">
		<path
			d="M18.335 11.21L18.4473 11.5557H28.8975L20.7373 17.4844L20.4434 17.6973L20.5557 18.043L23.6719 27.6348L15.5127 21.707L15.2188 21.4932L14.9248 21.707L6.76465 27.6348L9.88184 18.043L9.99414 17.6973L9.7002 17.4844L1.54004 11.5557H11.9902L12.1025 11.21L15.2188 1.61816L18.335 11.21Z"
			stroke="#FFDC00"
		/>
	</svg>`

	const stars = []

	for (let i = 1; i <= MAX; i++) {
		const btn = document.createElement('button')
		btn.type = 'button'
		btn.dataset.value = i
		btn.innerHTML = svg

		btn.addEventListener('mouseenter', () => highlight(i))
		btn.addEventListener('mouseleave', () => highlight(input.value))
		btn.addEventListener('click', () => {
			input.value = i
			highlight(i)
		})

		stars.push(btn)
		rating.appendChild(btn)
	}

	function highlight(value) {
		const val = Number(value) || 0
		stars.forEach(star => {
			star.classList.toggle('active', Number(star.dataset.value) <= val)
		})
	}
}
