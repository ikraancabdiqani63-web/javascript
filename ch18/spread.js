let person = {
  first: "mohammad",
  last: "mahad",
  Age: 25,
  isMarried: false,
};
let person2 = { ...person, first: "sami" };
console.log(person2);

let students = ["mohammad", "mahad", "sami", "ahmed"];
let students2 = ["farah", "ali", "hassan", "hussain"];
// console.log(students2);

let combined = [...students, ...students2];
console.log(combined);

let MyName = "mohammad mahad";
let letters = [...MyName];
console.log(letters);
