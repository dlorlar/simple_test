describe('CRM Test', () => {
    it('Navigate to URL', () => {
        cy.visit('http://fintrakcrm.azurewebsites.net/')
    })

    it('Ensure successful Login', () => {
        cy.get('#loginusername').type('fintrak')
        cy.get('#loginpassword').type('password@fintrak')
        cy.get('#btnSignin').click()
        //cy.url().should('include', '/dashboard')
    })
})