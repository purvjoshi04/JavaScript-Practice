/*
array 
objects
*/

// 1. Write a progeam prints all the even numbers in the an array

let numbers = [1, 243, 433, 132, 14, 346543, 123, 68, 32, 78];

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 0) {
//        console.log(`Even numbers: ${numbers[i]}`);
//     }else if(!numbers[i] % 2 == 0){
//         console.log(`Odd numbers: ${numbers[i]}`);
//     }

// }

// 2. write a program print the biggest number in the array
let biggestNumber = numbers[0];
for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] > biggestNumber) {
    biggestNumber = numbers[j];
  }
}
console.log(biggestNumber);

/*
 objects
*/
const users = [
  {
    firstName: "John",
    gender: "male",
  },
  {
    firstName: "annie",
    gender: "female",
  },
  {
    firstName: "shobith",
    gender: "male",
  },
];
for (let i = 0; i < users.length; i++) {
  if (users[i]["gender"] == "male") {
    console.log(users[i]["firstName"]);
  }
}
  let reverseObj = [];
  for (let j = users.length - 1; j >= 0; j--) {
    reverseObj.push(users[j]);
  }
  
console.log('original one: ',users);
console.log('reverse one: ',reverseObj);
