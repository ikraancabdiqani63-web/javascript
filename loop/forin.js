let person = {
  firstName: "ikran",
  lastName: "abdiqani",
  age: 20,
  city: "muqdisho",
  country: "somalia",
  isMaried: false,
  friends: [
    "mohamad",
    "ali",
    "nastexa",
    "mumin",
    "maryan",
    "moha",
    "nuur",
    "falis",
  ],
};
// console.log(person);

for (let key in person) {
  console.log(key + " : " + person[key]);
}
