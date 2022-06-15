const Employee = require('./Employee');


// Manager is a sub-class of Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {

    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager
