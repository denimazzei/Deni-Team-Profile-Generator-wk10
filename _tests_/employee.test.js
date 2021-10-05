const Employee = require ("../lib/employee");

describe ("Employee", () => {
    //ARRANGE
    it ("should be an employee OBJECT with name, id, and email", () => {
        
        //ACT    
        const testEmployee = new Employee ("Deni", 829, "test@gmail.com");

        //ASSERT
        expect(testEmployee).toEqual({
            name: "Deni",
            id: 829,
            email: "test@gmail.com",
        });
    });
});

describe ("name property", () => {
    //ARRANGE
    it("should return name of employee", () => {

        //ACT
        const name = "Deni";
        const testEmployee = new Employee(name);

        //ASSERT
        expect(testEmployee.name).toEqual(name);
    });
});

describe ("id property", () => {
    //ARRANGE
    it("should return id of employee", () => {

        //ACT
        const id = 829;
        const testEmployee = new Employee ("Deni", id);

        //ASSERT
        expect(testEmployee.id).toEqual(id);
    });
});

describe ("email property", () => {
    //ARRANGE
    it("should return email of employee", () => {

        //ACT
        const email = "test@gmail.com";
        const testEmployee = new Employee ("Deni", 829, email);

        //ASSERT
        expect(testEmployee.email).toEqual(email);
    });
});

describe ("getName method", () => {
    //ARRANGE
    it("should return name via getName method", () => {

        //ACT
        const testName = "Deni";
        const testEmployee = new Employee (testName);

        //ASSERT
        expect(testEmployee.getName()).toEqual(testName);
    });
});

describe ("getID method", () => {
    //ARRANGE
    it("should return ID via getID method", () => {

        //ACT
        const testID = "829";
        const testEmployee = new Employee ("Deni", testID);

        //ASSERT
        expect(testEmployee.getID()).toEqual(testID);
    });
});

describe ("getEmail method", () => {
    //ARRANGE
    it("should return email address via getEmail method", () => {

        //ACT
        const testEmail = "test@gmail.com";
        const testEmployee = new Employee ("Deni", 829, "test@gmail.com");

        //ASSERT
        expect(testEmployee.getEmail()).toEqual(testEmail);
    });
});

describe ("getRole method", () => {
    //ARRANGE
    it("should return role title of employee via getRole method", () => {

        //ACT
        const testEmployee = new Employee ("Deni", 829, "test@gmail.com");
        const testRole = testEmployee.getRole("Employee");

        //ASSERT
        expect(testRole).toEqual("Employee");
    });
});


