/*
  - A two-dimensional array is a collection of items that are organized as a
  matrix of rows and columns, and is given a name
  - The two-dimensional array in JavaScript is an Array of Arrays
*/
//
// var firstName;
// var secondName;

var studentInfo = [["Ian", "Muyumba"],[24],["JavaScript", "Python"]];

 // Print the arrays defined in the super array
for (var a = 0; a < studentInfo.length; a++){
  console.log(studentInfo[a]);
}


// Nested for loop to print out each and every item in the arrays
for (var a = 0; a < studentInfo.length; a++){
  for (var b = 0; b < studentInfo[a].length; b++){
    console.log(studentInfo[a][b]);
  }
}
