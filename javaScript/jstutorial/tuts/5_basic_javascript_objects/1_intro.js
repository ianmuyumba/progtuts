var patient = {
  idNumber: 33045653,
  firstName: "Ian",
  secondName: "Muyumba"
};

patient.secondName = "Mandela"; // Change the value of a property

patient.email = "ianmandela@gmail.com"; // Add a new property
patient.age = 24; // Add a new property

console.log(patient); // Display the contents of the object
console.log(patient.secondName); // Display the value of a specified property

// Brackets notation can also be used to access the properties
console.log(patient["idNumber"]); // Display the value of a specified property



// When using properties with more than one word, wrap them in quotation marks
var patient = {
  "id number": 33045653,
  "first name": "Ian",
  "second name": "Muyumba"
};

console.log(patient);
console.log(patient["id number"]);
console.log(patient["first name"]);
console.log(patient["second name"]);
