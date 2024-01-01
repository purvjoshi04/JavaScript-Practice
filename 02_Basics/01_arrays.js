const myArray = [0, 1, 2, 3, 4, 5];
const year = ["2023", "->", "2024"];

const myArr = new Array(1, 2, 3, 4, 5);
// console.log(myArray[3]);

/// Array Methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(10);
// myArray.shift();

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(1));

// const newArray = myArray.join();

// console.log(myArray);
// console.log(newArray);

// slice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1,4);
console.log("slice ->", myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1, 4);
console.log("C ", myArray);
console.log("Splice -> ", myn2);

