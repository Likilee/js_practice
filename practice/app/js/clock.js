"use strict";
const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;
  clock.innerText = currentTime;
}

getClock();
setInterval(getClock, 1000);
// setInterval(sayHello, 1000);
