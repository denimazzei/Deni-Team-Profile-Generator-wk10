const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require("./lib/engineer");
const TeamManager = require("./lib/teamManager");
const Intern = require("./lib/intern");

const employees = [];

//need function to initialize app and push new team members to roster
function init() {
    startHTML();
    addToRoster();
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
        //function to update role and add, github, school, or office number accordingly.
    .then(function({name, role, id, email}) {
        const roleName = "";
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
            }]);
            //function to add prompts based on member types added
        .then(function({roleName, addMore}) {
            const newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleName);
            }else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, roleName);
            }else {
                newEmployee = new TeamManager(name, id, email, roleName);
            }
            //use push function to add more employees to team array on HTML
            employees.push(newEmployee);
            addHTML(newEmployee)
            .then(function() {
                if(addMore === "yes") {
                    addEmployee();
                }else {
                    finishHtml();
                }
            });
        });
    });
};


//callback function to create HTML

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
    console.log("begin");
};

//html function to append new employee types to html doc using a promise object
function addHTML(employee) {
    return new Promise(function(resolve,reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getID();
        const email = employee.getEmail();
        let data = "";

        if (role === "Engineer") {
            const github = employee.getGithub();
            data = `<div class="card box">
            <h3 class = "card-header-title">${name}</h3>
            <ul class="card list-group">
                <li class="">Role: ${role}</li>
                <li class="">ID: ${id}</li>
                <li class="">Email: ${email}</li>
                <li class="">GitHub Username: ${github}</li>
            </ul>
        </div>`;
        }else if (role === "Intern") {
            const schoolName = employee.getSchool();
            data = `<div class="card box">
            <h3 class = "card-header-title">${name}</h3>
            <ul class="card list-group">
                <li class="">Role: ${role}</li>
                <li class="">ID: ${id}</li>
                <li class="">Email: ${email}</li>
                <li class="">School Name: ${schoolName}</li>
            </ul>
        </div>`;
        }else {
            const officeNumber = employee.getOfficeNumber();
            data = `<div class="card box">
            <h3 class = "card-header-title">${name}</h3>
            <ul class="card list-group">
                <li class="">Role: ${role}</li>
                <li class="">ID: ${id}</li>
                <li class="">Email: ${email}</li>
                <li class="">Office Number: ${officeNumber}</li>
            </ul>
        </div>`;
        }
        console.log("add new employee");
        fs.appendFile("./dist/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

init();