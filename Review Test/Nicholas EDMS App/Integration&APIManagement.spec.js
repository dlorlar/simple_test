///<reference types = 'cypress' />
describe('login to EDMS App', () =>{
    beforeEach(() =>{
        cy.visit('https://credit360edm.azurewebsites.net/')
        cy.get('#inputgroup').type('access')
        cy.get('.p-button-label').click()
        cy.get('#inputgroup').type('admin')
        cy.get('#pwd').type('testing')
        cy.get('.p-button-label').click()
        
        
    })
    it('ThirdParty Integration', () =>{
        cy.get('.ng-tns-c11-10.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-19').click()
        cy.get('.p-d-flex > .p-button-success > .p-button-label').click()
        cy.get('#registrationCode').type('009')
        cy.get('#appName').type('Nicholas')
        cy.get('#vendor').type('Nicholas Vensure')
        cy.get('#patnershipNumber').type('234657')
        cy.get('[icon="pi pi-check"] > .p-button-icon').click()
        
    })
    it('API Manager', () =>{
        cy.get('.ng-tns-c11-10.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-20 > .layout-menuitem-text').click()
        
    })
})