!(function () {
	'use strict'
	let e, t
	function n() {
		const n = window.innerWidth >= 1025 ? 'vertical' : 'horizontal'
		e && e.destroy(!0, !0),
			t && t.destroy(!0, !0),
			(e = new Swiper('.thumbs-swiper', {
				slidesPerView: 4,
				spaceBetween: 10,
				direction: n,
				watchSlidesProgress: !0,
			})),
			(t = new Swiper('.main-swiper', {
				spaceBetween: 10,
				thumbs: { swiper: e },
				pagination: { el: '.swiper-pagination', clickable: !0 },
			}))
	}
	document.addEventListener('DOMContentLoaded', () => {
		new Swiper('.products__swiper', {
			spaceBetween: 8,
			slidesPerView: 1.2,
			navigation: {
				prevEl: '.products__pagination-prev',
				nextEl: '.products__pagination-next',
			},
			breakpoints: {
				767: { slidesPerView: 2.5, spaceBetween: 24 },
				1024: { slidesPerView: 3.2, spaceBetween: 24 },
				1920: { slidesPerView: 3, spaceBetween: 24 },
			},
		}),
			new Swiper('.reviews__swiper', {
				spaceBetween: 24,
				slidesPerView: 1.2,
				navigation: {
					prevEl: '.reviews__pagination-prev',
					nextEl: '.reviews__pagination-next',
				},
				breakpoints: {
					767: { slidesPerView: 2.6, spaceBetween: 24 },
					1024: { slidesPerView: 4.2, spaceBetween: 24 },
					1920: { slidesPerView: 4, spaceBetween: 24 },
				},
			}),
			(function () {
				const e = document.querySelectorAll('.catalog-open'),
					t = document.querySelector('.catalog-menu-overlay'),
					n = document.querySelector('.catalog-menu-wrap'),
					o = document.querySelector('.catalog-menu-close')
				if (!e.length || !t || !n) return
				const c = 'open-catalog-menu'
				function r() {
					t.classList.remove(c), (document.body.style.overflow = '')
				}
				e.forEach(e => {
					e.addEventListener('click', e => {
						e.stopPropagation(),
							t.classList.contains(c)
								? r()
								: (t.classList.add(c),
								  (document.body.style.overflow = 'hidden'))
					})
				}),
					t.addEventListener('click', () => {
						r()
					}),
					n.addEventListener('click', e => {
						e.stopPropagation()
					}),
					o &&
						o.addEventListener('click', () => {
							r()
						}),
					document.addEventListener('click', () => {
						r()
					})
			})(),
			(function () {
				const e = document.querySelectorAll('.footer-mobile__item')
				e.length &&
					e.forEach(t => {
						const n = t.querySelector('.footer-mobile__item-top')
						n &&
							n.addEventListener('click', () => {
								e.forEach(e => {
									e !== t && e.classList.remove('open')
								}),
									t.classList.toggle('open')
							})
					})
			})(),
			(function () {
				const e = document.querySelectorAll('.header__switch-burger'),
					t = document.querySelector('.mobile-menu-overlay'),
					n = document.querySelector('.mobile-menu__close'),
					o = document.querySelector('.mobile-menu__btn-catalog')
				if (!t || !e.length) return
				const c = () => {
						t.classList.add('open-menu'),
							(document.body.style.overflow = 'hidden')
					},
					r = () => {
						t.classList.remove('open-menu'), (document.body.style.overflow = '')
					}
				e.forEach(e => {
					e.addEventListener('click', c)
				}),
					n && n.addEventListener('click', r),
					o &&
						o.addEventListener('click', () => {
							t.classList.remove('open-menu')
						}),
					t.addEventListener('click', e => {
						e.target === t && r()
					})
			})(),
			(function () {
				const e = document.querySelectorAll('.catalog-mobile__item')
				e.length &&
					e.forEach(t => {
						const n = t.querySelector('.catalog-mobile__item-top')
						n &&
							n.addEventListener('click', () => {
								const n = t.classList.contains('open-item')
								e.forEach(e => e.classList.remove('open-item')),
									n || t.classList.add('open-item')
							})
					})
			})(),
			n(),
			window.addEventListener(
				'resize',
				(function (e) {
					let t
					return () => {
						clearTimeout(t), (t = setTimeout(e, 200))
					}
				})(n)
			),
			(function () {
				const e = document.getElementById('counterValue'),
					t = document.getElementById('counterValue-input'),
					n = document.querySelectorAll('.counter__btn')
				if (!e || !n.length) return
				let o = 1
				function c() {
					;(e.textContent = o), t && (t.value = o)
					const n = document.querySelector('[data-action="dec"]'),
						c = document.querySelector('[data-action="inc"]')
					n && (n.disabled = 1 === o), c && (c.disabled = 10 === o)
				}
				n.forEach(e => {
					e.addEventListener('click', () => {
						const t = e.dataset.action
						'inc' === t && o < 10 && o++, 'dec' === t && o > 1 && o--, c()
					})
				}),
					c()
			})(),
			(function () {
				const e = document.querySelectorAll('.product__list-item')
				e.length &&
					e.forEach(t => {
						const n = t.querySelector('.product__list-item--top')
						n &&
							n.addEventListener('click', () => {
								e.forEach(e => {
									e !== t && e.classList.remove('open-list')
								}),
									t.classList.toggle('open-list')
							})
					})
			})(),
			new Swiper('.hero-wrap__swiper', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: !0,
				autoplay: { delay: 5e3, disableOnInteraction: !1 },
			}),
			(function () {
				const e = document.querySelectorAll('.filter')
				e.length &&
					e.forEach(e => {
						const t = e.querySelector('.filter__btn'),
							n = e.querySelectorAll('.checkbox input'),
							o = e.querySelector('.filter__reset')
						e.querySelectorAll('.filter__item-top').forEach(e => {
							e.addEventListener('click', () => {
								e.closest('.filter__item').classList.toggle('open-filter-item')
							})
						})
						const c = () => {
							let e = 0
							n.forEach(t => {
								if (t.checked) {
									const n = t
										.closest('.filter__item-item')
										?.querySelector('.calc')
									n && (e += Number(n.textContent) || 0)
								}
							}),
								t && (t.textContent = `Показати ${e} товарів`)
						}
						n.forEach(e => {
							e.addEventListener('change', c)
						}),
							o &&
								o.addEventListener('click', () => {
									n.forEach(e => {
										e.checked = !1
									}),
										e
											.querySelectorAll('.filter__item.open-filter-item')
											.forEach(e => {
												e.classList.remove('open-filter-item')
											}),
										c()
								}),
							c()
					})
			})(),
			(function () {
				const e = document.querySelector('.filter-mobile-open'),
					t = document.querySelector('.filter__title-close'),
					n = document.querySelector('.filter-overlay')
				if (!n || !e || !t) return
				const o = () => {
					n.classList.remove('open-mobile-filter'),
						document.body.classList.remove('lock-scroll')
				}
				e.addEventListener('click', () => {
					n.classList.add('open-mobile-filter'),
						document.body.classList.add('lock-scroll')
				}),
					t.addEventListener('click', o),
					n.addEventListener('click', e => {
						e.target === n && o()
					})
			})(),
			(function () {
				const e = document.querySelectorAll('.quantity-counter')
				e.length
					? e.forEach(e => {
							const t = e.querySelector('.decrease'),
								n = e.querySelector('.increase'),
								o = e.querySelector('.count')
							if (!t || !n || !o)
								return void console.warn('Missing elements in counter:', e)
							let c = parseInt(o.textContent, 10) || 1
							t.addEventListener('click', () => {
								c > 1 && (c--, (o.textContent = c))
							}),
								n.addEventListener('click', () => {
									c++, (o.textContent = c)
								})
					  })
					: console.warn('No quantity counters found.')
			})(),
			(function () {
				const e = document.querySelectorAll('.open-cart'),
					t = document.querySelector('.cart__top-close'),
					n = document.querySelector('.cart-overlay'),
					o = n?.querySelector('.cart')
				if (!(n && t && e.length && o)) return
				const c = () => {
					n.classList.remove('visible-cart'),
						document.body.classList.remove('lock-scroll')
				}
				e.forEach(e => {
					e.addEventListener('click', e => {
						e.stopPropagation(),
							n.classList.add('visible-cart'),
							document.body.classList.add('lock-scroll')
					})
				}),
					t.addEventListener('click', e => {
						e.stopPropagation(), c()
					}),
					n.addEventListener('click', e => {
						e.target === n && c()
					}),
					document.addEventListener('click', t => {
						!n.classList.contains('visible-cart') ||
							o.contains(t.target) ||
							[...e].some(e => e.contains(t.target)) ||
							c()
					})
			})()
	})
})()
