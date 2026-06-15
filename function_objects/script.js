function multiply(a, b) {
    return  a * b;
} console.log(multiply(4, 2));
function divide(a, b) {
    return a / b;
} console.log(divide(6, 2));

let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
console.log(person);

function welcome(name) {
    return "Welcome, " + name + "!";
}
console.log(welcome("ikran"));

let student = {
    name: "Alice",
    grade: "A",
    age: 20
};
console.log(student);
function studentInfo(student) {
    return "my name is " + student.name + ", " + "and i am " + student.age;
}
console.log(studentInfo(student));