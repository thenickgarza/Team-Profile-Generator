const inquirer = require('inquirer');

const promptUser = () => {
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
        {

        }
    ])
}