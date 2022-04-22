

describe('handling alerts', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('Alert Type', () => {

        cy.get(':nth-child(1) > button').click()

    })
})