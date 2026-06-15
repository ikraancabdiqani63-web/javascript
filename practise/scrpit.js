let student = [
    {name: "Ikraam", age: 23, grade: 'A'},
    {name: "Fatima", age: 22, grade: 'B'},
    {name: "Ahmed", age: 20, grade: 'A'},
    {name: "Sara", age: 21, grade: 'C'},
    {name: "Omar", age: 23, grade: 'B'}  
]

// show students function
function showStudents() {
    let ul= document.getElementById("student-List");
    ul.innerHTML = student.map(s => `<li>${s.name} - Age: ${s.age}, Grade: ${s.grade}</li>`).join("");
}
showStudents();

// add showStudents
document.getElementById("add").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

if (name==="" || age === "" || grade === "") { return;
}
    student.push({name, age, grade});
    showStudents();

// clear input fields
document.getElementById("name").value = "";
document.getElementById("age").value = "";
document.getElementById("grade").value = "";
});

// show all
document.getElementById("show").addEventListener("click", function() {
    showStudents("students");
});
// filter by grade
document.getElementById("filter").addEventListener("click", function() {
    document.getElementById("student-List").innerHTML = "Showing grade A students";
    let grade = document.getElementById("grade").value;
    if (grade === "A") {
        student.filter(s => s.grade === "A")
        showStudents();
    }
    // clear
    document.getElementById("clear").addEventListener("click", function() {
        document.getElementById("student-List").innerHTML = "you cleared the list";
    });
});

let answer = [
    "yes",
    "no",
    "maybe",
    "hello",
    "world"
]
document.getElementById("btn").addEventListener("click", function() {
    let ramdonIndex= Math.floor(Math.random() *answer.length);
    let ramdomAnswer = answer[ramdonIndex];
    document.getElementById("answer").innerText = [ramdomAnswer];
});