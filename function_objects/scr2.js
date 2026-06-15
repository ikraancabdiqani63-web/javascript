function grades(score) {
  if (score === 100) {
    return " Excellent student A+";
  } else {
    return "keep trying you got a B";
  }
}
console.log(grades(100));
console.log(grades(80));
