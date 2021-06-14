/*

Objects
  - Collection of data and functionalities stored as properties and methods
  - Can contain other objects (An object inside an object is literally a property of the parent object)

Properties
  - Attributes of objects

Methods
  - They act on the properties to change their values
  - Act on the current object only

*/

// Creating an object - Create a constant and define the object using curly brackets
const club = {
  // Now populate the object with data (properties) in a name:value format
  uniqueID: 1,
  name:"Tusker",
  league: "FKFPL",
  // An object can be nested inside another object - in this case the object becomes a method
  leaguePosition: {
    // Insert method to calculate league position
  },
  homeground: "Ruaraka",
// The object can also have methods used to change the properties of the object

}

// This keyword is used to refer to the current object

/*
Variable declaration - An object needs a variable to live in and a name.
  - It can be a variable or constant (var / const / let)
  - Objects are typically constants. We can change the properties of the object inside the container but cant 
  remove or replace the object from the container
*/