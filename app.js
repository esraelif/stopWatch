let minutes =00;
let seconds =00;
const Minutes = document.getElementById("minutes")
const Seconds = document.getElementById("seconds")
const ButtonStart = document.getElementById("button-start")
const ButtonStop = document.getElementById("button-stop")
const ButtonReset = document.getElementById("button-reset")
let interval;
ButtonStart.onclick = function () {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
}
ButtonStop.onclick = function () {
    clearInterval(interval)
}
ButtonReset.onclick = function () {
    clearInterval(interval)
    minutes = "00"
    seconds = "00"
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

function startTimer() {
    seconds++
    if (seconds <= 9) {
        Seconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
        Seconds.innerHTML = seconds;
    }
    if (seconds > 99) {
        console.log("minutes")
        minutes++
        Minutes.innerHTML = "0" + minutes
        seconds = 0
        Seconds.innerHTML = "0" + 0
    }
    if (minutes > 9) {
        Minutes.innerHTML = minutes;
    }
}
