var students = {
  name: "Ian",
  course: "JavaScript",
  age: 24
}
 // console.log(students);


// for-in loop

for (var property in students) {
  // console.log(property); // Get the names of the propertys
  console.log(students[property]); // Get the values of the propertys
}
