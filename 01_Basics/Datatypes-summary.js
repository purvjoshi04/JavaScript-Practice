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

lordVishnuAvatar.forEach((index) => console.log("Lord vishnu avatar:",index));

const employee = {
    name: "Employee1",
    age: 27,
    roles :[
        "Senior Developer",
        "Tech Head",
        "Project Manager"
    ]
}

