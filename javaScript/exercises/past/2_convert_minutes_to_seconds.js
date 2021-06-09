/*
  Convert Minutes into Seconds
    - Write a function that takes an integer minutes and converts it
    to seconds
*/

// var userInput = prompt("Enter Minutes to be converted into seconds");
// var seconds = userInput*60;
//
// console.log(userInput + " minutes = " + seconds + " Seconds");
//


// Edabit solution
function convertMinutes(minutes) {
  if (minutes !== "number") {
    console.log("Please enter a valid number");
  }
  return minutes*60;
}
