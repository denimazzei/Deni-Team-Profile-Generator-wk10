const Employee = require ("../lib/employee");

describe ("Employee", () => {
    //ARRANGE
    it ("should be an employee OBJECT with name, id, and email", () => {
        
        //ACT    
        const testEmployee = new Employee ();

        //ASSERT
        expect(typeof(testEmployee)).toBe("object");
    });

    //ARRANGE
    it ("should be able to set an employee name", () => {
        
        //ACT 
        const name = "Deni";
        const testEmployee = new Employee(name);
        
        //ASSERT
        expect(testEmployee.name).toBe(name);
    });

    //ARRANGE
    it("should be able to set a string as an id", () => {

        //ACT
        const id = 0829;
        const testEmployee = new Employee(id);

        //ASSERT
        expect(testEmployee.id).toBe(id);
    });

    //ARRANGE
    it("should be able to set an email", () => {

        //ACT
        const email = "test@gmail.com";
        const testEmployee = new Employee(email);

        //ASSERT
        expect(testEmployee.email).toBe(email);
    });

});

describe("getName", () => {

    //ARRANGE
    it("should get name via getName method", () => {

        //ACT
        const name = "Deni";
        const testEmployee = new Employee(name);

        //ASSERT
        expect(testEmployee.getName()).toBe(name);
    });
});

describe("getID", () => {

    //ARRANGE
    it("should get id via getID method", () => {

        //ACT
        const id = 0829;
        const testEmployee = new Employee(id);

        //ASSERT
        expect(testEmployee.getID()).toBe(id);
    });
});

describe("getEmail", () => {

    //ARRANGE
    it("should get email via getEmail method", () => {

         //ACT
         const email = "test@gmail.com";
         const testEmployee = new Employee(email);
 
         //ASSERT
         expect(testEmployee.getEmail).toBe(email);
     });
});

describe("getRole", () => {

    //ARRANGE
    it("should use getRole method to return Employee role type", () => {

        //ACT
        const role = "Employee";
        const testEmployee = new Employee("Deni", 0829, "test@gmail.com");

        //ASSERT
        expect(testEmployee.getRole()).toBe(role);
    });
});


