describe('Cypress-Browser', () => {
    beforeEach(() => {
        cy.visit('https://www.whatismybrowser.com/')
    })

    it('Log Web Browser Information', () => {
        cy.log(Cypress.browser.name)
        cy.log(Cypress.browser.family)
        cy.log(Cypress.browser.version)
        cy.log(Cypress.browser.isHeaded)
        cy.log(Cypress.browser.isHeadless)
        cy.log(Cypress.browser.path)
    })
})