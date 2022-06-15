const Employee = require('./Employee');


// Intern is a sub-class of Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {

    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern
