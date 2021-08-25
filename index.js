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
    const manager = new Manager(response.nameManager, response.idManager, response.emailManager, response.officeManager)
    teamMembers.push(manager)
    teamChoice()
})
}

function teamChoice() {

    inquirer.prompt([{
        type: 'list',
        name: 'teamChoice',
        message: "What team member would you like to add to the team?",
        choices: [
            "Intern",
            "Engineer",
            "I don't want to add another team member"
        ]

    }]).then(function(data) {
        if(data.choices === "Intern") {
         intern()
        } else if(data.choices === "Engineer") {
          engineer()
        } else {
            renderTeam()
        }
    })

}

function intern() {

}

function engineer() {

}

function renderTeam() {
    
}

manager()