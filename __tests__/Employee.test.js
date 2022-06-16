const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  const employeePerson = new Employee('Rakibul', 123, 'rakib.islam@gmail.com');

  test("defines getName()", () => {
    expect(employeePerson.getName()).toEqual(expect.any(String));
  });
});


describe("Employee", () => {
  const employeePerson = new Employee('Rakibul', 123, 'rakib.islam@gmail.com');

  test("defines getId()", () => {
    expect(employeePerson.getId()).toEqual(expect.any(Number));
  });
});


describe("Employee", () => {
  const employeePerson = new Employee('Rakibul', 123, 'rakib.islam@gmail.com');

  test("defines getEmail()", () => {
    expect(employeePerson.getEmail()).toEqual(expect.any(String));
  });
});


describe("Employee", () => {
  const employeePerson = new Employee('Rakibul', 123, 'rakib.islam@gmail.com');

  test("defines getRole()", () => {
    expect(employeePerson.getRole()).toEqual("Employee");
  });
});
