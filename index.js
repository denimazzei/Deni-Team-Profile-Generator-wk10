const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require("./lib/engineer");
const TeamManager = require("./lib/teamManager");
const Intern = require("./lib/intern");

const employees = [];


//function to initialize app and push new team members to roster
function init() {
    startHTML();
    addToRoster();
};

function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>My Team Roster</title>
    </head>
    <body>
        <section class="hero is-primary">
            <div class ="hero-body">
                <h1 class="title">My Team Profile</h1>
            </div>
        </section>    
            <div class ="container">
                <div class="column">
                    <div class="is-half">`;

    fs.writeFile("./dist/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("complete");
};


//function to add input to team member roster
function addToRoster() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter Name",
                name: "name",
            },
            {
                type: "list",
                choices: ["Employee", "TeamManager", "Engineer", "Intern"],
                message: "Which job for your team are you creating?",
                name: "role",
            },
            {
                type: "input",
                message: "Enter team member's ID",
                name: "id",
            },
            {
                type: "input",
                message: "Enter team member's email",
                name: "email",
            },

        ])
        //function to update role and add, github, school, or office number accordingly to employee type.
    .then(function({name, role, id, email}) {
        let roleName = "";
        if (role === "Engineer") {
            roleName = "Github URL";
        }else if (role ==="Intern") {
            roleName = "School Name";
        }else {
            roleName = "office phone number";
        }
        inquirer
            .prompt([
            {
                type: "input",
                message: `Enter ${roleName}`,
                name: "roleName",
            },
            {
                type: "list",
                message: "Add more to the team?",
                choices: [
                    "yes",
                    "no",
                ],
                name: "addMore",
            }])

            //function to add prompts based on member types added
        .then(function({roleName, addMore}) {
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleName);
            }else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, roleName);
            }else {
                newEmployee = new TeamManager(name, id, email, roleName);
            }
            //use push to add more employees to team array on HTML
            employees.push(newEmployee);
            addHTML(newEmployee)
            .then(function() {
                if(addMore === "yes") {
                    addHTML();
                }else {
                    completeHtml();
                }
            });
        });
    });
};
 

//need to close out the HTML doc with closing divs, body, html brackets. 
function completeHtml () {
    const html = `</div>
    </div>
    </div>
    </body>
    </html>`;
    fs.writeFile("./dist/index.html", html, function(err) {
        if(err) {
            console.log(err);
        };
    });
    console.log("complete")
}

init();