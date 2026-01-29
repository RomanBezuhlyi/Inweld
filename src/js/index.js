import { initCart } from './modules/initCart'
import { initCatalogAccordion } from './modules/initCatalogAccordion'
import { initCatalogToggle } from './modules/initCatalogToggle'
import { initFilters } from './modules/initFilters'
import { initFooterMobileAccordion } from './modules/initFooterMobileAccordion'
import { initHeroSwiper } from './modules/initHeroSwiper'
import { initMobileFilter } from './modules/initMobileFilter'
import { initMobileMenu } from './modules/initMobileMenu'
import { initProductAccordion } from './modules/initProductAccordion'
import { initProductCounter } from './modules/initProductCounter'
import { initProductSwiper } from './modules/initProductSwiper'
import { initProductsSwiper } from './modules/initProductsSwiper'
import { initQuantityCounters } from './modules/initQuantityCounters'
import { initReviewsSwiper } from './modules/initReviewsSwiper'

document.addEventListener('DOMContentLoaded', () => {
	initProductsSwiper()
	initReviewsSwiper()
	initCatalogToggle()
	initFooterMobileAccordion()
	initMobileMenu()
	initCatalogAccordion()
	initProductSwiper()
	initProductCounter()
	initProductAccordion()
	initHeroSwiper()
	initFilters()
	initMobileFilter()
	initQuantityCounters()
	initCart()
})
