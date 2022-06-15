// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![${license} license](https://img.shields.io/badge/license-${license}-blue)](${renderLicenseLink(license)})`
  } else {
    return ``;
  }
}


// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license === "Apache_2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else if (license === "BSD") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else {
    return ``;
  }
}


// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${license} license was used for this project`
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
<br/>
<br/>

## Project Title:
${data.title}
<br/>
<br/>

## Description:
${data.description}
<br/>
<br/>

## Table of Contents:
- [Installation of Inquirer package](#installation)
- [Usage](#usage)
- [License](#license)
- [How to contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
<br/>
<br/>

## Installation:
${data.installation}

![alt text](screenshot.png)
<br/>
<br/>

## Usage:
${data.usage}
<br/>
<br/>

## License:
${renderLicenseSection(data.license)}
<br/>
<br/>

## Contribute:
${data.contribute}
<br/>
<br/>

## Tests:
${data.tests}
<br/>
<br/>

## Questions:
(My Contact info):
<br/>
GitHub username: ${data.username}

[GitHub Profile](https://github.com/Rakibca)

Email address: ${data.emailaddress}
<br/>
<br/>

## Credits:
- [W3Schools](https://www.w3schools.com "W3Schools")
- [MDN Web Docs](https://developer.mozilla.org "MDN Web Docs")
- [Google](https://www.google.com "Google's Homepage")
- [Stack Overflow](https://stackoverflow.com "Stack Overflow website")
- [Shields.io](https://shields.io/)

`;

}

module.exports = generateMarkdown;
