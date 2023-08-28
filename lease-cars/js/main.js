const tabsItem = document.querySelectorAll('.tabs__btn-item')
const tabsContent = document.querySelectorAll('.tabs__content-item')

tabsItem.forEach(function (element) {
	element.addEventListener('click', open)
})

function open(event) {
	const tabTarget = event.currentTarget
	const button = tabTarget.dataset.button

	tabsItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item--active')
	})

	tabTarget.classList.add('tabs__btn-item--active')

	tabsContent.forEach(function (item) {
		item.classList.remove('tabs__content-item--active')
	})

	document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu__list--active')
	menuBtn.classList.toggle('rotate')
})

const swiper = new Swiper('.swiper', {
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
})
