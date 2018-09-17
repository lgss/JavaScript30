const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('#fullscreenButton');
 
function togglePlay() {
    if(video.paused){
        video.play();

    } else {
        video.pause();
    }
}
function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip() {
    const toSkip = parseInt(this.dataset.skip);
    video.currentTime += toSkip;
}
function handleRangeUpdate()
{
    if(mouseClicked)
        video[this.name] = this.value;
}

function handleProgressBar()
{
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
}

function scrub(e)
{
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function openFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
  }
  

video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
video.addEventListener('play', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
var mouseClicked = false;
document.addEventListener('mousedown', () => mouseClicked = true)
document.addEventListener('mouseup', () => mouseClicked = false)
document.addEventListener('mouseout', () => mouseClicked = false)
video.addEventListener('timeupdate', handleProgressBar);
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => mouseClicked && scrub(e));
fullscreenButton.addEventListener('click', openFullscreen);