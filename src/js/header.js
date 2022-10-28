const burgerMenuButton = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.menu-mobile')
burgerMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})

window.addEventListener('resize', (e) => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000) {
        mobileMenu.classList.remove('active')
    }
})