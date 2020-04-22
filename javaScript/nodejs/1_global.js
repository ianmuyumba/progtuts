/*
The Global object - There are a couple of global objects and associated methods you can invoke
*/

console.log("My name is Ian");

// setTimeout object
setTimeout(function fiveSeconTimeout() {
  console.log("Five Seconds");
}, 5000);


// setInterval method
var timeInterval = 0;

setInterval(function threeSecondInterval() {
  timeInterval += 3;
  console.log(timeInterval + " Seconds");
}, 3000);


// clearInterval method
var timeInterval = 0;

var timer = setInterval(function threeSecondInterval() {
  timeInterval += 3;
  console.log(timeInterval + " Seconds");
  if (timeInterval > 15) {
    clearInterval(timer);
  }
}, 3000);


// __dirname & __filename

console.log(__dirname); // check directory to which the file is hosted
console.log(__filename); // check the file name
