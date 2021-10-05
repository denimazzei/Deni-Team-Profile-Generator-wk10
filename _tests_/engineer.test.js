const Engineer = require("../lib/engineer");

describe ("Engineer object", () => {
    //ARRANGE
    it ("should create an Engineer OBJECT with name, id, email, github", () => {
        
        //ACT    
        const testEngineer = new Engineer ("Deni", 829, "test@gmail.com", "denimazzei");

        //ASSERT
        expect(testEngineer).toEqual({
            name: "Deni",
            id: 829,
            email: "test@gmail.com",
            github: "denimazzei",
        });
    });

    //ARRANGE
    it("should use getRole method to override role to Engineer", () => {
        
        //ACT
        const testEngineer = new Engineer ("Deni", 829, "test@gmail.com", "denimazzei");

        //ASSERT
        expect(testEngineer.getRole()).toEqual("Engineer");
    });
});