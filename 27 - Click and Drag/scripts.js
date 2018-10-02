const itemFrame = document.querySelector('.items')

function mousemoveHandler(e) {
    itemFrame.scrollLeft -= e.movementX // could have used this in If (e.buttons & 1) {//do stuff} if not dynamically managing event listeners
}

itemFrame.addEventListener('mousedown', function() { this.classList.add('active');    this.addEventListener('mousemove',mousemoveHandler)})     
itemFrame.addEventListener('mouseup',   function() { this.classList.remove('active'); this.removeEventListener('mousemove',mousemoveHandler)})
itemFrame.addEventListener('mouseleave',function() { this.classList.remove('active'); this.removeEventListener('mousemove',mousemoveHandler)})