/*
    - A nested loop refers to a loop within a loop
*/

// Find the first five multiples of all numbers between one to five
var x = 1
var y = 1

for (var x = 1; x <= 5; x++) {
  console.log(x);
  for (var y = 1; y <= 5; y++) {
    console.log(x + " * " + y + " = " + x*y);
  }
}
