/*
  - The foreach() method executes a function once for each array element
  in ascending order
*/


var myBeers = ["Whitecap", "Tusker", "Guiness", "Balozi"];
// console.log(myBeers);

// myBeers.forEach(
//   function() {
//     console.log("Wabebee");
//   }
// )

/*
  - The Callcack can be invoked with three arguments:
      - ELement Value
      - Element Index
      - Array being traversed
*/

myBeers.forEach(
  function(element) {
    console.log(element); // Prints out all elements in the array
  }
)

myBeers.forEach(
  function(element, index) {
    // console.log(typeof index);
    // // Print out all elements with their respective indexes
    // console.log(element + " is at index " + sumAdd);

    // Print out all elements with their respective (indexes+1)
    var sumAdd = index + 1; // Define a variable that holds sum of index + 1
    console.log(element + " is at index " + sumAdd);
  }
)

myBeers.forEach(
  function(element, index, array) {
    // Print out all elements with their respective indexes
    console.log(element + " is at index " + index);
    // Print out the array
    console.log(array);
  }
)
