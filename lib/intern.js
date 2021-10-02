const Employee = require ("../lib/employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getTitle(intern) {
        if (intern === "intern"){
            return "intern"; //overridden to return 'Intern'
        }
    }
    getSchool(school) {
        if (this.school === school){
            return this.school;
        }
    }
}

module.exports = Intern;