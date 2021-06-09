console.log("I am Ian"); // Print basic output

var myAges = [20,21,22,23,24,25];

console.log(myAges);
// Remove 23 and 25
myAges.splice(2,2,30);
console.log(myAges);


var a = parseInt("0");
var b = parseInt("1")

console.log(typeof(a));
console.log(typeof(b));

for (a = 0; a < myAges.length; a++) {
  console.log("Element " + a);
  console.log(myAges[a]);
}


var clientDetails = ["IDNumber", "Name", "DOB", "Evaluation", "Doctors Comments"];
console.log(clientDetails);

clientDetails.forEach(
  function(element, index){
    var sumAdd = index+1;
    console.log(sumAdd + ": " + element);
  }
)


var newArr = clientDetails.filter(
  function(element) {
    return element === "Name";
  }
)
console.log(newArr);
