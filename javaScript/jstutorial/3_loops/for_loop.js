/*
    - The "for loop" loops through a block of code a number of times
    - In the for() keyword, you will have to include three statements:
        * The first is executed before the loop starts
        * The second statement defines the condition for running the loops
        * The third statement is executed each time after the block of code is executed

*/

// Print a string four times
for(var counter = 0; counter < 4; counter++){
  // Initial value has been set to zero (0)
  // The counter will run as long as the figure is less than 10
  // counter++ is similar to counter = counter + 1. That way, it will keep adding 1 to the counter every time the loop executes
  console.log("This is a for loop");
}


// Count from zero to nine
for(var counter1 = 0; counter1 < 10; counter1++){
  console.log(counter1);
}


// Count from one to ten
for(var counter1 = 0; counter1 < 10; counter1++){
  console.log(counter1 + 1);
}


// Count backwards from ten to one
for(var counter1 = 10; counter1 != 0; counter1--){
  console.log(counter1);
}


// Count backwards from ten to five
for(var counter1 = 10; counter1 > 4; counter1--){
  console.log(counter1);
}
