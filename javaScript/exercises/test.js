/*
    Equality Check
      - In this challenge, you must verify the equality of two different given parameters: a and b.
      - Both the value and the type of parameters need to be tested in order to have a matching
      equality. The possible types of the given parameters are:

        * Numbers
        * Strings
        * Booleans (false or true)
        * Special values: undefined, null and NaN

      - Implement a function that returns true if the parameters are equal, and false if they are different.

      Examples
      checkEquality(1, true) ➞ false
      // A number and a boolean: their type is different

      checkEquality(0, "0") ➞ false
      // A number and a string: their type is different

      checkEquality(1,  1) ➞ true
      // A number and a number: their type and value are equal
*/


//
// function testEquality(a,b){
//   if (a===b){
//   		return true;
//   	}else {
//   		return false;
//   	}
//   }
// console.log(testEquality(1,2));

/*
    Missing Third Angle

    - You are given 2 out of 3 angles in a triangle, in degrees. Write a function that classifies
    the missing angle as either "acute", "right", or "obtuse" based on its degrees

      - An acute angle is less than 90 degrees.
      - A right angle is exactly 90 degrees.
      - An obtuse angle is greater than 90 degrees (but less than 180 degrees).

    - For example: missingAngle(11, 20) should return "obtuse", since the missing angle would
    be 149 degrees, which makes it obtuse.

    // Examples
    missingAngle(27, 59) ➞ "obtuse"
    missingAngle(135, 11) ➞ "acute"
    missingAngle(45, 45) ➞ "right"

*/

// function missingAngle(angleA, angleB){
//   var angleC = 180 - (angleA + angleB);
//   if (angleC < 90) {
//     return "Acute"
//   } else if (angleC === 90) {
//     return "Right"
//   }else {
//     return "Obtuse"
//   }
// }
//
// console.log(missingAngle(27, 59));

/*
  Profitable Gamble
*/

// function profitableGamble(prob, prize, pay){
//   if (prob * prize > pay) {
//     return true
//   } else {
//     return false
//   }
//
// }
// console.log(profitableGamble());

/*
    Return the First and Last Elements in an Array
      - Create a function that takes an array of numbers and return the first
      and last elements as a new array.

      // Examples
      firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]
      firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]
      firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]

*/

// function firstLastArray(arr){
//   return [arr[0], arr[arr.length-1]]
// }
//
// console.log(firstLastArray([5, 10, 15, 20, 25]));



/*
    Solve the Equation
    - Create a function that takes an equation (e.g. "1+1"), and returns the answer

      // Examples
      equation("1+1") ➞ 2
      equation("7*4-2") ➞ 26
      equation("1+1+1+1+1") ➞ 5

*/
//
// function solveEquation(a,b){
// }
//
// console.log(solveEquation(10, 15));

/*
    Frames Per Second
      - Create a function that returns the number of frames shown in a given
      number of minutes for a certain FPS.

      // Examples
      frames(1, 1) ➞ 60
      frames(10, 1) ➞ 600
      frames(10, 25) ➞ 15000
*/

// function framesPerSecond(minutes, fps){
//   // number of frames = (minutes*60) * fps
//
//   var frames = (minutes*60) * fps
//   return frames
// }
//
// console.log(framesPerSecond(1, 1));


/*
    Palindrome?

    - A palindrome is a word that is identical forward and backwards.
        * mom
        * racecar
        * kayak

    - Given a word, create a function that checks whether it is a palindrome.
*/

// function checkPalindrome(word){
//   var stringArray1 = word.split()
//   // return stringArray1
//
//   var stringArray2 = stringArray1.reverse()
//   return stringArray2
//
//
// }
//
// console.log(checkPalindrome("shiononyia"));

// Reduce() function


/*
    Check if an Integer is Divisible By Five
      - Create a function that returns true if an integer is evenly divisible
      by 5, and false otherwise

      // Examples
      divisibleByFive(5) ➞ true
      divisibleByFive(-55) ➞ true
      divisibleByFive(37) ➞ false
*/

// function divisibleByFive(n) {
//   if ((n % 5) === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
//
// divisibleByFive(5);

/*
    Convert Number to Corresponding Month Name
      - Create a function that takes a number (from 1 to 12) and returns its
      corresponding month name as a string. For example, if you're given 3 as
      input, your function should return "March", because March is the 3rd month.

      // Examples
      monthName(3) ➞ "March"
      monthName(12) ➞ "December"
      monthName(6) ➞ "June"
*/

function monthName(num) {
  if (num === 1) {
    console.log("January");
  // } else if (num === 2) {
  //   return "February"
  // } else if (num === 3) {
  //   return "March"
  // }else if (num === 4) {
  //   return "April"
  // }else if (num === 5) {
  //   return "May"
  // }else if (num === 6) {
  //   return "June"
  // }else if (num === 7) {
  //   return "July"
  // }else if (num === 8) {
  //   return "August"
  // }else if (num === 9) {
  //   return "September"
  // }else if (num === 10) {
  //   return "October"
  // }else if (num === 11) {
  //   return "November"
  // }else if (num === 12) {
  //   return "December"
  }

monthName(1)
