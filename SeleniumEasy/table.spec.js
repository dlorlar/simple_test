describe('Ensure User can Filter Table', () => {
    it('Ensure can assess Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })

    it('Ensure user can table filter', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
        cy.get('#task-table').contains('td', 'Wireframes').should('be.visible').should('have.length', 1)
        //cy.get('button').contains('Filter').click()
        //cy.get('input[placeholder="Username"]').type('jacobs')  
      
    })
})