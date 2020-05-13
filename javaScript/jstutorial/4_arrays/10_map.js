/*
    The map() method creates a new array with the results of calling a provided
    function on every element in the calling array
*/

var myInts = [1,2,3,4,5];

var newInts = myInts.map(
  function(element){
    return element * 10; // Multiplies each element in the array by 2 and returns the new array
  }
)

console.log(myInts);
console.log(newInts);


// Convert an array of lower case letters into upper case

var lowerCase = ["a", "b", "c", "d", "e"];

var upperCase = lowerCase.map(
  function(element){
    return element.toUpperCase();
  }
)

console.log(lowerCase);
console.log(upperCase);
