const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  const internPerson = new Intern('Rakibul', 123, 'rakib.islam@gmail.com', 'UofT');

  test("defines getSchool()", () => {
    expect(internPerson.getSchool()).toEqual(expect.any(String));
  });
});


describe("Intern", () => {
  const internPerson = new Intern('Rakibul', 123, 'rakib.islam@gmail.com', 'UofT');

  test("defines getRole()", () => {
    expect(internPerson.getRole()).toEqual("Intern");
  });
});
