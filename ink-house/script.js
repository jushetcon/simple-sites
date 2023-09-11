const menuBtn = document.querySelector('.header__nav-btn')
const menu = document.querySelector('.header__menu')
const burgerLinks = document.querySelectorAll('.header__link')
const body = document.body

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('header__menu--active')
	menuBtn.classList.toggle('flip')
	body.classList.toggle('no-scroll')
})

burgerLinks.forEach(function (item) {
	item.addEventListener('click', function () {
		if (menu.classList.contains('header__menu--active')) {
			menu.classList.toggle('header__menu--active')
			menuBtn.classList.toggle('flip')
			body.classList.toggle('no-scroll')
		}
	})
})
