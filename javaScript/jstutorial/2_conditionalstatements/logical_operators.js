/*
	Logical Operators
		- AND (&&)
		- OR (||)
		- NOT (!)
*/
// The AND (&&) operator is used to where two conditions MUST be true

var number1 = prompt("Enter your number: ")
var number1 = parseInt(number1)

if ((number1 > 5) && (number1 < 10)) { //Output TRUE when the given number is greater than 5 AND less than 10
	console.log("True")
} else {
	console.log("False")
}


// The OR (||) operator is used to where either of the conditions can be true for the output to be true

var number2 = prompt("Enter your number: ")
var number2 = parseInt(number2)

if ((number2 > 5) || (number2 < 10)) { //Output TRUE when the given number is greater than 5 OR less than 10
	console.log("True")
} else {
	console.log("False")
}

// The NOT (!) operator is used to negate an operation - True becomes false and vice versa

var number3 = prompt("Is the number you enter greater than 4: ")

if ( ! number3 > 4) { // The output is converse as the NOT operator negates the greater than operator
	console.log("True")
} else {
	console.log("False")
}
