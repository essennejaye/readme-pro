const inquirer = require('inquirer');
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
        choices: ['MIT', 'GPLv3', 'Apache2.0', 'LGPLv3', 'BSD'],
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

// function to write README file
const writeToFile = fileContent => {
    fs.writeFile('README.md', fileContent, err => {
        // if there's an error, reject  the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
    })
}

// function to initialize program
const init = () => {
    // get user response to questions
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            // generate markdown file and write readme file
            writeToFile(generateFile({ ...inquirerResponses }))
        })
        .catch(err => {
            console.log(err);
        })
}
// function call to initialize program 
init();
