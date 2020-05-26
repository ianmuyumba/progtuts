/*
    Functions
*/

// function helloWorld() {
//   console.log("Hello World");
// }
//
// // helloWorld();
// // helloWorld(); //Execute the function twice
//
//
// for (var i = 0; i < 10; i++) {
//   helloWorld(); //Execute the function inside a loop
// }




/*
  Getting information from a function - return keyword
*/

var myArray = [1,2,3,4,5];

// function sumArray(){
//   var sum = myArray.reduce(
//     function(accumulator, element){
//       return accumulator + element;
//     },10
//   );
//
//   // console.log(sum);
//   return sum; // Function stops when the return keyword is called
// }
//
// sumArray() // Execute the function
// var myResult = sumArray(); // Store the function's result in a variable
// console.log(myResult);


function filterArray(){
  var filteredArray = myArray.filter(
    function(element){
      return element > 3;
    }
  )
  return filteredArray;
}

var myResult = filterArray();
console.log(myResult);


/*
  Giving information from a function - return keyword
*/
