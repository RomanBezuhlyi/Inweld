import { initCatalogAccordion } from './modules/initCatalogAccordion'
import { initCatalogToggle } from './modules/initCatalogToggle'
import { initFooterMobileAccordion } from './modules/initFooterMobileAccordion'
import { initMobileMenu } from './modules/initMobileMenu'
import { initNewsSwiper } from './modules/initNewsSwiper'
import { initReviewsSwiper } from './modules/initReviewsSwiper'

document.addEventListener('DOMContentLoaded', () => {
	initNewsSwiper()
	initReviewsSwiper()
	initCatalogToggle()
	initFooterMobileAccordion()
	initMobileMenu()
	initCatalogAccordion()
})
