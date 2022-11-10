// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case  "Apache 2.0 License":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    case "GNU General Public License v3.0": 
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case  "Apache 2.0 License":
      return "https://opensource.org/licenses/Apache-2.0"
    case "GNU General Public License v3.0": 
      return "https://www.gnu.org/licenses/gpl-3.0"
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is license under ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})
## Description 
${data.description}
## Instructions
${data.instructions}
## Usage Information
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contribution Guidelines
${data.contribution}
## Test Instructions
${data.test}
## Question
If you have any additional questions about this project, Feel free to reach me at [${data.email}](${data.email}).
For more of my project, please visit [https://github.com/${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
