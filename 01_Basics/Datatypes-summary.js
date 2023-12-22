// Primitive datatypes

// Primitive datatypes are call by value which means when we copy the value one place to another then the original data won't give us, it give us the reference of the data or we can say the copy of the data and whatever we change on the data that we are changing in the copy not on the actual data which is stored in the memory.

// 7 types : String, Number, Boolean, Null (empty), undefined, Symbol, BigInt
const score = 100
const scoreValue =100.9
let name = "User123"
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('12435');
const anotherId = Symbol('12435');
// console.log(id === anotherId);

const bigNumber = 2354678765432134567n
// console.log(typeof bigNumber);


// Reference type or non-primitive
// Array, Object, Functions

const lordVishnuAvatar = ["Lord Ram", "Lord Krishna", "Lord Narasimha"];

// lordVishnuAvatar.forEach((index) => console.log("Lord vishnu avatar:",index));

const employee = {
    name: "Employee1",
    age: 27,
    roles :[
        "Senior Developer",
        "Tech Head",
        "Project Manager"
    ]
}

// *************************************************************************************

// Stack (Primitve Datatypes in javascript), Heap (Non-primtive Datatypes in javaScript)

//already declared above ^
 userEmail = "user@123.gmail.com";

 let anotherUserEmail = userEmail;
 anotherUserEmail = "user@12345678.gmail.com"
//  console.log(userEmail); 
//  console.log(anotherUserEmail); 

 // user@123.gmail.com
// user@12345678.gmail.com

// we have learned that primtive datatypes only give copy ogf the original data notthe actual data so here obvious we are chaning the copy of the actual data in stack memory

// non primtive datatypes example

let userOne = {
 name: "User",
 email: "user123@gmail.com",
 age:30
}

let userTwo = userOne;
userTwo.email = "newEmailUser@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

// in non-primtive datatypes if we change the value of the data which is non-primtive so it will change the value of the actual data reference value which in the heap memory because the both variable referenced to the same data in heap memory not the copy of the data 
