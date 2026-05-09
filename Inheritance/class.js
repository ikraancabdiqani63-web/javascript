class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Employe extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

class Nurse extends Employe {
  constructor(name, age, job, time) {
    super(name, age, job);
    this.time = time;
  }

  fullinfo() {
    return `name: ${this.name}, age: ${this.age}, job: ${this.job}, time: ${this.time}, `;
  }
}
let Nurse1 = new Nurse("Ikraan", "23", "Nurse", "Nightshift");
console.log(Nurse1.fullinfo());
