const navItems   = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav        = document.querySelector('.top')

function hoverNavItem(e){

    this.classList.add('trigger-enter')
    setTimeout(()=> this.classList.contains('trigger-enter') ? this.classList.add('trigger-enter-active') : null , 150)
    background.classList.add('open')
    
    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect();

    background.style.width=`${dropdownCoords.width}px`;
    background.style.height=`${dropdownCoords.height}px`;
    background.style.transform= `translate(${dropdownCoords.x - navCoords.x}px,${dropdownCoords.y - navCoords.y}px)`
    // console.log(dropdownCoords)
}

function leaveNavItem(e){
    // console.log("Leave")
    this.classList.remove('trigger-enter')
    setTimeout(()=> this.classList.remove('trigger-enter-active'),150)
    background.classList.remove('open')
}

navItems.forEach(navItem => navItem.addEventListener('mouseover',hoverNavItem ))
navItems.forEach(navItem => navItem.addEventListener('mouseleave',leaveNavItem))