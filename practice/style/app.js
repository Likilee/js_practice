"use strict";

const h1 = document.querySelector("div.header:first-child h1");

// ** Not cool
// function handleWindowClick() {
//   const clickedClass = "clicked";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// ** Little bit cool
// 위 코드를 className 대신 classList 멤버를 사용하여 버그의 여지를 없애보자!
// function handleWindowClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// ** Awesome!!
function handleWindowClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleWindowClick);
