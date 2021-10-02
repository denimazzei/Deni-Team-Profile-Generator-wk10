const Employee = require ("../lib/employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getRole(engineer) {
        if (engineer === "engineer"){
            return "engineer"; //overridden to return 'Engineer'
        }
    }
    getGithub(github) {
        if (this.github === github){
            return this.github;
        }
    }
}

module.exports = Engineer;