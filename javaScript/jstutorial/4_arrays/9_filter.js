/*
  - The filter() method creates a new array with all the elements that pass
  the test implemented by a given function
*/


var myNumbers = [1,2,3,4,5,6,7,8,9];

var newNumbers = myNumbers.filter(
  function(element) {
    return element > 5; // Set constraint to print out all numbers greater than 5
  }
)

console.log(myNumbers);
console.log(newNumbers);


var myArrays = [
  [20,21,22,23]
  [20,21,22,23,24]
]

var newArrays = myArrays.filter(
  function(){
    return myArrays.length < 5;
  }
)

console.log(newArrays);
