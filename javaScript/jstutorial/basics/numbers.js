/*
 Working with numbers

 	- Base
 	- Exponential
 	- Decimals
*/

var string1 = 10;
var result = string1.toString();
console.log(result);

//Change the base of a number
var string1 = 10;
console.log("Base 16");
var result = string1.toString(16); //This is meant to return the number in Hexadecimal format (Base 16)
console.log(result);
console.log("Base 8");
var result = string1.toString(8); //This is meant to return the number in Octal format (Base 8)
console.log(result);
console.log("Base 2");
var result = string1.toString(2); //This is meant to return the number in Binary format (Base 2)
console.log(result);

//Return a number written in exponential notation
var number1 = 200;
console.log(number1);
console.log("Exponential Notation");
var number1 = number1.toExponential(2);
console.log(number1);

//Return a number with a specified number of decimals
var number2 = 100.45675;
console.log(number2 + " in Two Decimals");
var number2 = number2.toFixed(2); //Rounds of to the nearest two decimal places
console.log(number2);


//To get more functions for manipulation of numbers, check out the Mozilla Developers Network (MDN)