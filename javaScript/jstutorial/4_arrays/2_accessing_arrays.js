var myCars = ["Discovery", "Lexus", "Subaru"];
console.log(myCars["0"]); // Accessing Arrays using Indexes

var myFruits = ["Mangoes", "Oranges", "Pineapples"];
console.log(myFruits["2"]);

var myAges = [24,25,26,27,28];
console.log(myAges["3"]);

var myHeights = [24,25,26,27,28];
console.log(myHeights[myHeights.length -1]); // Accessing the last item of the array

var myHeights = [24,25,26,27,28];
console.log(myHeights[myHeights.length -2]); // Accessing the second-last item of the array

var myWeights = [54,55,56,57,58];
myWeights[0] = 64; // Change the value of the first item
console.log(myWeights["0"]); // Check the new value of the first item

myWeights[myWeights.length -1] = 68; // Change the value of the last item in the array
console.log(myWeights[myWeights.length -1]); // Check the new value

myWeights[myWeights.length] = 59; // Add a new item to the array using the length property
console.log(myWeights);
