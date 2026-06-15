let students = [
  { names: "Alice", grades: 85, ages: 20 },
  { names: "Bob", grades: 92, ages: 22 },
  { names: "Charlie", grades: 78, ages: 19 },
];
// console.log(students[0].names);

for (let i = 0; i < students.length; i++) {
  if (students[i].ages === 20) {
    console.log(
      students[i].names +
        ", who is " +
        students[i].ages +
        " years old, has a grade of " +
        students[i].grades,
    );
  }
}

// for (let i = 0; i < students.length; i++) {
//     // console.log(students[i].names + " has a grade of " + students[i].grades );
//     if (students[i].grades >= 90) {
//         console.log(students[i].names + " is an excellent student with a grade of " + students[i].grades);
//     }
// }
