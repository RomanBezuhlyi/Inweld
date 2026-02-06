import { initArticlesSwiper } from './modules/initArticlesSwiper'
import { initCart } from './modules/initCart'
import { initCatalogAccordion } from './modules/initCatalogAccordion'
import { initCatalogToggle } from './modules/initCatalogToggle'
import { initContactsMapSwitcher } from './modules/initContactsMapSwitcher.js'
import { initCopyPaymentValues } from './modules/initCopyPaymentValues.js'
import { initCustomSelects } from './modules/initCustomSelects'
import { initFilters } from './modules/initFilters'
import { initFooterMobileAccordion } from './modules/initFooterMobileAccordion'
import { initHeroSwiper } from './modules/initHeroSwiper'
import { initMobileFilter } from './modules/initMobileFilter'
import { initMobileMenu } from './modules/initMobileMenu'
import { initPasswordToggles } from './modules/initPasswordToggle.js'
import { initPhoneMask } from './modules/initPhoneMask.js'
import { initPopups } from './modules/initPopups.js'
import { initProductAccordion } from './modules/initProductAccordion'
import { initProductCounter } from './modules/initProductCounter'
import { initProductSwiper } from './modules/initProductSwiper'
import { initProductsSwiper } from './modules/initProductsSwiper'
import { initProfileTabs } from './modules/initProfileTabs.js'
import { initQuantityCounters } from './modules/initQuantityCounters'
import { initReviewsSwiper } from './modules/initReviewsSwiper'
import { initStarRating } from './modules/initStarRating.js'

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
	initPhoneMask()
	initCopyPaymentValues()
	initPopups()
	initArticlesSwiper()
	initCustomSelects()
	initProfileTabs()
	initContactsMapSwitcher()
	initStarRating()
	initPasswordToggles()
})
