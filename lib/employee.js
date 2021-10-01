class Employee {
    constructor (name, employeeID, email) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
    getName(name) {
        if (this.name === name){
            return this.name;
        }
    }
    getEmployeeID(employeeID) {
        if (this.employeeID === employeeID){
            return this.employeeID;
        }
    }
    getEmail(email) {
        if (this.email === email){
            return this.email;
        }
    }
    //identify employee type with role title
    getTitle(employee) {
        if (employee === "employee"){
            return "employee";
        }
    }
}

module.exports = Employee;