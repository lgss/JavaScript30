const nav = document.querySelector('#main')
const navBuffer = nav.offsetTop
const logo = document.querySelector('.logo')

function lockNav() {
    let displacement = Math.max(0,window.scrollY - navBuffer)
    nav.style.top = `${displacement}px`
    logo.style.maxWidth = displacement ? "500px" : "0px"
}

document.addEventListener('scroll',lockNav)