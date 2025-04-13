const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const rwd = document.querySelector(".rwd");
const fwd = document.querySelector(".fwd");

const timerWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");

media.removeAttribute("controls");
controls.computedStyleMap.visibility = "visible";

play.addEventListener("click", playPauseMedia);

function playPauseMedia() {
    if (media.paused) {
        play.setAttribute("data-icon", "u");
        media.play();
    } else {
        play.setAttribute("data-icon", "p");
        media.pause();
    }
}

stop.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);

function stopMedia() {
    media.pause();
    media.currentTime = 0;
    play.setAttribute("data-icon", "p");
}

rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);

let intervalFwd;
let intervalRwd;

function mediaBackward() {
    clearInterval(intervalFwd);
    fwd.classList.remove("active");

    if (rwd.classList.contains("active")) {
        rwd.classList.remove("active");
        clearInterval(intervalRwd);
        media.play();
    } else {
        rwd.classList.add("active");
        media.pause();
        intervalRwd = setInterval(windBackward, 200);
    }
}

function mediaForward() {
    clearInterval(intervalRwd);
    rwd.classList.remove("active");

    if (fwd.classList.contains("active")) {
        fwd.classList.remove("active");
        clearInterval(intervalFwd);
        media.play();
    } else {
        fwd.classList.add("active");
        media.pause();
        intervalFwd = setInterval(windForward, 200);
    }
}