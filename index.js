// packages needed for this application
var inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
// import and use the generateMarkdown.js module
const generateHTML = require('./src/generateindex.js');

const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

arrayEmployees = [];

// Function call to initialize app
//init();


// Creates a function to initialize app

// Creates an array of questions for user input and to validate the answers
const managerPrompt = () => {
  return inquirer.prompt([{
      type: "input",
      name: "nameManager",
      message: "What is the name of the manager?"
    },
    {
      type: "input",
      name: "idManager",
      message: "What is the employee ID of the manager?"
    },
    {
      type: "input",
      name: "emailManager",
      message: "What is the email address of the manager?"
    },
    {
      type: "input",
      name: "officeNumberManager",
      message: "What is the office phone number of the manager?"
    },
  ])
}

const choicePrompt = () => {
  return inquirer.prompt([{
      type: "expand",
      name: "employeeType",
      message: "which employee type would you like to add?",
      choices: [{
        key: 'A',
        value: 'Engineer'
      }, {
        key: 'B',
        value: 'Intern'
      }, {
        key: 'C',
        value: 'No_more_employees'
      }],
    }, ])

    .then(answers => {
      //console.info('hurray');
      //console.info(answers.employeeType);
      if (answers.employeeType == 'Engineer') {
        engineerPrompt()
      } else if (answers.employeeType == 'Intern') {
        internPrompt()
      } else {
        writeHTML()
      }
    });
}


function engineerPrompt() {
  return inquirer.prompt([{
      type: "input",
      name: "nameEngineer",
      message: "What is the name of the engineer?"
    },
    {
      type: "input",
      name: "idEngineer",
      message: "What is the employee ID of the engineer?"
    },
    {
      type: "input",
      name: "emailEngineer",
      message: "What is the email address of the engineer?"
    },
    {
      type: "input",
      name: "githubEngineer",
      message: "What is the github username of the engineer?"
    },
  ]).then(answers => {
    const engineerPerson = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubEngineer);
    arrayEmployees.push(engineerPerson);
    choicePrompt();
  });
}


function internPrompt() {
  return inquirer.prompt([{
      type: "input",
      name: "nameIntern",
      message: "What is the name of the intern?"
    },
    {
      type: "input",
      name: "idIntern",
      message: "What is the employee ID of the intern?"
    },
    {
      type: "input",
      name: "emailIntern",
      message: "What is the email address of the intern?"
    },
    {
      type: "input",
      name: "schoolIntern",
      message: "Which school did the intern go to?"
    },
  ]).then(answers => {
    const internPerson = new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern);
    arrayEmployees.push(internPerson);
    choicePrompt();
  });
}



function writeHTML() {
  console.info("We made it here");
}

managerPrompt()
  .then(choicePrompt)
  //   .then(engineerPrompt)
  //   .then(internPrompt)
  //  .then(teamArray => {
  //    return generateHTML(teamArray);
  //  })
  //  .then(pageHTML => {
  //    return writeFile(pageHTML);
  //  })
  .catch(err => {
    console.log(err);
  });
