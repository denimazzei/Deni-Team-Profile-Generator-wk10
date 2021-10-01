const Employee = require ("../lib/employee");

class TeamManager extends Employee {
    constructor (name, employeeID, email, officeNumber) {
        super (name, employeeID, email);
        this.officeNumber = officeNumber;
    }
    getTitle(teamManager) {
        if (teamManager === "teamManager"){
            return "teamManager";
        }
    }
    getOfficeNumber(officeNumber) {
        if (this.officeNumber === officeNumber){
            return this.officeNumber;
        }
    }

}

module.exports = teamManager; 