let seconds = 0;
let minutes = 0;
let hours = 0;
function updateClock() {
  let period = hours >= 12 ? "PM" : "AM";
  let hourss = hours % 24;
  let displayHours = hours < 10 ? "0" + hourss : hourss;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${displayHours}:${displayMinutes}:${displaySeconds} ${period}`;
  document.getElementById("clock").textContent = timeString;

  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
  }
}
setInterval(updateClock, 1000);
