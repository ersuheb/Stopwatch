const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime, elapsedTime = 0, intervalId;

function start() {
  startTime = Date.now() - elapsedTime; // Subtract elapsed time from current time to resume from where you stopped
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    display.textContent = formattedTime;
  }, 10);
}

function stop() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime; // Store elapsed time when stopped
}

function reset() {
  clearInterval(intervalId);
  elapsedTime = 0; // Reset elapsed time to zero
  startTime = Date.now(); // Reset start time to current time
  display.textContent = '00:00:00';
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
