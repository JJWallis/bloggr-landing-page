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
        const ul = target.nextElementSibling
        const arrow = target.firstElementChild
        const navLists = document.querySelectorAll('.header-nav__ul')
        const arrows = document.querySelectorAll('.arrow')

        if (!ul.classList.contains('hamburger-hidden')) {
            ul.classList.add('hamburger-hidden')
            arrow.classList.remove('rotate')
        } else {
            for (let list of navLists) {
                list.classList.add('hamburger-hidden')
            }
            for (let arrow of arrows) {
                arrow.classList.remove('rotate')
            }
                ul.classList.toggle('hamburger-hidden')
                arrow.classList.toggle('rotate')
        }
    }
})

function whiteArrows() {
    const lightArrow = './images/icon-arrow-light.svg'
    const darkArrow = './images/icon-arrow-dark.svg'
    const arrows = document.querySelectorAll('.arrow')

    for (let arrow of arrows) { // could be more efficient - check before loop runs 
        if (browserWidth() >= 890) {
            arrow.src = lightArrow
        } else {
            arrow.src = darkArrow
        }
    }
}

whiteArrows()

window.addEventListener('resize', whiteArrows) 