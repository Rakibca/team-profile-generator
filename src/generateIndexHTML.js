function generateIndexHTML(team) {
  const arrayCards = [];

  // This section filters the array elements related to only Manager and pushes it into a new array
  // called arrayCards. The map functions then generates the HTML for only the managaer card by
  // calling generateMANAGER function based on the contents of the new array arrayCards.
  arrayCards.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateMANAGER(manager))
  );
  arrayCards.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateENGINEER(engineer))
    .join("")
  );
  arrayCards.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateINTERN(intern))
    .join("")
  );
  return arrayCards.join("");


  function generateMANAGER(manager) {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${manager.getName()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.getRole()}</li>
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
       `;
  };


  function generateENGINEER(engineer) {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${engineer.getName()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.getRole()}</li>
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</li>
      </ul>
    </div>
       `;
  };


  function generateINTERN(intern) {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${intern.getName()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.getRole()}</li>
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
       `;
  };
}


module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">

  </head>
  <body>

    <div class="heading">
      <h1>My Team</h1>
    </div>

    <div>
    ${generateIndexHTML(team)}
    </div>

  </body>
  </html>
`;
};
