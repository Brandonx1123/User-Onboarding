describe("App", () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/') 
    })
    const fnameInput = () => cy.get('input[name="fname"]');
    const lnameInput = () => cy.get('input[name="lname"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passInput = () => cy.get('input[name="password"]');
    const tosInput = () => cy.get('input[type="checkbox"]');
    const submitInput = () => cy.get(".submitButton");


    
    it("checking ", () => {
            expect(2+2).to.equal(4);
    }); //testing just to have tests working

    it("Does my first name work", () => {
        fnameInput()
        .should("exist")
        .should("have.value", "")
        .type("Brandon")
    });

    it("Does my last name work", () => {
        lnameInput()
        .should("exist")
        .should("have.value", "")
        .type("Santos")
    });

    it("Does my emailwork", () => {
        emailInput()
        .should("exist")
        .should("have.value", "")
        .type("Brandonx1123@gmail.com")
    });

    it("Does my password work", () => {
        passInput()
        .should("exist")
        .should("have.value", "")
        .type("BLAHblahBLAH")
    });

    it("Terms of Service Working", () => {
        tosInput().not("be checked").check();
    })

    it("Do my errors work", () => {
        fnameInput().type("2");
        lnameInput().type("to");
        emailInput().type("not email");
        passInput().type("passwordpasswordpassword")
        tosInput().check().uncheck()
    });

    it("does submit work", () => {
        fnameInput().type("Brandon");
        lnameInput().type("Santos");
        emailInput().type("brandonx1123@gmail.com");
        passInput().type("Checkmate");
        tosInput().check().should("be.checked");
        submitInput().click();
    })

})

