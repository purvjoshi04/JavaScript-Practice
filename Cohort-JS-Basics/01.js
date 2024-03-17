// console.log("Hello")

var first = 100;
const second = 200;
console.log(first + second)

/*
test programs
*/

// 1. Write the program to greet a person given their first name and last name

function greePerson(first, second){
    console.log("hello",first + second);
}

greePerson("Purv", "Joshi");

// 2 Write a program that greets a person based on their on their gender.

function greePersonByGen(gender){
     if(gender == "male"){
        console.log(`hello ${gender}`)
    }else {
        console.log(`hello ${gender}`)
    }
}

// greePersonByGen("female");

// 3. Write a program that counts from 0 to 1000 and prints

let num = 0;

for(let i = 0; i <= 1000; i++){
    num += i;
}
console.log(num);

/*
If-Else Statements:

Write a program that takes a number as input and prints whether it's positive, negative, or zero.
Create a program that determines whether a given year is a leap year or not.

*/

// 1.

let inputNum = parseFloat(prompt("Enter a number"))

if(inputNum == 0){
    console.log(`The Given number is zero: ${inputNum}`);
}else if(inputNum > 0){
    console.log(`The given number is positive and greater than 0: ${inputNum}`)
}else{
    console.log(`The given number is negative: ${inputNum}`)
}

//2.
let inputYear = parseInt(prompt("Enter the year: "));

if((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0){
    console.log(`The ${inputYear} is a leap year`)
}else{
    console.log(`The ${inputYear} is not a leap year`)
}

/*
Loops:

Write a program to print the multiplication table of a given number using a loop.
Create a program that calculates the factorial of a number using a loop.
Write a program to find the sum of all elements in an array.

*/
// 1.
let tableNum = parseInt(prompt("Enter a number: "))

for (let i=1; i<=10; i++) {
console.log(tableNum + "*" + i  + " =", (tableNum*i))
}

// 2.

let number = parseInt(prompt("Enter the number: "));

let fact = 1;
for(let i=1; i<=number; i++){
    fact *= i;
    console.log(fact)
}
console.log(number+" fact is "+fact)

// 3.

let numbers = [10, 23, 423, 4413, 532, 5321, 11221, 422];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

/*
Arrays:

Write a program to find the largest element in an array.
Create a program to reverse an array without using any built-in functions.


*/

// 1.

let largeNum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (largeNum < numbers[i]) {
    largeNum = numbers[i];
  }
}
console.log(largeNum);

// 2.

let reversedArray = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedArray.push(numbers[i]);
}
console.log(`original array: ${numbers}`);
console.log(`reverse array: ${reversedArray}`);


