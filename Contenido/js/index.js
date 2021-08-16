const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

$backward.addEventListener('click', handlebackward);
$forward.addEventListener('click', handleforward);

function handlebackward(){
    $video.currentTime += 10;
}

function handleforward(){
    $video.currentTime -= 10;
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded(){
    $progress.max = $video.duration;
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInputTimeProgress);

function handleInputTimeProgress() {
    $video.currentTime = $progress.value;
}