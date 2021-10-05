const Employee = require ("../lib/employee");

class TeamManager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
            return "TeamManager"; //overridden to return 'TeamManager'
        }

    getOfficeNumber(officeNumber) {
        if (this.officeNumber === officeNumber){
            return this.officeNumber;
        }
    }

}

module.exports = TeamManager; 