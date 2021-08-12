const header = document.querySelector('.header')
const nav = document.querySelector('#mobile-nav')
const hamburgerBtn = document.querySelector('#hamburger')
const closeBtn = document.querySelector('#close-btn')
const browserWidth = () => window.innerWidth
 
header.addEventListener('click', e => {
    if (browserWidth() < 1000) { // update later!
        const target = e.target
        if (target.matches('#hamburger') || target.matches('#close-btn') ) {
            nav.classList.toggle('hidden')
            // hamburgerBtn.classList.toggle('hidden')
            // closeBtn.classList.toggle('hidden')
        }
    }
})