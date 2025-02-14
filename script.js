let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function updateDisplay() {
    let formattedTime = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    display.textContent = formattedTime;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
    } else {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = minutes = hours = 0;
    updateDisplay();
    startStopBtn.textContent = "Start";
    lapsList.innerHTML = "";
}

function lap() {
    const lapTime = document.createElement("li");
    lapTime.textContent = display.textContent;
    lapsList.appendChild(lapTime);
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);

updateDisplay();
