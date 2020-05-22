/*
  Football Points
    - Create a function that takes the number of wins, draws and losses and
    calculates the number of points a football team has obtained so far.
    - A win receives 3 points, a draw 1 point and a loss 0 points.
*/

// var kplStandings = [
//   {
//     club: "Gor Mahia",
//     played: 3,
//     won: 3,
//     draw: 0,
//     loss: 0,
//     totalPoints: function() {
//       var totPoints = (this.won * 3) + (this.draw * 1);
//       return totPoints;
//     }
//   },
//   {
//     club: "Gor Mahia",
//     played: 3,
//     won: 2,
//     draw: 1,
//     loss: 0
//   },
//   {
//     club: "Kakamega Homeboyz",
//     played: 3,
//     won: 1,
//     draw: 1,
//     loss: 1
//   }
//
// ]
//
// // console.log(kplStandings);
// // console.log(kplStandings[0].played);
//
// // console.log("Club: " + kplStandings[0].club);
// // console.log("Club: " + kplStandings[0].played);
// // console.log("Club: " + kplStandings[0].won);
// // console.log("Club: " + kplStandings[0].draw);
// // console.log("Club: " + kplStandings[0].loss);
// console.log("Club: " + kplStandings[0].totalPoints);
//

//
// // EDABIT
// function footballPoints(wins, draws, losses) {
// 	var wins = prompt("Wins: ");
//   var draws = prompt("Draws: ");
//   var losses = prompt("Losses: ");
//   var totalPoints1 = ((wins * 3) + (draws * 1));
//
//   if (wins >= 0 || draws >= 0 || losses >= 0 ) {
//     console.log("Total Points: " + totalPoints1);
//   } else {
//     console.log("Enter a valid number");
//   }
// }
//
// footballPoints();
//


// Take two
function footballPoints(3, 4, 2) {
  if (typeof wins !== "number" || typeof draws !== "number" || typeof losses !== "number") {
    return "You have not entered a number";
  } else {
    return 3*3 + 4;
  }
  console.log("Ian");
}

footballPoints();
