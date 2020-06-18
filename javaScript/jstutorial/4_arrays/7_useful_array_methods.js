// JOIN METHOD - Joins elements of an array into a string and returns the strings

var myName = ["Ian", "Muyumba", "Mandela"];
myName = myName.join();
console.log(myName);

// The join method accepts arguments which specify how the final result will be displayed

var myName = ["Ian", "Muyumba", "Mandela"];
myName = myName.join(" ");
console.log(myName);


// CONCAT METHOD - Joins two arrays and returns the new concatenated array

var fruits1 = ["Mango", "Orange", "Apple"];
var fruits2 = ["Pineapple", "Melon", "Banana"];
var concatArray = fruits1.concat(fruits2);
console.log(fruits1);
console.log(fruits2);
console.log(concatArray);

// INDEX OF METHOD - Returns the first index at which an item occurs in an array
// If the item doesn't occur, it returns -1

var fruits3 = ["Mango", "Orange", "Apple", "Pineapple", "Melon", "Banana"];
var myAges = [20,21,22,23,24,25];

var fruitIndex = fruits3.indexOf("Apple");
console.log(fruitIndex);

var agesIndex = myAges.indexOf(24);
console.log(agesIndex);

var fruitIndex = fruits3.indexOf("Machungwa"); // returns -1 when the item is not in the array
console.log(fruitIndex);

// If Statement to check if element is in array

if (myAges.indexOf(23) === -1) {
  console.log("It is NOT in the array");
} else {
  console.log("It is in the array");
}
