// Included packaged for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user to input to generate README file
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message:'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message:'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Please write a short description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message:'What kind of license will your project use?',
        choices: ['MIT', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        message:'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message:'What command will be used to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message:'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribute',
        message:'What does the user need to know about contributing to the repo?',
    }
];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file generated successfully!'));
}

//function to initialize app with the user's answers
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown({...data}));
            console.log('Generating README...');
            console.log(data);
        })
}

// Function call to initialize app
init();
