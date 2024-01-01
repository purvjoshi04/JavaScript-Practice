const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros[3][2]);

// let newHerosArray=marvelHeros.concat(dcHeros);
// console.log(newHerosArray);

const newHerosArray = [...marvelHeros, ...dcHeros];
// console.log(newHerosArray);

const anotherArray = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]];

const usableAnotherArray = anotherArray.flat(Infinity);
// console.log(usableAnotherArray);

console.log(Array.isArray("Purv"));
console.log(Array.from("Purv"));
console.log(Array.from({
    name: "Purv",
})); // interesting one in objects we have tell which array we want e.g. key array or value array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));