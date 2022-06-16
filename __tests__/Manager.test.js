const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  const managerPerson = new Manager('Rakibul', 123, 'rakib.islam@gmail.com', 48);

  test("defines officeNumber", () => {
    expect(managerPerson.officeNumber).toEqual(expect.any(Number));
  });
});


describe("Manager", () => {
  const managerPerson = new Manager('Rakibul', 123, 'rakib.islam@gmail.com', 48);

  test("defines getRole()", () => {
    expect(managerPerson.getRole()).toEqual("Manager");
  });
});
