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
