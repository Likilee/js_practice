"use strict";

const images = ["0.jpg", "1.jpg", "2.jpg"];

function getBgimage() {
  const todaysBgImg = images[Math.floor(Math.random() * images.length)];
  const bgImg = document.createElement("img");
  bgImg.src = `img/${todaysBgImg}`;
  document.body.appendChild(bgImg);  
}

getBgimage();
