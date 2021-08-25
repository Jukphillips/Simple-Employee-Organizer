// Including inquirer npm
const inquirer = require('inquirer')
// Including file system 
const fs = require('fs')
// Including Employee.js into the file
const Employee = require('./classes/employee')
// Including Engineer.js into the file
const Engineer = require('./classes/engineer')
// Including Intern.js into the file
const Intern = require('./classes/intern')
// Including Manager into the file
const Manager = require('./classes/manager')

// creates object, which can hold teammeber name 
const teamMembers = []
// creates object, which can hold team member id's
const teamId = []

//Function that begins app.
// Manager is called, and prompts the user to begin entering in their team amangers info. Once that's coomplete the information is 
// passed into the manager constructor function top be sorted and than pushed into the teamMebers empty array
// then calls memeberaddition() function
function manager()  {
    console.log('Please enter in your team information below:')
    inquirer.prompt([{
        type: 'input',
        message: "What is the team manager's name?",
        name: "nameManager"
    },
    {
        type: 'input',
        message: "What is the team Manager's id?",
        name: "idManager"
    },
    {
        type: 'input',
        message: "What is the team Manager's Email?",
        name: 'emailManager'
    },
    {
        type: 'input',
        message: "What is the team Manager's Office Number",
        name: 'officceManager'
    }
]).then(function(response) {
    const manager = new Manager(data.nameManager, data.idManager, data.emailManager, data.officeManager)
    teamMembers.push(manager)
} )



}


manager()