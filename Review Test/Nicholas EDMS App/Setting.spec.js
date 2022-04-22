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
    it('Storage settings', () =>{
        cy.get('.ng-tns-c11-9.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-19').click()
        cy.get('.p-dropdown-trigger').click()
        cy.get(':nth-child(2) > .p-dropdown-item > .ng-star-inserted').click()
    })

    it('Folder Types', () =>{
        cy.get('.ng-tns-c11-9.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-20 > .layout-menuitem-text').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#folderTypeName').type('EDMS DOC.').should('be.visible','EDMS DOC.')
        cy.get('#Description').type('script')
        cy.get('#defaultFolderSize').type('87')
        cy.get('#physicalFilePath').type('Desktop').should('be.visible','Desktop')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
        cy.get(':nth-child(8) > :nth-child(6) > .p-button-rounded').click()
        /* cy.get('[icon="pi pi-times"]').click() */ 
    })

    it('Document Properties', () =>{
        cy.get('.ng-tns-c11-9.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-21').click()
        cy.get('#p-tabpanel-0 > .p-grid > .p-col-12 > .card > p-toolbar > .p-mb-4 > .p-toolbar-group-left > .p-button-success').click()
        cy.get('#documentCategoryName').type('Bugs detail').should('be.visible','Bugs detail')
        cy.get('[icon="pi pi-check"]').click()
        cy.wait(5000)
        /* cy.get('#p-tabpanel-0 > .p-grid > .p-col-12 > .card > p-toolbar > .p-mb-4 > .p-toolbar-group-left > .p-button-success').click()
        cy.get('#p-tabpanel-0 > .p-grid > .p-col-12 > .card > p-toolbar > .p-mb-4 > .p-toolbar-group-left > .p-button-success').click()
        cy.get('#documentCategoryName').type('scripting').should('be.visible','scripting')
        cy.get('[icon="pi pi-check"]').click() */
        
    })
        
    it.only('toggles the nav', () => {
        expect(Cypress.currentTest.title).to.eq('toggles the nav')
      })    
})