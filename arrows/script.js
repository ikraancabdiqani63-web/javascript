// traditional function
// function multiply  (x) {
//     return 2 * 3
// }
// console.log(multiply()); // Output: 6

// variable function
// let sum = function() {
//     return 2 + 5;
// };
// console.log(sum()); // Output: 7

// arrow function
// let divide = x  => 10 / x;
// console.log(divide(2)); // Output: 5

// Using a traditional function
// let printUpperCase = function(oneName) {
//     console.log(oneName.toUpperCase());
// };
let listOfNames = ["Alice", "Bob", "Charlie", "David", "Daud"];
// //  listOfNames.forEach(printUpperCase); // Output: ALICE, BOB, CHARLIE

// // Using an arrow function
// listOfNames.forEach(name => console.log(name.toUpperCase())); // Output: ALICE, BOB, CHARLIE

// listOfFriends.map()
// let marks = [85, 90, 78, 92];
// let marksDoubled = Marks.map( (x) => x * 2); this one is esier
//  var marksDoubled = marks.map(multipleir);
// function multipleir(x) {
//     return x * 2;
// }

// console.log(marksDoubled); // Output: [170, 180, 156, 184]

// let adder = function(total,number) {
//     return total + number;
// // };
// let totalmarks = marks.reduce( (total, number) => total + number); // this one is esier
// console.log(totalmarks); // Output: 345

let stratsWithD = listOfNames.filter((items) => items.startsWith("D"));
console.log(stratsWithD); // Output: ["David", "daud"]
