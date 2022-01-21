const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');

const teamArray = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managersName',
            message: `Please enter the Team Manager's name.`,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("You need to enter the Team Managers name to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter the Employee Id for the Manager',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("You need to enter the managers employee ID to continue");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the managers email address',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("You need to enter the managers enail address to continue!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'Please enter the managers office number',
            validate: mangerOfficeInput => {
                if (mangerOfficeInput) {
                    return true;
                } else {
                    console.log("Please enter the managers office number to continue!")
                    return false
                }
            }
        },
]).then(managerData => {
    const manager = new Manager(managerData.managersName, managerData.managerId, managerData.managerEmail, managerData.managerOffice)
    console.log(manager);
    teamArray.push(manager)
    pickEmployeePrompt();
})
}

const pickEmployeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userOptions',
            message: 'Please choose a option!',
            choices: ['Add enginner', 'Add Intern', 'Exit']

        }
    ]).then(check => {
        if (check.userOptions === 'Add enginner') {
            addEnginnerPrompt()
        } else if (check.userOptions === 'Add Intern') {
            addInternPrompt()
        } else if (check.userOptions === 'Exit') {
            generateHTML();
        }
    })
}

const addEnginnerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter the name of the Engineer',
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("You need to enter the Engineer's name to continue!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Please enter the ID of the Engineer',
            validate : engineerIdInput => {
                if (engineerIdInput) {
                    return true
                } else {
                    console.log('You need to enter the Engineers ID to continue')
                    return false
                }
            }
        },
        {
            type: 'email',
            name: 'engineerEmail',
            message: 'Please enter the email address of the Engineer',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true
                } else {
                    console.log('You need to enter the email address of the Engineer to continue')
                    return false
                }
            }
        }, 
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter the Github username for the engineer',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true
                } else {
                    console.log('You need to enter the Github username for the Engineer to continue')
                    return false;
                }
            }
        },
    ]).then(engineerData => {
        const engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub)
        teamArray.push(engineer)
        console.log(engineer)
    })
}

const addInternPrompt = () => {
    return inquirer.prompt([
        {

        }
    ])
}

managerPrompt()