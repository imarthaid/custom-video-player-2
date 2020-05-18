// Get Element
let player = document.querySelector('.player');
let video = player.querySelector('.view');
let boxBar = player.querySelector('.box-bar');
let playbar = player.querySelector('.play-bar');
let toogle = player.querySelector('.toogle');
let skipButton = player.querySelectorAll('[data-skip]');
let range = player.querySelectorAll('.slider');


// Build Function
function tooglePlayPause() {
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }

    let method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    let icon = this.paused ? '▶' : '❚❚';
    toogle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.name)
    console.log(this.value)
}

function handleProgess() {
    let percent = (video.currentTime / video.duration) * 100;
    playbar.style.width = percent + '%';
}

function scrub(e) {
    console.log(e);
}

// Hook up the event listener
video.addEventListener('click', tooglePlayPause);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgess);
toogle.addEventListener('click', tooglePlayPause);
skipButton.forEach(button => button.addEventListener('click', skip));
range.forEach(range => range.addEventListener('change', handleRangeUpdate));
boxBar.addEventListener('click', scrub);
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        video.paused ? video.play() : video.pause();
    }
}