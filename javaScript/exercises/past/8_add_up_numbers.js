/*

// Add up the Numbers from a Single Number

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples

addUp(4) ➞ 10
addUp(13) ➞ 91
addUp(600) ➞ 180300

Notes
Expect any positive number between 1 and 1000.

*/

// var num = prompt("Enter Number between 1 and 1000: ");
// var intNum = parseInt(num);

// newNum = 0;
// var intnewNum = parseInt(newNum);

// console.log(typeof(intNum));
// console.log(typeof(intnewNum));



// if ((num >= 1) && (num <= 1000)) {
// 	for (var i = 0; i < intNum; i++) {
// 		intnewNum += newNum;
// 		console.log(intnewNum);
// 	}
// } else {
// 	console.log("Enter any positive number between 1 and 1000");
// }




// function printOut(){
// 	console.log("My Name is Ian");
// }

// printOut();



var num1 = prompt("Num 1: ");
var num2 = prompt("Num 2: ");


function sumNumbers(){
	console.log(num1 + num2);
}

sumNumbers()