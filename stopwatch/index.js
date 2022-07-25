const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let timer;
let paused = true;
let hours = 0;
let minutes = 0;
let seconds = 0;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  paused = true;
});
resetBtn.addEventListener("click", resetTimer);

timeDisplay.innerText = "00:00:00";

function startTimer() {
  if (paused) {
    timer = setInterval(() => {
      if (seconds == 59) {
        seconds = 0;
        if (minutes == 59) {
          minutes = 0;
          hours += 1;
        } else minutes += 1;
      } else seconds += 1;
      updateTimer();
    }, 1000);
    paused = false;
  }
}

function resetTimer() {
  paused = true;
  clearInterval(timer);
  hours = minutes = seconds = 0;
  updateTimer();
}

function updateTimer() {
  timeDisplay.innerText = `${formatTime(hours)}:${
                             formatTime(minutes)}:${
                             formatTime(seconds)}`;
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
}
