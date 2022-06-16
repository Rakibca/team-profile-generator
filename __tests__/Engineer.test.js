const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  const engineerPerson = new Engineer('Rakibul', 123, 'rakib.islam@gmail.com', 'rakibca');

  test("defines getGithub()", () => {
    expect(engineerPerson.github).toEqual(expect.any(String));
  });
});


describe("Engineer", () => {
  const engineerPerson = new Engineer('Rakibul', 123, 'rakib.islam@gmail.com', 'rakibca');

  test("defines getRole()", () => {
    expect(engineerPerson.getRole()).toEqual("Engineer");
  });
});
