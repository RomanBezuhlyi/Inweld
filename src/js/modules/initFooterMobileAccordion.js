export function initFooterMobileAccordion() {
	const items = document.querySelectorAll('.footer-mobile__item')

	if (!items.length) return

	items.forEach(item => {
		const trigger = item.querySelector('.footer-mobile__item-top')
		if (!trigger) return

		trigger.addEventListener('click', () => {
			items.forEach(i => {
				if (i !== item) i.classList.remove('open')
			})

			item.classList.toggle('open')
		})
	})
}
