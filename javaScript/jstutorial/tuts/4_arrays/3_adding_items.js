/*
    The push() and unshift() methods can be used to add items into an array
     - The push() method can be used to add an element at the end of the array
     - The unshift() method can be used to add an element at the beginning of
     the array
*/

var myDogs = ["Simba", "Chui", "Tiger"];
myDogs.push("Kali"); //Adds element at the end of the array
myDogs.unshift("Siafu"); //Adds element at the start of the array
console.log(myDogs);

var myAges = [20,30,40];
myAges.push(50);
myAges.unshift(10);
console.log(myAges);
