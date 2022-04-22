///<reference types = 'cypress' />
describe('login to EDMS App', () =>{
    beforeEach(() =>{
        cy.visit('https://credit360edm.azurewebsites.net/')
        cy.get('#inputgroup').type('access')
        cy.get('.p-button-label').click()
        cy.get('#inputgroup').type('Amodunicholas')
        cy.get('#pwd').type('Yam@123456')
        cy.get('.p-button-label').click()
        
        //Document Module 
    })
    it.only('My Document', () =>{
        cy.get('.ng-tns-c11-6.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-19 > .layout-menuitem-text').click()
        cy.get(':nth-child(1) > :nth-child(7) > [title="New Folder"] > .pointer').click()
        cy.get('.p-field > .p-inputtext').type('EDMS docs').should('be.visible','EDMS docs')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
        cy.get('.p-dialog-header-close-icon').click()
        cy.get('.p-submenu-icon').click()
        cy.get('.p-submenu-list > :nth-child(1) > .p-menuitem-link').click()
        cy.get('[style="left: 0px; width: calc((12.5% - 0.875px) * 1 + 0px); top: 0px; height: calc(100px);"] > .mat-figure > div').click()
    })
    it('Achieve', () =>{
        cy.get('.ng-tns-c11-6.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-20 > .layout-menuitem-text').click()
        
    })
    it('MyFavorite', () =>{
        cy.get('.ng-tns-c11-6.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-21').click()
        
    })
    it('Shared Document ', () =>{
        cy.get('.ng-tns-c11-6.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-22 > .layout-menuitem-text').click()
        cy.get('div')
        cy.get('button')
        cy.contains('Drop file').should('exist')
    })

})