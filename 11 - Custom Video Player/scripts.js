const player      = document.querySelector('.player');
const video       = player.querySelector('.viewer');
const progress    = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle      = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges      = player.querySelectorAll('.player__slider');


function togglePlay() {
  video.paused ? video.play(): video.pause();
}

function togglePlayButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.innerText = icon;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);

toggle.addEventListener('click', togglePlay);
