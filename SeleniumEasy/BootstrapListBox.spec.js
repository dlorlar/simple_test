describe('Ensure User can Select List Box', () => {
    it('Ensure can assess Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })

    it('Ensure user can perform List Box Selection', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap List Box').and('be.visible').click()
    })

    it('Ensure selection move to right', () => {
        cy.get('.list-left > .well > .list-group > :nth-child(1)').click()
        cy.get('.list-left > .well > .list-group > :nth-child(2)').click()
        cy.get('.list-left > .well > .list-group > :nth-child(3)').click()
        cy.get('.move-right').click()
        cy.get('.list-left > .well > #listhead > .col-md-10 > .input-group > .form-control').type('Porta ac consectetur ac')
        cy.get('.list-left > .well > .list-group > :nth-child(1)').click()
        //cy.get('.list-left > .well > .list-group > .active').click()
        cy.get('.move-right').click()
    })

    it('Ensure selection move to left', () => {
        cy.get('.list-right > .well > .list-group > :nth-child(1)').click()
        cy.get('.list-right > .well > .list-group > :nth-child(2)').click()
        cy.get('.list-right > .well > .list-group > :nth-child(3)').click()
        cy.get('.move-left').click()
    })

    it('Get Footer Lenght', () => {
        cy.get('.footer').should('have.length', 1)

        cy.get('.footer')
        .find("a[href*='tutorials']")
        .should('have.length', 13)
    })

  
})