let timeElement = document.getElementById("time");

function updateTime() {
  if (!timeElement) return;
  let now = new Date();
  let timeNow = now.toLocaleTimeString();
  timeElement.textContent = timeNow;
}
updateTime();
setInterval(updateTime, 1000);
