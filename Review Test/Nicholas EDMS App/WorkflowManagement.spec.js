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
        //mODULE 3 Workflow Management
    it('Workflow Activity', () =>{
        cy.get('.ng-tns-c11-7.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-19').click()
         cy.get('.p-toolbar-group-left > .p-button-success > .p-button-label').click()
        cy.get('#activityName').type('EDMS BUGS VERIFICATION')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
        cy.wait(5000)
        cy.get(':nth-child(9) > :nth-child(3) > .p-button-warning').click()
        cy.get('.p-confirm-dialog-accept').click()
    })

    it.only('Workflow Activity(delete doc.)', () =>{
        cy.get('.ng-tns-c11-7.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-19').click()
        cy.get(':nth-child(8) > :nth-child(3) > .p-button-warning > .p-button-icon').click()
        cy.get('.p-confirm-dialog-accept').click()
    })


    it('Workflow Rout', () =>{
        cy.get('.ng-tns-c11-7.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-20 > .layout-menuitem-text').click()
        cy.get('#p-tabpanel-0 > .p-grid > .p-col-12 > .card > p-toolbar > .p-mb-4 > .p-toolbar-group-left > .p-button-success').click()
        cy.get('#approvalGroupName').type('CSO')
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item').click()
        cy.get('[icon="pi pi-check"]').click()
        
    })
    it('Workflow Activity Rout Mapping', () =>{
        cy.get('.ng-tns-c11-7.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-21').click()
        cy.get('#workFlowActivityId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(2) > .p-dropdown-item').click()
        cy.get('#approvalGroupId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('#value > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('[icon="pi pi-check"]').click()
        
    })

    it('Approval workflower', () =>{
        cy.get('.ng-tns-c11-7.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-22').click()
        cy.get('.p-button-primary > .p-button-label').click()
        cy.get('#title').type('EDMS FILE')
        cy.get('#comment').type('ok')
        cy.get('.ng-untouched > .p-checkbox > .p-checkbox-box').click()
        cy.get('[icon="pi pi-times"]').click()
        
       
    })


        
        
    })