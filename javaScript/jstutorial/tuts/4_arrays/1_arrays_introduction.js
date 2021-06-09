/*
    - An ARRAY is an ordered collection of data
    - Arrays can hold anything: Strings, Numbers, Functions, Nested Arrays,
    undefined & Null Values, etc
*/

// Syntax

var myCars = ["Discovery", "Lexus", "Subaru", "Benz"]; // Array of strings
console.log(myCars);


var myNumbers = [100, 200, 300, 400, 500]; // Array of Numbers
console.log(myNumbers);


var myObjects = [ // Array of Objects
    {
      name: "Ian"
    },

    {
      age: 24
    }
]
console.log(myObjects);


var myFunctions = [ // Array of Functions
    function() {

    },
    function() {

    }
]
console.log(myFunctions);



// Array properties

console.log(myCars.length); // Length (How many items) of an array
console.log("I have " + myCars.length + " cars");
