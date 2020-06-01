/*
    Modules

      - Every file in a JavaScript application is considered a module.
      - The variables and functions defined in the module are native to that
      module and not available outside the module. If you need to use the
      variable outside that module, you will need to export it explicitly
      export it and make it public

      * Every node application has at least one file/module that acts as the
      main module
*/

// Create a module
var firstName = "Ian";

function lastName(name){
  console.log(name);
}

module.exports.firstName = firstName; // Export firstName variable
module.exports.lastName = lastName; // Export lastName function
