"use strict";

//1.form으로 todo를 받아서 local에 데이터로 저장할 수 있다.
//	form으로 입력을하면, html에 요소를 추가한다./삭제할 수 있는 버튼과 이벤트 리스터를 붙인다.
//2.local을 로딩해올 수 있다.

const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "toDos";
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleToDoForm);

function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = { text: toDoInput.value, id: Date.now() };
  paintToDo(newToDo);
  saveToDo(newToDo);
  toDoInput.value = "";
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  li.id = newToDo.id;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  console.log(toDos);
}

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   const span = li.firstChild;
//   li.remove();
//   const idx = toDos.findIndex((element) => element.id == span.id);
//   if (idx !== -1) {
//     toDos.splice(idx, 1);
//   }
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function saveToDo(newToDo) {
  toDos.push(newToDo);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
