/*
    - Array methods can be chained, ie, using a method after another one
*/

// Return strings with more than five letters AND make them all uppercase
var myLanguages = ["JavaScript", "Python", "PhP", "Ruby"];

console.log(myLanguages);

var longLanguages = myLanguages.filter(
  function(element){
    return element.length > 5;
  }
)

console.log(longLanguages);

var upperLongLanguages = longLanguages.map(
  function(element){
    return element.toUpperCase();
  }
)

console.log(upperLongLanguages);


/*
  - We can chain the two methods above into simpler code, as below
*/

var myLanguages = ["JavaScript", "Python", "PhP", "Ruby"];
console.log(myLanguages);

var longUpperCase = myLanguages.filter(
  function(element){
    return element.length > 5;
  }
).map(
  function(element){
    return element.toUpperCase();
  }
).reduce(
  function(accumulator, element) {
    return accumulator + " " + element // Join the array elements into a string
  }, ""
)

console.log(longUpperCase);
