// There are 2 ways of creating JavaScript Objects: 

// 1. Object literal: 

let obj = {
    firstName: "Razvan",
    lastName: "Bugoi",
    age: 26,
    businessOwner: false
};

// these (firstName, lastName, etc) are called properties, written as key - value pairs, but we can also have methods inside an object,
// which are functions. Let's see an example below: 

obj.greetings = function() {
    console.log("Hello");
    console.log(arguments); // output will be an empty array because we haven't passed any arguments
    console.log(this); // output will be our entire object
}


// 2. Object Constructor: 

let obj2 = new Object(); // we need to use the new keyword because this is a constructor function
obj2.firstName = "Razvan";
obj2.lastName = "Bugoi";
obj2.age = 26;
obj2.businessOwner = false;


// to delete a property inside an object we use the "delete" keyword

delete obj2.firstName;
console.log(obj2.firstName); // returns undefined because that property doesn't exists anymore

// to check if a property or method exists inside an object we can use the "in" keyword or "hasOwnProperty" function: 

"firstName" in obj2; // will output false because we deleted it
"greetings" in obj; // will output true because it exists



obj2.hasOwnProperty("lastName"); // will return true because obj2 has "lastName" property;