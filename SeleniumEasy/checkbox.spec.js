describe('Ensure user can click checkbox', () => {
    it('Ensure can assess Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })

    it('Ensure user can perform a single checkbox', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Checkbox Demo').and('be.visible').click()
        cy.get('#isAgeSelected').click()
        cy.contains('Success - Check box is checked').should('be.visible')
    })

    it('Ensure user can perform multiple checkboxes', () => {
        cy.get('#check1').click()
        cy.contains('Uncheck All').should('be.visible')
        cy.wait(5000)
        cy.get('#check1').click()
        cy.contains('Check All').should('be.visible')
    })






    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})





