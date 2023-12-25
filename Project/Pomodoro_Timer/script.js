document.addEventListener("DOMContentLoaded", () => {
  let isBreak = false;
  let isRunning = false;
  let time = 25 * 60;
  let interval;
  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("startBtn");
  const resetBtn = document.getElementById("resetBtn");
  const breakCheckbox = document.getElementById("breakCheckbox");
  const alarmSound = document.getElementById("alarm");

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function startTimer() {
    interval = setInterval(() => {
      if (time > 0) {
        time--;
        timerDisplay.textContent = formatTime(time);
      } else {
        clearInterval(interval);
        alarmSound.play();
        if (isBreak) {
          alert("Break session finished!");
          isBreak = false;
          time = 25 * 60;
        } else {
          alert("Pomodoro session finished!");
          isBreak = true;
          time = 5 * 60;
        }
        timerDisplay.textContent = formatTime(time);
        startBtn.textContent = "Start";
        isRunning = false;
      }
    }, 1000);
  }

  startBtn.addEventListener("click", () => {
    if (!isRunning) {
      isRunning = true;
      startTimer();
      startBtn.textContent = "Pause";
    } else {
      clearInterval(interval);
      interval = null;
      isRunning = false;
      startBtn.textContent = "Start";
    }
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    isRunning = false;
    isBreak = false;
    time = 25 * 60;
    timerDisplay.textContent = formatTime(time);
    startBtn.textContent = "Start";
  });

  breakCheckbox.addEventListener("change", () => {
    if (breakCheckbox.checked) {
      isBreak = true;
      time = 5 * 60;
      timerDisplay.textContent = formatTime(time);
    } else {
      isBreak = false;
      time = 25 * 60;
      timerDisplay.textContent = formatTime(time);
    }
  });
});
