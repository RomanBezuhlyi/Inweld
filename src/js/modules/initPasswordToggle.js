export function initPasswordToggles({
	wrapperSelector = '.password-field',
	inputSelector = '[data-password-input]',
	toggleSelector = '[data-password-toggle]',
} = {}) {
	const wrappers = document.querySelectorAll(wrapperSelector)

	if (!wrappers.length) return

	wrappers.forEach(wrapper => {
		const input = wrapper.querySelector(inputSelector)
		const toggle = wrapper.querySelector(toggleSelector)

		if (!input || !toggle || input.tagName !== 'INPUT') return

		toggle.addEventListener('click', () => {
			const isPassword = input.type === 'password'

			input.type = isPassword ? 'text' : 'password'
			toggle.classList.toggle('is-visible', isPassword)
			toggle.setAttribute(
				'aria-label',
				isPassword ? 'Приховати пароль' : 'Показати пароль'
			)
		})
	})
}
