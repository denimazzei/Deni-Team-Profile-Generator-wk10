const fs = require('fs');
const inquirer = require('inquirer');

//generate HTML file

//initialize application
//enter managers name, employee ID, email address, and office number
    //will need library with team manager options
//presented with menu to add: engineer or intern
//select engineer option, , enter engineer name, ID, and github
    //will need library for engineer options
//select intern option, enter intern name, ID, email, school
    //will need library for intern options

    //will need a general employee library class for other fields to pull from
    //index.js will need to require all 4 of these classes

//taken back to menu after selection
//when finished, HTML is generated

inquirer
    .prompt([
        {
            type: "list",
            choices: ["Employee", "TeamManager", "Engineer", "Intern"],
            message: "Which job for your team are you creating?",
            name: "role",
        },
        {
            type: "input",
            message: "Enter Name",
            name: "name",
        },
    ])
    .then((response) => {
        var myTeam = `<!DOCTYPE html>
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
                        <div class="is-half">
                            <div class="card box">
                                <h3 class = "card-header-title">Deni Mazzei</h3>
                                <ul class="card list-group">
                                    <li class="">Role: </li>
                                    <li class="">ID: </li>
                                    <li class="">Email: </li>
                                    <li class="">Office Number: </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class ="container">
                    <div class="column">
                        <div class="is-half">
                            <div class="card box">
                                <h3 class = "card-header-title">John Smith</h3>
                                <ul class="card list-group">
                                    <li class="">Role: </li>
                                    <li class="">ID: </li>
                                    <li class="">Email: </li>
                                    <li class="">GitHub: </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class ="container">
                    <div class="column">
                        <div class="is-half">
                            <div class="card box">
                                <h3 class = "card-header-title">Jane Smith</h3>
                                <ul class="card list-group">
                                    <li class="">Role: </li>
                                    <li class="">ID: </li>
                                    <li class="">Email: </li>
                                    <li class="">School: </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </body>
        </html>`;
    });