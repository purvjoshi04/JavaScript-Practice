// Singleton

const twitterUser = new Object();

twitterUser.id = "123"
twitterUser.name = "John"
twitterUser.isLoggedIn = false


// console.log(twitterUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName : {
            firstName : "Purv",
            lastName: "Joshi"
        }
    }
}

// console.log(regularUser.fullname?.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "purv@gmail.com"
    }
]

console.log(Object.keys(twitterUser));
console.log(Object.values(twitterUser));
console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty('isLoggedIn'));