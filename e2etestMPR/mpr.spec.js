/// <reference types = "cypress" />
describe('MPR Testing', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakmprmysql.azurewebsites.net/account/login')
    })
    
    it('Login', () => {
        cy.get('#company').type('cmp02')
        cy.get('#username').type('test')
        cy.get('#password').type('@password')
        cy.get('.btn').contains('Login').click()
        cy.url().should('eq','https://fintrakmprmysql.azurewebsites.net/')
        cy.contains('Click to launch app portal').click()
    })
})