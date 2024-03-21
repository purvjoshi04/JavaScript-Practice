/*
functions
*/

//1. Write a function that finds the sum of two numbers

// function sum(a, b) {
//   return a + b;
// }
// let obj = sum(10, 20);
// console.log(obj);

// callback function

function sumNum(a, b, fnToCall) {
  let result = a + b;
  fnToCall(result);
}

function displayResult(data) {
  console.log(`sum of num is : ${data}`);
}

function diplayResultPassive(data) {
  console.log(`Sum of result's is : ${data}`);
}

 sumNum(1, 2, displayResult);

