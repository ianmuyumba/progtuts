/*

Calculate total points when fed with results from a match

Win = 3 points
Draw = 1 point
Loss = 0 points

Clubs ~ Bandari vs Sharks

*/

var x = 0 // x represents Bandari
var y = 0 // y represents Sharks

var x = prompt("Bandari: ")
var y = prompt("Sharks: ")


if (x > y) {
    console.log("Bandari: 3 points")
    console.log("Sharks: 0 points")
} else if (y > x) {
    console.log("Sharks: 3 points")
    console.log("Bandari: 0 points")
} else if (x == y){
    console.log("Sharks: 1 point")
    console.log("Bandari: 1 point")
} else {
    console.log("Invalid Entries")
}