describe('Ensure User can Select List Box', () => {
    it('Ensure can assess Selenium Easy', () => {
        cy.visit('https://www.seleniumeasy.com/test/')
    })

    it('Ensure user can perform List Box Selection', () => {
        cy.contains('Learn selenium to automate with Seleniumeasy.com').should('be.visible')
        cy.get('.at-cm-no-button').click()
        cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('JQuery List Box').and('be.visible').click()
    })
 
      it('Dual List Box Left Add', () => {
        cy.get('[data-id="1"]').click()
        cy.get('.pAdd').click()
        cy.get('[data-id="2"]').click()
        cy.get('.pAdd').click()
        cy.wait(3000)
      })

      it('Remove List', () => {
        cy.get('.pRemove').click()
        cy.wait(3000)
      })

      it('Dual List Box Left Add All', () => {
        cy.get('.pAddAll').click()
        cy.wait(3000)
      })

      it('Remove List All', () => {
        cy.get('.pRemoveAll').click()
        cy.wait(3000)
      })
})