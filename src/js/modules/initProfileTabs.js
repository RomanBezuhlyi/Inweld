export function initProfileTabs() {
	const tabs = document.querySelectorAll('.profile-switch')
	const blocks = document.querySelectorAll('.profile__block')

	if (!tabs.length || !blocks.length) return

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			const tabName = tab.dataset.tab
			if (!tabName) return

			// активна кнопка
			tabs.forEach(t => t.classList.remove('active'))
			tab.classList.add('active')

			// перемикання блоків
			blocks.forEach(block => {
				if (block.dataset.tab === tabName) {
					block.classList.remove('hidden')
				} else {
					block.classList.add('hidden')
				}
			})
		})
	})
}
