"use strict";

//Element 를 찾고 그
// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
// const greeting = document.getElementById("greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
//Step1.
// function onLoginButtonClick() {
//   console.log("hello", loginInput.value);
// }

//Step2 : 유효성 확인
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreeting();
}

function paintGreeting() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting();
}
