/* 
	User Input
		- The prompt() function can be used to request for user input
*/

var firstName = prompt("Enter first Name: ");
var secondName = prompt("Enter second Name: ");

alert("Welcome, " + firstName + " " + secondName + ". Kalia hio kiti na matako yote mbili");


alert("Your first name has " + firstName.length + " letters"); // Length of a string


var string1 = prompt("Enter your name");
alert("Your name has " + string1.length + " letters");

// Quotation marks

var name1 = "My name is 'Ian' Muyumba"; //To have text inside quotation marks, you have to use single/double interchangeably
var name2 = 'My name is "Ian" Muyumba'; //Option two, for the example above
var name3 = "My name is "Ian" Muyumba"; //This throws an error
var name4 = 'Hi, you\'re supposed to go this way'; //The back-slash before the exclamation mark on you're lets us escape the symbol (exclamation mark)




//the parseInt() function is used to convert a string into a number
var age1 = prompt("Enter your age: ");
console.log(typeof age1);
age1 = parseInt(age1); //parseInt function converts the string user input into a number
console.log(typeof age1);
alert("After five years, you will be " + (age1+5));

//the toString() function is used to convert a string into a number
var age2 = prompt("Enter your age: "); //Request for user input
console.log(age2);
age2 = parseInt(age2);
console.log(typeof age2);

console.log(age2);
age2 = toString(age2); //Convert number into a string
console.log(typeof age2);
