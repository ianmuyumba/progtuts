/*
    - The reduce() method applies a function against an accumulator and each element
    in the array from left to right to reduce it to a single value
    - Accepts four arguments:
        * accumulator - initial value
        * currentValue - current element
        * currentIndex - index of current element
        * array - the array
*/
var myNums = [1,2,3,4,5];

var sum = myNums.reduce(
  function(accumulator, element){
    return accumulator + element;
  }, 10 //Define the initial value of the accumulator
);

console.log(sum);
