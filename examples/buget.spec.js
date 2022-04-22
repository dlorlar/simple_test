describe('Budget Test', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakbudget.azurewebsites.net/login.aspx')
    })

    it('Ensure user can login', () => {
        cy.get('#AppID').type('App_773814')
        cy.get('#Login1_UserName').type('admin')
        cy.get('#Login1_Password').type('Password10$')
        cy.get('#Login1_LoginButton').click()
        cy.url().should('include', '/Default2')
    })
})