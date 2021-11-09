const domSelect = (el) => document.querySelector(el)
const domSelectAll = (el) => document.querySelectorAll(el)
const [header, hamburgerBtn, arrows] = [
   domSelect('.header'),
   domSelect('#hamburger'),
   domSelectAll('.arrow'),
]
const browserWidth = () => window.innerWidth
const paths = {
   hamburgerBtnPath: './images/icon-hamburger.svg',
   closeBtnPath: './images/icon-close.svg',
   lightArrow: './images/icon-arrow-light.svg',
   darkArrow: './images/icon-arrow-dark.svg',
}

header.addEventListener('click', (e) => {
   const target = e.target
   const [navList, arrow, nav] = [
      target.nextElementSibling,
      target.firstElementChild,
      domSelect('#mobile-nav'),
   ]
   browserWidth() < 1000 && mobileBtn(target, nav)
   navShowHide(target, navList, arrow)
})

function mobileBtn(target, nav) {
   if (target.matches('#hamburger') || target.matches('#close-btn')) {
      const src = {
         normal() {
            hamburgerBtn.src = paths.hamburgerBtnPath
         },
         close() {
            hamburgerBtn.src = paths.closeBtnPath
         },
      }
      src[hamburgerBtn.src.includes('close') ? 'normal' : 'close']()
      nav.classList.toggle('hamburger-hidden')
   }
}

function navShowHide(target, navList, arrow) {
   if (target.matches('.header-nav__btn')) {
      if (!navList.classList.contains('hamburger-hidden')) {
         navList.classList.add('hamburger-hidden')
         arrow.classList.remove('rotate')
      } else {
         reset()
         navList.classList.toggle('hamburger-hidden')
         arrow.classList.toggle('rotate')
      }
   }
}

function reset() {
   const navLists = domSelectAll('.header-nav__ul')
   for (const list of navLists) list.classList.add('hamburger-hidden')
   for (const arrow of arrows) arrow.classList.remove('rotate')
}

function createWhiteArrows() {
   for (const arrow of arrows)
      arrow.src = browserWidth() >= 1000 ? paths.lightArrow : paths.darkArrow
}

createWhiteArrows()
window.addEventListener('resize', createWhiteArrows)
