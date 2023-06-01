let timeElement = document.getElementById("time");

function time() {
  let now = new Date();
  let timeNow = now.toLocaleTimeString();
  timeElement.textContent = timeNow;
}
setInterval(time, 1000);
