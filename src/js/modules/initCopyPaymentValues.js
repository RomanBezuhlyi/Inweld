export function initCopyPaymentValues() {
	const buttons = document.querySelectorAll('.payment__item-copy')

	if (!buttons.length) return // Якщо кнопок немає, виходимо

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const item = button.closest('.payment__item')
			const value = item
				?.querySelector('.payment__item-value')
				?.textContent.trim()

			if (!value) return

			navigator.clipboard
				.writeText(value)
				.then(() => {
					console.log('Скопійовано:', value)
					// тут можна додати tooltip або зміну іконки
				})
				.catch(err => {
					console.error('Помилка копіювання:', err)
				})
		})
	})
}
