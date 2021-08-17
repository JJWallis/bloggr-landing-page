const domSelect = el => document.querySelector(el)
const domSelectAll = el => document.querySelectorAll(el)
const header = domSelect('.header')
const nav = domSelect('#mobile-nav')
const hamburgerBtn = domSelect('#hamburger')
const arrows = domSelectAll('.arrow')
const browserWidth = () => window.innerWidth
const paths = { 
    hamburgerBtnPath: './images/icon-hamburger.svg',
    closeBtnPath: './images/icon-close.svg',
    lightArrow: './images/icon-arrow-light.svg',
    darkArrow: './images/icon-arrow-dark.svg'
 }
 
header.addEventListener('click', e => {
    const target = e.target
    const navList = target.nextElementSibling
    const arrow = target.firstElementChild

    if (browserWidth() < 1000) { 
        if (target.matches('#hamburger') || target.matches('#close-btn')) {
            const src = {
                normal() { hamburgerBtn.src = paths.hamburgerBtnPath },
                close() { hamburgerBtn.src = paths.closeBtnPath }
            }
            nav.classList.toggle('hamburger-hidden')
            let btnType = hamburgerBtn.src.includes('close') ? 'normal' : 'close'
            src[btnType]()
        }
    } 

    if (target.matches('.header-nav__btn')) {
        if (!navList.classList.contains('hamburger-hidden')) {
            navList.classList.add('hamburger-hidden')
            arrow.classList.remove('rotate')
        } else {
            const navLists = domSelectAll('.header-nav__ul')
            for (const list of navLists) list.classList.add('hamburger-hidden')
            for (const arrow of arrows) arrow.classList.remove('rotate')
            navList.classList.toggle('hamburger-hidden')
            arrow.classList.toggle('rotate')
        }
    }
})

function createWhiteArrows() {
    for (const arrow of arrows) arrow.src = browserWidth() >= 1000 ? paths.lightArrow : paths.darkArrow
}

createWhiteArrows()
window.addEventListener('resize', createWhiteArrows) 