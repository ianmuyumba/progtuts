/*
    - The break keyword can be used to jump out of the loop
    - The continue keyword breaks one iteration and moves to the next one
*/
var i = 0;
var i = parseInt(i);

while (i <= 10) {
  i++;

  if (i == 5) {
    continue; //The continue keyword jumps us out of the iteration that met the above condition
  }

  if (i > 8) {
    break; //The break keyword jumps us out of the loop once the condition is met
  }
  console.log(i); // The iteration that corresponds to the above condition will not be executed
}
