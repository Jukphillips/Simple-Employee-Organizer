const fs = require('fs')


function writetoFile(data){
 fs.writeFile("./dist/index.html", data, (err) => {
    err ? console.log(err) : console.log("Complete! Please see index.html");
  })
}

function topRender(){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple's Team Generator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="Header">Your Team's Profie!</h1>

<div id="teamMembers">`
}

function renderfile(teamId, teamMembers) {

    let page = topRender()

    for(var i = 0; i < teamId.length; i++ ) {
        switch (teamId[i]) {
           case "Intern":
             response = internRender(teamMembers[i]);
             break;
            case "Manager":
            response = managerRender(teamMembers[i]);
            break;
            case "Engineer":
                response = engineerRender(teamMembers[i])
        }
        page += response


    }

    let finalProduct = page += bottomRender()
    writetoFile(finalProduct)

}

function internRender(data){
    return `    <div class="Cards">
            <div id="internTop">
                <h2 class="memberName"> ${data.name} </h2>
                <div class="role">
                    <img src="https://img.icons8.com/ios/50/000000/student-male--v1.png/">
                    <h4> Intern </h4>
                </div>
            </div>
            <div class="memberinfo">
                <ul class="list-group">
                    <li class="list-group-item disabled">id: ${data.id}</li>
                    <li class="list-group-item">Email:<a href="mailto:${data.email}" target="no_blank"> ${data.email} </a></li>
                    <li class="list-group-item">School: ${data.school} </li>
                </ul>
            </div>
    </div>`

}

function managerRender(data){
    return `    <div class="Cards">
        <div id="managerTop">
                <h2 class="memberName"> ${data.name}</h2>
        <div class="role">
                <img id="icon" src="https://img.icons8.com/material-sharp/50/000000/manager.png">
                <h4 id="managerRole"> Manager </h4>
            </div>
            </div>
            <div class="memberinfo">
                <ul class="list-group">
                    <li class="list-group-item disabled">id: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}" target="no_blank"> ${data.email}</a></li>
                    <li class="list-group-item">Room Number: ${data.officeNumber} </li>
                </ul>
    </div>
    </div>`;
}
 
function engineerRender(data){
    return `    <div class="Cards">
        <div id="EngineerTop">
            <h2 class="memberName"> ${data.name} </h2>
        <div class="role">
            <img id="icon" src="https://img.icons8.com/ios/50/000000/engineer.png/">
            <h4 id="EngineerRole"> Engineer </h4>
        </div>
        </div>
        <div class="memberinfo">
            <ul class="list-group">
                <li class="list-group-item disabled">id: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${data.gitHub}" target="no_blank"> ${data.github} </a> </li>
            </ul>
        </div>
    </div>`;
}


function bottomRender() {
    return `    <script src="../index.js"></script>
</body>
</html>`;
}

module.exports = renderfile