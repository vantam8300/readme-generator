// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case  "Apache 2.0 License":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    
    case "GNU General Public License v3.0": 
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    case "MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case "BSD 2-Clause License":
      return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";

    case "BSD 3-Clause License":
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";

    case "Boost Software License 1.0":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";

    case "Creative Commons Zero v1.0 Universal":
      return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";

    case "Eclipse Public License 2.0":
      return "![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)";

    case "GNU Affero General Public License v3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    case "GNU General Public License v2.0":
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";

    case "Mozilla Public License 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

    case "The Unlicense":
      return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";

    default:
      return "";

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case  "Apache 2.0 License":
      return "https://opensource.org/licenses/Apache-2.0";

    case "GNU General Public License v3.0": 
      return "https://www.gnu.org/licenses/gpl-3.0";

    case "BSD 2-Clause License":
      return "https://opensource.org/licenses/BSD-2-Clause";

    case "BSD 3-Clause License":
      return "https://opensource.org/licenses/BSD-3-Clause";

    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";

    case "Creative Commons Zero v1.0 Universal":
      return "http://creativecommons.org/publicdomain/zero/1.0/";

    case "Eclipse Public License 2.0":
      return "https://opensource.org/licenses/EPL-2.0";

    case "GNU Affero General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";

    case "GNU General Public License v2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";

    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";

    case "The Unlicense":
      return "http://unlicense.org/";

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
