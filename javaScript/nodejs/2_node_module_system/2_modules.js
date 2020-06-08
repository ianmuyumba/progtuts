/*
    Modules

      - Every file in a JavaScript application is considered a module.
      - The variables and functions defined in the module are native to that
      module and not available outside the module. If you need to use the
      variable outside that module, you will need to export it explicitly
      and make it public

      * Every node application has at least one file/module that acts as the
      main module
*/

// Create a module
// var firstName = "Ian";
//
// function lastName(name){
//   console.log(name);
// }
//
// module.exports.firstName = firstName; // Export firstName variable
// module.exports.lastName = lastName; // Export lastName function


// Loading a module - require function
var exported = require('./app.js'); // The require function returns the object exported from the target module
console.log(exported);
