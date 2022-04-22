///<reference types = 'cypress' />


describe('login to EDMS App', () =>{
    beforeEach(() =>{
        cy.visit('https://credit360edm.azurewebsites.net/#/')
        cy.get('#inputgroup').type('access')
        cy.get('.p-button-label').click()
        cy.get('#inputgroup').type('admin')
        cy.get('#pwd').type('testing')
        cy.get('.p-button-label').click()
    })
    //UnitSetUp Module 
    it(' BusinessUnit', () =>{
        cy.get('.ng-tns-c11-15.p-ripple > .layout-menuitem-text').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-19 > .layout-menuitem-text').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#businessUnitName').type('Nicholas Academy').should('be.visible','Nicholas Academy')
        cy.get('#businessUnitCode').type('00232').should('be.visible','00232')
        cy.get('#businessUnitDescription').type('Education').should('be.visible','Education')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
        
    })
    it('User Role', () =>{
        cy.get('.ng-tns-c16-13.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.wait(5000)
        cy.get('.ng-tns-c16-25 > .layout-menuitem-text').click()
        cy.get('p-tableheadercheckbox > .p-checkbox > .p-checkbox-box').click()
        cy.wait(5000)
        cy.get('p-tableheadercheckbox > .p-checkbox > .p-checkbox-box').click()
        // cy.get('.p-toolbar-group-left > .p-button-success').click()
        // cy.get('#roleName').type('Officer1')
        // cy.get('#roleCode').type('00232')
        // cy.get('#roleDescription').type('Scripting')
        // cy.get('[icon="pi pi-check"]').click() 
        
    })

    it.only('Profile User', () =>{
        cy.get('.layout-menuitem-text').contains('Unit Setup').click()
        cy.wait(5000)
        cy.get('.layout-menuitem-text').contains('Profile User').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#firstName').type('Paul')
        cy.get('#lastName').type('John')
        cy.get('#userName').type('kenndy')
        cy.get('#phone').type('09059438228')
       // cy.get('.ng-tns-c21-140 p-dropdown p-component p-dropdown-clearable').click()
        cy.get('.ng-tns-c21-38').click({ multiple: true })
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        // cy.get('#businessUnitId > .p-dropdown').click()
        // cy.get(':nth-child(2) > .p-dropdown-item').click()
        // cy.get('#email').type('johnp@gmail.com')
        // cy.get('#password').type('testing')
        // cy.get('[icon="pi pi-check"] > .p-button-label').click()
    
        
    })

    it('User Group Type', () =>{
        cy.get('.ng-tns-c11-8.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-22 > .layout-menuitem-text').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#groupTypeName').type('QA')
        cy.get('[icon="pi pi-check"]').click()
       
        
    })

    it('User Group', () =>{
        cy.get('.ng-tns-c11-8.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-23').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('#groupName').type('QA')
        cy.get('#groupDescription').type('testers')
        cy.get('#groupEmail').type('amodunicholas@gmail.com')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
       
        
    })
    it('Entity Management', () =>{
        cy.get('.ng-tns-c11-8.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .pi-angle-down').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-24 > .layout-menuitem-text').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('.ng-pristine.ng-star-inserted > :nth-child(1) > .p-field > #entityTypeId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item').click()
        cy.get('#businessUnitId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('#entityCode').type('0093')
        cy.get('#email').type('amodunicholas@gmail.com').should('be.visible', 'amodunicholas@gmail.com')
        cy.get('#phone').type('08060819729')
        cy.get('[icon="pi pi-check"]').click()
       
        
    })
        
    })