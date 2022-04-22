///<reference types = "cypress" />
import EDMS from '../pageObjects/edmsLogin'
describe('EDMS Testing', () => {
    const edmsLogin = new EDMS()
    it('Navigate to URL', () => {
        cy.visit('https://credit360edm.azurewebsites.net/#/login')
    })

    it('Ensure user can login', () => {
        cy.get(':nth-child(1) > .p-float-label > #inputgroup').should('have.value', '')
        edmsLogin.domain().type('access')
        cy.get('.p-button').click()
        edmsLogin.username().type('admin')
        edmsLogin.password().type('testing')
        edmsLogin.signin().should('be.visible', 'Go to domain').click()
    })
 
    it('My Document', () => {
        cy.get('.ng-tns-c11-6.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.contains('My Documents').click()
        cy.get(':nth-child(1) > :nth-child(1) > p-treetabletoggler.ng-star-inserted > .p-treetable-toggler > .pi').click()
        //cy.contains(':nth-child(1) > :nth-child(6) > [icon="pi pi-cloud-upload"] > .p-button-icon').click()
        //cy.contains('#fileDropRef').attachFile('Sample.pdf');
        cy.get(':nth-child(2) > :nth-child(7) > [icon="pi pi-share-alt"] > .p-button-icon').click({force: true})
        cy.get('#shareBeneficiaryType1 > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('.p-autocomplete-input-token').type('a')
        cy.get('#pr_id_5_list > :nth-child(2) > .ng-tns-c21-26').click()
        cy.get('#shareTitle').type('Designer')
        cy.get('#fullAccess > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('[icon="pi pi-check"]').click()
        cy.wait(10000)
        cy.screenshot('#swal2-content')
        

    })
})