const TeamManager = require ("../lib/teamManager");

describe ("teamManager object", () => {
    //ARRANGE
    it ("should create a team manager OBJECT with name, id, email, office number", () => {
        
        //ACT    
        const testManager = new TeamManager ("Deni", 829, "test@gmail.com", "1234");

        //ASSERT
        expect(testManager).toEqual({
            name: "Deni",
            id: 829,
            email: "test@gmail.com",
            officeNumber: "1234",
        });
    });
    //ARRANGE
    it("should use getRole method to override role to manager", () => {
        
        //ACT
        const testManager = new TeamManager ("Deni", 829, "test@gmail.com", "1234");

        //ASSERT
        expect(testManager.getRole()).toEqual("TeamManager");
    });
});