const TICK_INTERVAL_MS = 1000;
let timerId = null;
let elapsedSeconds = 0;

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  document.getElementById("display").textContent = formatTime(elapsedSeconds);
}

function start() {
  if (!timerId) {
    timerId = setInterval(() => {
      elapsedSeconds++;
      updateDisplay();
    }, TICK_INTERVAL_MS);
  }
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}

function reset() {
  stop();
  elapsedSeconds = 0;
  updateDisplay();
}
