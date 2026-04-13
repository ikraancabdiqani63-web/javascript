// var student = {
//   name: "Nastexa",
//   age: 19,
//   grade: "A",
//   isGraduated: false,
//   isMarried: false,
//   hobbies: ["reading", "coding", "traveling"],
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//   },
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.grade);
// // console.log(student["address"]["city"]);

let newObject = {
  "person.Name": "Nastexa",
  "person.Age": 19,
  "person.Grade": "A",
  "person.IsGraduated": false,
  "person.IsMarried": false,
  "person.Hobbies": ["reading", "coding", "traveling"],
  "person.Address": {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

console.log(newObject["person.Name"]);
console.log(newObject["person.Age"]);
console.log(newObject["person.Grade"]);
