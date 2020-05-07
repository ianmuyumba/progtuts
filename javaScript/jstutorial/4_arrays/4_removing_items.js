// /*
//     The pop() method and the shift() method can be used to remove items from an array
//       - The pop() method removes the last item from the array
//       - The shift() method removes the first item from the array
// */
// var myAges = [10,20,30,40,50];
// myAges.pop(); // Removes the last item
// myAges.shift(); // Removes the first item
// console.log(myAges); // Prints out the resultant array
//
//
// // The length property can also be used to remove elements at the end of an array
// var myHeights = [5,6,7,8,9];
// myHeights.length = 3; // Set the length property to a value less than the current value
// console.log(myHeights); // Prints out a truncated array, with only X elements as specified above
// console.log(myHeights.length);


// The splice() method can be used to add or remove elements from an array
var myNumbers = [1, 2, 3, 4, 5];
myNumbers.splice(1,1,8);
  // To remove elements from the array above:
      // - The first argument in the splice method specifies which index we start from
      // - The second argument specifies how many elements to be removed towards the right
      // - The third and subsequent arguments (optional) specify elements to be added to the array
console.log(myNumbers);
