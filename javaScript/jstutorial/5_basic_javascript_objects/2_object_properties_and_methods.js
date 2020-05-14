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
patient.display(); // Execute the function using its property (display)
