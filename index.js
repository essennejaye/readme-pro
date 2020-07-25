const inquirer = require("inquirer");
const generateFile = require('./utils/generateMarkdown.js');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the step-by-step requirements to install and run your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you select for yur project? . (Required)',
        choices: ['MIT', 'GNU GPLv3', 'Unlicense', 'None'],
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like to allow others to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter your contribution guidelines.',
        when: ({ confirmContribute }) => confirmContribute
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to provide examples of test data and instructions on how to run them?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter tests and examples on how to run them.',
        when: ({ confirmTests }) => confirmTests
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];
let mockData = {
    title: 'README Generator',
    description: 'The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub. This project produces a high-quality, professional README.md with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.',
    installation: 'The application should be invoked in a node.js command-line environment. However, this application will not be deployed, so it will need to be accessed via my github repository. The npm package Inquirer will need to be installed to run this application.',
    usage: 'You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project. A well- crafted one allows you to show off your work to other developers as well as potential employers. ',
    license: 'MIT',
    confirmContribute: false,
    // contribute: 'Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.',
    confirmTests: true,
    tests: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    github: 'essennejaye',
    email: 'sjeffers02@gmail.com'
}

// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', fileContent, err => {
            // if there's an error, reject  the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
             });
        });
    })
}

// function to initialize program
const init = () => {
    // inquirer.prompt(questions)
    //     .then((inquirerResponses) => {
    // generate markdown file and write readme file
    writeToFile(generateFile({ ...mockData }))
    // })
    // .catch(err => {
    //     console.log(err);
    // })
}
// function call to initialize program 
init();
