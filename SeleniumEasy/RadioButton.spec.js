describe('Ensure User can Select Radio Button', () => {
    it('Ensure can assess Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })

    it('Ensure user can perform Single Radio Button', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Radio Buttons Demo').and('be.visible').click()
        cy.get('.panel-body > :nth-child(2) > input').click()
        cy.get('#buttoncheck').click()
        cy.contains("Radio button 'Male' is checked").should('be.visible')
    })

    it('Ensure user can perform Group Radio Buttons', () => {
        cy.get('.panel-body > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(4) > input').click()
        cy.get('.panel-body > .btn').click()
        cy.contains("Sex : Male Age group: 15 - 50").should('be.visible')
    })
})