const inquirer = require('inquirer');
const confirm = require('inquirer-confirm');
const jest = require('jest');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const promptManager = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'nameManager',
      message: 'What is the name of the Manager?',
    },
    {
      type: 'input',
      name: 'employeeIDManager',
      message: 'What is the employee ID of the Manager?',
    },
    {
      type: 'input',
      name: 'emailAddressManager',
      message: 'What is the email address of the Manager?',
    },
    {
      type: 'input',
      name: 'officeNumberManager',
      message: 'What is the office number of the Manager?',
    },
  ]);
};

const promptThree = () => {
  return inquirer.prompt([{
      type: 'checkbox',
      name: 'reptiles',
      message: 'Which do you love?',
      choices: [
        'Employee', 'Intern', 'All Done',
      ],
    }, ])

    .then(answers => {
      if (answers.reptiles == 'Employee') {
        console.info('Answer:', answers.reptiles);
      } else {
        console.info("Goodluck");
      }
    });
};

const promptEngineer = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'nameEngineer',
      message: 'What is the name of the Engineer?',
    },
    {
      type: 'input',
      name: 'employeeIDEngineer',
      message: 'What is the employee ID of the Engineer?',
    },
    {
      type: 'input',
      name: 'emailAddressEngineer',
      message: 'What is the email address of the Engineer?',
    },
    {
      type: 'input',
      name: 'githubUsernameEngineer',
      message: 'What is the GitHub username of the Engineer?',
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'nameIntern',
      message: 'What is the name of the Intern?',
    },
    {
      type: 'input',
      name: 'employeeIDIntern',
      message: 'What is the employee ID of the Intern?',
    },
    {
      type: 'input',
      name: 'emailAddressIntern',
      message: 'What is the email address of the Intern?',
    },
    {
      type: 'input',
      name: 'schoolIntern',
      message: 'What is the school of the Intern?',
    },
  ]);
};

const generateHTML = ({
    nameEngineer,
    employeeIDManager,
    githubUsernameEngineer,
    officeNumberManager
  }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${nameEngineer}</h1>
    <p class="lead">I am from ${employeeIDManager}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${githubUsernameEngineer}</li>
      <li class="list-group-item">LinkedIn: ${officeNumberManager}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const init = () => {
  //promptManager()
  //.then(promptEngineer)
  promptThree()
    // Use writeFileSync method to use promises instead of a callback function
    //.then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    //.then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
