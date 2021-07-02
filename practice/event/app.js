"use strict";

//
const title = document.querySelector("div.header:first-child h1");
console.dir(title);

function onMouseClickTitle() {
  title.style.color = "blue";
  title.innerHTML = "Title Click";
}

function onMouseEnterTitle() {
  title.style.color = "red";
  title.innerHTML = "Title Enter";
  console.log("mouseEnter!!");
}

function onMouseLeaveTitle() {
  title.style.color = "black";
  title.innerHTML = "Title";
  console.log("MouseLeave!!!");
}
//컴포넌트에 마우스 이벤트가 발생했을 때!
// title.onclick = onMouseClickTitle; //아래와 동일하게 동작.
title.addEventListener("click", onMouseClickTitle);
// title.mouseenter = onMouseEnterTitle;
title.addEventListener("mouseenter", onMouseEnterTitle);
title.addEventListener("mouseleave", onMouseLeaveTitle);

//window 객체 기본적으로 제공됨!
//Window 사이즈 변경 이벤트
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

//와 이런거도 되네, 온라인 오프라인 감지
function handleWindowOffline() {
  alert("No connection!");
}
function handleWindowOnline() {
  alert("All gooooood~~!!!");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

function handleWindowCopy() {
  alert("Copier~!!!!!");
}
window.addEventListener("copy", handleWindowCopy);
