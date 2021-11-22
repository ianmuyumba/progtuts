//
// var firstName = "Ian";
//
// function lastName(name){
//   console.log(name);
// }
//
// module.exports.firstName = firstName; // Export firstName variable
// module.exports.lastName = lastName; // Export lastName function

//
// const path = require('path');
//


/*
  OS Module - Helps us get information about the OS using JavaScript
*/
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory);
