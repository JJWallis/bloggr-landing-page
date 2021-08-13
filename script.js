const header = document.querySelector('.header')
const nav = document.querySelector('#mobile-nav')
const hamburgerBtn = document.querySelector('#hamburger')
const closeBtn = document.querySelector('#close-btn')
const browserWidth = () => window.innerWidth
 
header.addEventListener('click', e => {
    if (browserWidth() < 890) { 
        const target = e.target
        if (target.matches('#hamburger') || target.matches('#close-btn') ) {
            nav.classList.toggle('hidden')
            // hamburgerBtn.classList.toggle('hidden')
            // closeBtn.classList.toggle('hidden')
        }
    }
})

window.addEventListener('resize', () =>{
    if (browserWidth() === 889) nav.classList.add('hidden')
})
