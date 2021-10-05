const Intern = require("../lib/intern");

describe ("Intern object", () => {
    //ARRANGE
    it ("should create an Intern OBJECT with name, id, email, school name", () => {
        
        //ACT    
        const testIntern = new Intern ("Deni", 829, "test@gmail.com", "ABC");

        //ASSERT
        expect(testIntern).toEqual({
            name: "Deni",
            id: 829,
            email: "test@gmail.com",
            school: "ABC",
        });
    });

    //ARRANGE
    it("should use getRole method to override role to Intern", () => {
        
        //ACT
        const testIntern = new Intern ("Deni", 829, "test@gmail.com", "ABC");

        //ASSERT
        expect(testIntern.getRole()).toEqual("Intern");
    });
});

