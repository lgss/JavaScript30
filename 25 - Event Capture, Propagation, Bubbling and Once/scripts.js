const divs = document.querySelectorAll('div,body')

function logText(e){
    console.log(this.classList.value)
    e.stopPropagation()
}

divs.forEach(div => div.addEventListener('click',logText, {capture: false, once:true}))