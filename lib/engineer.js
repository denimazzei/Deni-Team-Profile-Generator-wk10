const Employee = require ("../lib/employee");

class Engineer extends Employee {
    constructor (name, employeeID, email, github) {
        super (name, employeeID, email);
        this.github = github;
    }
    getTitle(engineer) {
        if (engineer === "engineer"){
            return "engineer";
        }
    }
    getGithub(github) {
        if (this.github === github){
            return this.github;
        }
    }
}

module.exports = Engineer;