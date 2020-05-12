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

console.log(newInts);
