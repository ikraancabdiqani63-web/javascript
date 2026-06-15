var students= [
    {name: "Ikraam", age: 23, grade: 'A'},
    {name: "Fatima", age: 22, grade: 'B'},
    {name: "Ahmed", age: 20, grade: 'A'},
    {name: "Sara", age: 21, grade: 'A'},
    {name: "Omar", age: 23, grade: 'B'}
]

// add student
document.getElementById("add").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;
    if (name === "" || age === "" || grade === "") {
        return;
    }
    students.push({name, age, grade});
    showStudents();
});
//  show students

function showStudents() {
    let ul = document.getElementById("student-List");
    ul.innerHTML = students.map(s => `<li>${s.name} - Age: ${s.age}, Grade: ${s.grade}</li>`).join("");
}
showStudents();
document.getElementById("filter").addEventListener("click", function() {
    let grade = document.getElementById("grade").value.trim().toUpperCase();
    let filteredStudents = students.filter(s => s.grade === grade);
    showStudents(filteredStudents);
});