// Including inquirer npm
const inquirer = require('inquirer')
// Including file system 
const Employee = require('./classes/employee')
// Including Engineer.js into the file
const Engineer = require('./classes/engineer')
// Including Intern.js into the file
const Intern = require('./classes/intern')
// Including Manager into the file
const Manager = require('./classes/manager')
// Including teamMeber div in html
// const memberDiv = document.getElementId('teamMembers')
const renderfile = require('./dist/render')

// creates object, which can hold teammeber name 
const teamMembers = []
// creates object, which can hold team member id's
const teamId = []

//Function that begins app.
// Manager is called, and prompts the user to begin entering in their team amangers info. Once that's coomplete the information is 
// passed into the manager constructor function top be sorted and than pushed into the teamMebers empty array
// then calls memeberaddition() function
function manager()  {
    console.log('Please enter in your teams information below:')
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
        name: 'officeManager'
    }
]).then(function(response) {
    const manager = new Manager(response.nameManager, response.idManager, response.emailManager, response.officeManager)
    teamMembers.push(manager)
    teamId.push("Manager")
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
        if(data.teamChoice === "Intern") {
         intern()
        } else if(data.teamChoice === "Engineer") {
          engineer()
        } else {
            renderfile(teamId, teamMembers)
        }
    })

}

function intern() {
        inquirer.prompt([{
        type: 'input',
        message: "What is the intern's name?",
        name: "nameIntern"
    },
    {
        type: 'input',
        message: "What is the intern's id?",
        name: "idIntern"
    },
    {
        type: 'input',
        message: "What is the intern's Email?",
        name: 'emailIntern'
    },
    {
        type: 'input',
        message: "Where does the intern go to school?",
        name: 'internSchool'
    }
]).then(function(response) {
    const intern = new Intern(response.nameIntern, response.idIntern, response.emailIntern, response.internSchool) 
    teamMembers.push(intern)
    teamId.push("Intern")
    teamChoice()
})
}

function engineer() {
        inquirer.prompt([{
        type: 'input',
        message: "What is the engineer's name?",
        name: "nameEngineer"
    },
    {
        type: 'input',
        message: "What is the engineer's id?",
        name: "idEngineer"
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'emailEngineer'
    },
    {
        type: 'input',
        message: "What is the Engineer's's github username?",
        name: 'github'
    }
]).then(function(response) {
    const engineer = new Engineer(response.nameEngineer, response.idEngineer, response.emailEngineer, response.github)
    teamMembers.push(engineer)
    teamId.push("Engineer")
    teamChoice()
})}


    
    



manager()