const header = document.querySelector('.header')
const nav = document.querySelector('#mobile-nav')
const hamburgerBtn = document.querySelector('#hamburger')
const closeBtn = document.querySelector('#close-btn')
const browserWidth = () => window.innerWidth
 
header.addEventListener('click', e => {
    const target = e.target
    if (browserWidth() < 890) { 
        if (target.matches('#hamburger') || target.matches('#close-btn') ) {
            nav.classList.toggle('hamburger-hidden')
            // hamburgerBtn.classList.toggle('hidden')
            // closeBtn.classList.toggle('hidden')
        }
    } 

    if (target.matches('.header-nav__btn')) {
        const nextSibling = target.nextElementSibling
        const arrow = target.firstElementChild
        nextSibling.classList.toggle('hamburger-hidden')
        arrow.classList.toggle('rotate')
    }
})