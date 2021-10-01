const Employee = require ("../lib/employee");

class Intern extends Employee {
    constructor (name, employeeID, email, school) {
        super (name, employeeID, email);
        this.school = school;
    }
    getTitle(intern) {
        if (intern === "intern"){
            return "intern";
        }
    }
    getSchool(school) {
        if (this.school === school){
            return this.school;
        }
    }
}

module.exports = Intern;