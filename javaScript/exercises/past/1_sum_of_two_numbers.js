function getSum(a,b){
  if (typeof a !== "number" || typeof b !== "number") {
    return "You have not entered a number";
  } else {
    return a + b;
  }
}

getSum();
