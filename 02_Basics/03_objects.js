// singleton 



// object literals

// Quick interview perspective investigating studies

// Define symbol and access as key value 

const mySymbol = Symbol("mySymbol1")

const JsUser = {
    name: "Purv",
    "full name": "Purv Joshi",
    [mySymbol]: "mySyb1",
    age: 19,
    location: "Gujarat",
    email: "purvjoshi.dev@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "purvadjoshi@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "21amtics429@gmail.com";
// console.log(JsUser);


JsUser.greeting = () => {
    console.log("Hello JS User");
}

JsUser.greeting2 = () => {
    console.log(`Hello JS USer, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
