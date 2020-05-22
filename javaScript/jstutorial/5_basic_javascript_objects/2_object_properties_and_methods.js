/*
  - A property is a value associatd with an object
  - A method is a function inside an object
*/

var patient = {
  idNumber: 33045653,
  firstName: "Ian",
  lastName: "Muyumba",
  skills: ["HTML", "CSS", "JavaScript"],
  display: function() {
    console.log("First Name: " + this.firstName +
                "\nLast Name: " + this.lastName +
                "\nSkills: " + this.skills);
  }
};

// console.log(patient); // Print out the object
console.log(patient.display()); // Execute the function using its property

// // this keyword is used when referring to the current object
// var client = {
//   firstName: "Ian",
//   lastName: "Muyumba",
//   display: function() {
//     console.log("First Name: " + this.firstName + "\nLast Name: " + this.lastName)
//   }
// };
//
// client.display();
//

// // foreach with arrays in an object - Access each item of an array in an object
//
// var student = {
//   studentName: "Ian",
//   studentAge: 24,
//   studentCourse: "BBIT",
//   studentSkills: ["HTML","CSS", "PhP", "JavaScript", "Python"],
//   displaySkills: function(){
//     this.studentSkills.forEach(function(e) {
//       console.log(e);
//     })
//   }
// };
//
// // console.log(student);
// // console.log(student.studentName);
//
// student.displaySkills;
