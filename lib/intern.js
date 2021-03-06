const Employee = require ("../lib/employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
            return "Intern"; //overridden to return 'Intern'
        }
    
    getSchool() {
            return this.school;
        }

}

module.exports = Intern;