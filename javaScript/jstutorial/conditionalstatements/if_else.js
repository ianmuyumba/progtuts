/* 
Conditional Statements
*/

var age = prompt("Enter your age: "); //Take user input
age = parseInt(age); //Convert user input into an integer

// console.log(age);
// console.log(typeof age);

if (age<18) { //Check if condition is true
	console.log("You are not allowed to access this site") //Define what happens if condition is met
} else { 
	console.log("Welcome to this website") //Define what happens if condition is not met
}


// Else...if statement - Used in defining extra conditions
if (age<18) { //Check if condition is true
	console.log("You are not allowed to access this site") //Define what happens if condition is met
} else if (age>50) { //Check if extra condition(s) is/are true
	console.log("Wewe ni mzee sana banaa...") //Define what happens if condition is met
} else{
	console.log("Welcome to this website") //Define what happens if all conditions are not met
}


//isNaN() function - Used to check if the user input is a null value
if (isNaN(age)) { //Check if number is a NaN value
	console.log("The age must be a number") //Define what happens if condition is met
} else {
	//You can then nest an If...Else statement inside another one
	if (age<18) { //Check if condition is true
	console.log("You are not allowed to access this site") //Define what happens if condition is met
	}
	else if (age>50) { //Check if extra condition(s) is/are true
		console.log("Wewe ni mzee sana banaa...") //Define what happens if condition is met
	} else{
		console.log("Welcome to this website") //Define what happens if all conditions are not met
}
}