// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your title: "
    },
    {
        type: "input",
        name: "description",
        message: "Please enter description: "
    },
    {
        type: "input",
        name: "instructions",
        message: "Please enter instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines: "
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions: "
    },
    {
        type: "list",
        name: "license",
        message: "Please choose the license: ",
        choices: ["Apache 2.0 License",
         "GNU General Public License v3.0",
         "MIT License",
         "BSD 2-Clause License",
         "BSD 3-Clause License",
         "Boost Software License 1.0",
         "Creative Commons Zero v1.0 Universal",
         "Eclipse Public License 2.0",
         "GNU Affero General Public License v3.0",
         "GNU General Public License v2.0",
         "GNU Lesser General Public License v2.1",
         "Mozilla Public License 2.0",
         "The Unlicense",
        ]
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markDown(data), (err) => {
        err ? console.log(err) : console.log("success")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        writeToFile("README.md", answer)
    })
}

// Function call to initialize app
init();
