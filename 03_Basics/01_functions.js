// function addTwoNumbers(num_1, num_2){
//     console.log(num_1 + num_2); 
// }

// addTwoNumbers(23, 42)
// addTwoNumbers(23, "42")
// addTwoNumbers(23, "a")
// addTwoNumbers(23, null)

function addTwoNumbers(num_1, num_2) {
    //    let result = num_1 + num_2;
    //    return result;

    return num_1 + num_2
}

// const result = addTwoNumbers(12, 3);
// console.log("result :", result);


function loginUserMessage(username = "bot") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("Purv"))
// console.log(loginUserMessage("Purv"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 1000, 5000));

const user = {
    username: "Purv",
    prices: 10020
}

function handleObject(anyObj){
    // console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user)
handleObject({
    username: "Joshi",
    price: 399
})

const myNewArray = [200, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500]));