describe("User Onboarding", () => {
    beforeEach(() => {
    cy.visit("http://localhost:3003")
    })

    it("sanity check to make sure tests work", () => {
        //"it" is a test
        //"expect" is an assertion
        //There can be multiple assertions per test, but they
        //all need to relate to the 'one thing' we are testing
        expect(1+2).to.equal(3)
        expect(2+2).not.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    
    })

    const usernameInput = () => cy.get("input[name=username]")
    const emailInput = () => cy.get("input[name=email]")
    const passwordInput = () => cy.get("input[name=password]")
    const favLanguageInput = () => cy.get("input[name=favLanguage]")
    const favFoodInput = () => cy.get("[name=favFood]")
    const agreementInput = () => cy.get("input[name=agreement]")
    const submitBtn = () => cy.get('form').submit()
    // const validationMessage = () => cy.get('inputGroup.validation')



    it("proper elements are showing", () => {
        usernameInput().should("exist")
    })

    it("can type in the inputs", () => {
        usernameInput()
        .should("have.value", "")
        .type("Steve")
        .should("have.value", "Steve")
        agreementInput()
        .should("have.value", "on")
        .check()
        .should("have.value", "on")
        // emailInput()
        // .should("have.value", "")
        // .type("Steve@bt.com")
        // .should("have.value", "Steve@bt.com")
        // passwordInput()
        // .should("have.value", "")
        // .type("easyPW")
        // .should("have.value", "easyPW")
    })
    it("submit button enables when all inputs are filled", () => {
        usernameInput().type("Steve")
        favLanguageInput().first().check()
        favFoodInput().first().select("Pizza")
        agreementInput().check()
        submitBtn().should("not.be.disabled")
    })

    it("check to see if an input is left empty - form validation", () => {
        usernameInput().type("Steve ")
        //     cy.get("#usernameRequired")
        //     .should("be.visible")
        //     .and("contain", "username is required")

        favLanguageInput().check()
        favFoodInput().first().select("Pizza")
        agreementInput().check()
        submitBtn().should("not.be.disabled")
        usernameInput().type("St")
    })

    




})




