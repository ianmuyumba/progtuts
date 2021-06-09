
/* Datatypes in JavaScript

		- Numeric
		- String
		- Boolean
		- Null
		- Undefined
		- Symbol
*/

// Number

var num1 = 50;
var num2 = 100;
var num3 = num1+num2;

alert("The sum of " + num1 + " and " + num2 + " is " + num3);

//String

var firstname = "Ian ";
var secondname = "Muyumba";
var fullname = firstname+secondname;

alert("My full name is " +fullname)

//Boolean

var big = true; //When declaring a boolean value, remember not to use quotation marks

// Null

var a = 100; 
a = Null; //Declaring a variable null. It must have been declared before

//Undefined

var myname; //This variable is undefined because no value has been assigned to it


//Important to note that the JavaScript datatypes and variables are dynamic, in that you can assign diff datatypes to a variable

var dynamic = "Ian"; //String assinged to the variable
dynamic = 50; //Number now assigned to the variable
dynamic = true; //Boolean now assigned


// typeof operator - Used in checking the datatype of a variable

console.log(typeof "Ian"); //Outputs string

var num4 = 1000;
console.log(typeof num4); //Outputs number