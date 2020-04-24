/*
	Comparison Operators
		- Equal (==) and (===)
		- Not Equal (!==)
		- Greater than (>)
		- Less than (<)
		- Greater than or equal to (>=)
		- Less than or equal to (<=)
*/


var number1 = prompt("Enter Number 1: ");
var number2 = prompt("Enter Number 2: ");


if (isNaN(number1)){
	//Check if the user input is an integer, if not, return a message
	console.log(number1 + " is not a number")
} else if (isNaN(number2)) {
	console.log(number2 + " is not a number")
} else {
	//Main if...else statement
	if (number1 == number2) {
		console.log(number1 + " is equal to " + number2)
	} else if (number1 > number2) {
		console.log(number1 + " is greater than " + number2)
	} else if (number1 < number2) {
		console.log(number1 + " is less than " + number2)
	} else {
		console.log("Did you experience any issues?")
	}
}


// The tripple-equal operator checks of the value AND the type is similar

number3 = 100
number4 = "100"

//Using double equal signs, the output will be that number3 and number4 are equal
if (number3 == number4) {
	console.log(number3 + " is equal to " + number4)
} else {
	console.log("The numbers are not equal")
}

//Using triple equal signs, the output will be that number3 and number4 are not equal, since the type is not similar
if (number3 === number4) {
	console.log(number3 + " is equal to " + number4)
} else {
	console.log("The numbers are not equal")
}


// The not-equal operator checks if the two variables are not equal

var number5 = prompt("Enter your Number: ")
number5 = parseInt(number5); //Convert user input into an integer


if (number5 !== 100) { // Note that the Not Equal operator takes consideration of the variables' datatypes
	console.log(number5 + " is not equal to 100")
} else {
	console.log(number5 + " is equal to 100")
}


// Greater than
console.log("Greater than 50")

var number6 = prompt("Enter your Number: ")
number6 = parseInt(number6); //Convert user input into an integer

if (number6 > 50) {
	console.log(number6 + " is greater than 50")
} else {
	console.log(number6 + " is NOT greater than 50")
}


// Less than
console.log("Less than 50")

var number7 = prompt("Enter your Number: ")
number7 = parseInt(number7); //Convert user input into an integer

if (number7 < 50) {
	console.log(number7 + " is less than 50")
} else {
	console.log(number7 + " is NOT less than 50")
}


// Greater than or equal to
console.log("Greater than or equal to 50")

var number8 = prompt("Enter your Number: ")
number8 = parseInt(number8); //Convert user input into an integer

if (number8 >= 50) {
	console.log(number8 + " is greater than or equal to 50")
} else {
	console.log(number8 + " is NOT greater than or equal to 50")
}


// less than or equal to
console.log("Less than or equal to 50")
var number9 = prompt("Enter your Number: ")
number9 = parseInt(number9); //Convert user input into an integer

if (number9 <= 50) {
	console.log(number9 + " is less than or equal to 50")
} else {
	console.log(number9 + " is NOT less than or equal to 50")
}