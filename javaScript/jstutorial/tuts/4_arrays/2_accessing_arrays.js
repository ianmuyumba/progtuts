// Accessing Arrays using Indexes
var myCars = ["Discovery", "Lexus", "Subaru"];
console.log(myCars["0"]); //Print value at Index 0 - First Elem

var myFruits = ["Mangoes", "Oranges", "Pineapples"];
console.log(myFruits["2"]); //Print value at Index 2 - Third Element

// Accessing the last item of the array
var myHeights = [24,25,26,27,28];
console.log(myHeights[myHeights.length -1]);

// Accessing the second-last item of the array
var myHeights = [24,25,26,27,28];
console.log(myHeights[myHeights.length -2]);


var myWeights = [54,55,56,57,58];
myWeights[0] = 64; // Change the value of the first item
console.log(myWeights["0"]);

myWeights[myWeights.length -1] = 68; // Change the value of the last item in the array
console.log(myWeights[myWeights.length -1]);

// myWeights[myWeights.length] = 59; // Add a new item to the array using the length property
// console.log(myWeights);
