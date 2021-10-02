const Employee = require ("../lib/employee");

class TeamManager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(teamManager) {
        if (teamManager === "teamManager"){
            return "teamManager"; //overridden to return 'teamManager'
        }
    }
    getOfficeNumber(officeNumber) {
        if (this.officeNumber === officeNumber){
            return this.officeNumber;
        }
    }

}

module.exports = teamManager; 