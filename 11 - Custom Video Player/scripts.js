const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

function togglePlay() {
    video.paused ? (
        video.play(),
        toggle.textContent = '►'
     ) : (
        video.pause(),
        toggle.textContent = '❚ ❚'
     )
}

function skip(e) {
    video.currentTime += Number(e.srcElement.dataset.skip)
}

function changeRange(e) {
    if (!("buttons" in e && e.buttons === 1)) { return }   //breaks if not a mouse event with buttons, or if buttons are not pressed e.g mousemove
    video[e.srcElement.name]=e.srcElement.value;
    console.log(e.srcElement.name)

}

function changeProgress() {
 
    const percent = 100 * video.currentTime / video.duration;
    progressBar.style.flexBasis = `${percent}%`;

}

function seek(e) {
    if (!("buttons" in e && e.buttons === 1)) { return } 
    const time = video.duration * e.offsetX / progress.offsetWidth
    video.currentTime = time;

}


video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change',changeRange))
ranges.forEach(range => range.addEventListener('mousemove',changeRange))
ranges.forEach(range => range.addEventListener('mousedown',changeRange))

video.addEventListener('timeupdate', changeProgress)

progress.addEventListener('mousedown',seek)
progress.addEventListener('mousemove',seek)

fullscreen.addEventListener('click', () => player.webkitRequestFullscreen() )