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

greePersonByGen("female");


// 3. Write a program that counts from 0 to 1000 and prints 

let num = 0;

for(let i = 0; i <= 1000; i++){
    num += i;
}
console.log(num);



