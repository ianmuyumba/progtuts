/*
    Functions
*/

function helloWorld() {
  console.log("Hello World");
}

helloWorld();
helloWorld(); //Execute the function twice


for (var i = 0; i < 10; i++) {
  helloWorld(); //Execute the function inside a loop
}




/*
  Getting information from a function - return keyword
*/

var myArray = [1,2,3,4,5];

function sumArray(){
  var sum = myArray.reduce(
    function(accumulator, element){
      return accumulator + element;
    },10
  );

  // console.log(sum);
  return sum; // Function stops when the return keyword is called
}

sumArray() // Execute the function
var myResult = sumArray(); // Store the function's result in a variable
console.log(myResult);


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
    - Find the sum of numbers in two arrays using the same function
      *Accumulator = 10
*/

var myArray = [1,2,3,4,5];
var myArray1 = [10,20,30,40,50];

function sumArrays(arr){ // Parse an argument inside the function to take in arrays
  var sum = arr.reduce( // arr.reduce - The method will act upon the array called above
    function(accumulator,element){
      return accumulator + element;
    },10
  );
  return sum;
}

var myResult = sumArrays(myArray);
console.log(myResult);

var myResult1 = sumArrays(myArray1);
console.log(myResult1);



// Simplified
function add5(num){
  return num + 5;
}
console.log(add5(25));


/*
    The Scope - From where the variable is visible (from where you can access it)
      * Local Scope
          - Variable declared inside a function
      * Global Scope
          - Any variable not declared in a function
*/

var name = "Ian";

function variables(){
  var name1 = "Muyumba";
  console.log(name);
}

variables() // name is a global variable and can thus be visible inside the function
console.log(name1); // name1 is a local variable and cannot be visible outside the function


/*
    Function Declaration and Function statement
*/

// Function Declaration

greet() // Works despite being declared "on top" of the function

function greet(){
  console.log("Hello World");
}
greet()

// Function Statement

 var greet = function(){
  console.log("Hello World");
}
greet();


/*
    Hoisting - 
*/
