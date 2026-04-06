var age = 12; // you have to change age number if you want to test the code with different ages
switch (true) {
  case age >= 22:
    console.log("you are an adult");
    break;
  case age >= 16:
    console.log("you are not an adult");
    break;
  case age >= 13 && age <= 19:
    console.log("you are a teenager");
    break;
  default:
    console.log("you are a child");
}
