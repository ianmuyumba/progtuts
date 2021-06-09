/*
	Logical Operators
		- AND (&&)
		- OR (||)
		- NOT (!)
*/

//Check if a number is greater than ten AND less than 20

var number1 = prompt("Enter number: ")

if ((number1 > 10) && (number1 < 20)) {
	console.log((number1 + " is greater than 10 AND less than 20"))
} else {
	console.log((number1 + " is NOT a number between 10 and 20"))
}


//Check if a number is greater than 10 OR less than 50

var number2 = prompt("Enter number: ")

if ((number2 > 10) || (number2 < 50)) {
	console.log((number2 + " could be greater than 10 OR less than 20"))
} else {
	console.log((number2 + " is NOT a number bwana"))
}


//Check if a number is greater than 10 OR less than 50

var number2 = prompt("Enter number: ")

if ((number2 > 10) || (number2 < 50)) {
	console.log((number2 + " could be greater than 10 OR less than 20"))
} else {
	console.log((number2 + " is NOT a number bwana"))
}


// The NOT (!) operator is used to negate an operation - True becomes false and vice versa

var number3 = prompt("Is the number you enter greater than 4: ")

if ( ! number3 > 4) { // The output is converse as the NOT operator negates the greater than operator
	console.log("True") 
} else {
	console.log("False")

}