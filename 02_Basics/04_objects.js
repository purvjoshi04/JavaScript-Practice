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

// console.log(Object.keys(twitterUser));
// console.log(Object.values(twitterUser));
// console.log(Object.entries(twitterUser));

// console.log(twitterUser.hasOwnProperty('isLoggedIn'));


// object destructuring
const CSE = {
    year: "3rd Year",
    subject: [
        "IOT",
        "AI",
        "MLCC",
        "CD",
        
    ],
    institute: "AMTICS",
    university: "UTU"
}
const {subject: subjects} = CSE;

console.log(subjects);

// JSON Data 

[
	{
		"name": "Carolyn Velez",
		"phone": "1-727-564-6547",
		"email": "nunc.quisque@outlook.com",
		"address": "389-6030 Quisque Av.",
		"region": "FATA",
		"country": "Poland",
		"list": 1,
		"currency": "$83.65",
		"numberrange": 7,
		"text": "vel arcu eu odio tristique pharetra. Quisque ac libero nec",
		"postalZip": "36522",
		"alphanumeric": "GMM82JDH6JM"
	},
	{
		"name": "Brent Taylor",
		"phone": "1-601-403-1662",
		"email": "cras.pellentesque@icloud.edu",
		"address": "Ap #671-5489 Ac, Av.",
		"region": "Mpumalanga",
		"country": "Peru",
		"list": 11,
		"currency": "$89.53",
		"numberrange": 7,
		"text": "mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus",
		"postalZip": "H1R 1W0",
		"alphanumeric": "YWR04PBP5QS"
	},
	{
		"name": "Kellie Price",
		"phone": "(853) 358-2419",
		"email": "cubilia@outlook.org",
		"address": "559-9961 Ligula. Rd.",
		"region": "Saarland",
		"country": "Austria",
		"list": 3,
		"currency": "$44.69",
		"numberrange": 7,
		"text": "nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut",
		"postalZip": "242763",
		"alphanumeric": "ULK95ZYC6GQ"
	},
	{
		"name": "Theodore Meyer",
		"phone": "(829) 887-3152",
		"email": "non@icloud.com",
		"address": "906-9788 Vulputate Rd.",
		"region": "South Island",
		"country": "China",
		"list": 17,
		"currency": "$48.49",
		"numberrange": 8,
		"text": "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In",
		"postalZip": "5168",
		"alphanumeric": "UPP79IOG0KG"
	},
	{
		"name": "Austin Knapp",
		"phone": "(413) 362-8662",
		"email": "integer@hotmail.com",
		"address": "884-4072 Senectus Avenue",
		"region": "Languedoc-Roussillon",
		"country": "Italy",
		"list": 3,
		"currency": "$75.37",
		"numberrange": 5,
		"text": "quis diam. Pellentesque habitant morbi tristique senectus et netus et",
		"postalZip": "141452",
		"alphanumeric": "KPF31UHN3YL"
	}
]

