const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function changeSpeed(e) {
    if (e.buttons & 1) {
        const y = e.pageY - this.offsetTop;
        const scale = y / this.offsetHeight
        const bounds = { min : 0.4, max: 4 }
        const speedFactor = Number((bounds.min + scale * (bounds.max - bounds.min)).toFixed(2))
        bar.style.height = `${100 * scale }%`
        bar.textContent = speedFactor +'x'
        video.playbackRate = speedFactor
    }
}

speed.addEventListener('mousemove', changeSpeed)
speed.addEventListener('mousedown', changeSpeed)