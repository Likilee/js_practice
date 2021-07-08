//객체

"use strict";

// function person(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// const john = person("John", 30);

// for (let key in john) {
//   console.log(john[key]);
// }

//문제 1
// const user = {};

// user.name = "John";
// user.surname = "Smith";

// for (let key in user) {
//   console.log(user[key]);
// }

// console.log("")
// user.name = "Pete";
// for (let key in user) {
//   console.log(user[key]);
// }
// console.log("")

// delete user.name;
// for (let key in user) {
//   console.log(user[key]);
// }

//문제2
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let schedule = {
//   promise: "drink",
// };

// console.log(isEmpty(schedule));

//문제4
// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let employee in salaries) {
//     sum += salaries[employee];
//   }
//   return sum;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(sumSalaries(salaries));

//문제5

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);
