// for clock
let text = document.querySelector("#test");

function getTimeNow(){
let date = new Date();
let now = date.toLocaleTimeString();

text.innerText = now;}


setInterval(getTimeNow,1000);

//for StopWatch
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStopButton").innerText = "Stop";
    } else {
        isRunning = false;
        clearInterval(timer);
        document.getElementById("startStopButton").innerText = "Start";
    }
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStopButton").innerText = "Start";
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("display").innerText = formattedTime;
}

function pad(number) {
    return (number < 10 ? "0" : "") + number;
}

document.getElementById("startStopButton").addEventListener("click", startStopwatch);
document.getElementById("resetButton").addEventListener("click", resetStopwatch);





