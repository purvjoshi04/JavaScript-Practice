// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023,11,31);
// let myCreatedDate = new Date(2023, 11, 31, 14, 42);
let myCreatedDate = new Date("12-31-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new  Date();
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

let one = newDate.toLocaleString('default', {
   
    dateStyle: "full"
});

console.log(one);


