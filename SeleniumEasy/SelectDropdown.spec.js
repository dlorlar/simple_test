describe('Ensure User can Select Dropdown', () => {
    it('Ensure can assess Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })

    it('Ensure user can perform a Select List', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Select Dropdown List').and('be.visible').click()
        cy.get('#select-demo').select('Sunday')
        cy.contains('Day selected :- Sunday').should('be.visible')
    })

    it('Ensure user can perform Multi Select List', () => {
        cy.get('[value="Washington"]').click()
        cy.get('#printMe').click()
        cy.contains('First selected option is : Washington').should('be.visible')
    })
})