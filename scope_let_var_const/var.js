let firstName = "ikran";
var lastName = "abdi";
lastName = "abdiqani";
const country = "somalia";
console.log(firstName, lastName, country);

//globol scope
var age = 25;

//local scope
function myName() {
  var name = "farhaan";
  console.log(name, age);
}
myName();
