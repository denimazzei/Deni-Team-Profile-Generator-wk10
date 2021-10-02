class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(name) {
        if (this.name === name){
            return this.name;
        }
    }
    getID(id) {
        if (this.id === id){
            return this.id;
        }
    }
    getEmail(email) {
        if (this.email === email){
            return this.email;
        }
    }
    //identify employee type with role title
    getRole(employee) {
        if (employee === "employee"){
            return "employee";
        }
    }
}

module.exports = Employee;