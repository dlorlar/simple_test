//last approver = Drawdown Review Legal Approval

/// <reference types="Cypress"/>

describe ('BOOKING - AVAILMENT_DOCUMENTATION LEVEL 1', () =>{

    it("Login into the APP", () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000})
        cy.wait(50000)
    })

    it("Credit Admin Account Login ", () =>{
       
        // Login Into Credit_Admin Account
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("fagbemim")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(30000)
    })

    it("Performing the Processes", () => {
        // Credit Tab
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3').click()
        cy.wait(1000)
        // Credit Origination Tab
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-13').click()
        cy.wait(1000)
        // Availment Tab
        cy.get('.ng-tns-c3-14.ng-tns-c3-13 > :nth-child(4) > .ripplelink').click()
        cy.wait(60000)

        // Picking the loan Application
        cy.get('.ui-datatable-even > .ui-selection-column > p-dtcheckbox.ng-star-inserted > .ui-chkbox > .ui-chkbox-box').click()
        cy.wait(1000)
        // Add To my Desk
        cy.get(':nth-child(2) > .col-md-12 > .btn').click()
        cy.wait(2000)
        // Confirm buttons
        cy.get('.swal2-confirm').click()
        cy.wait(30000)
        cy.get('.swal2-confirm').click()
        cy.wait(1000)

        // Click on View
        cy.get(':nth-child(13) > .ui-cell-data > .ng-star-inserted').click()
        cy.wait(30000)
        // Provide Recommendation
        cy.get('.pull-right > :nth-child(2) > .btn').click()
        // Enter comment 
        cy.get('.col-md-8 > #comment').type("we move")
        // Approve button click
        cy.get('p-dialog.ng-tns-c1-22 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(30000)
        // Confirm buttons
        cy.get('.swal2-confirm').click()
        cy.wait(30000)
        cy.get('.swal2-confirm').click()
        cy.wait(1000)
    })
    
    it("Capture of CRMS Code", () => {
       // Credit Tab
       cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3').click()
       cy.wait(1000)
       // Credit Origination Tab
       cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-13').click()
       cy.wait(1000)
       // Capture CRMS Code Tab
       cy.get('.ng-tns-c3-14.ng-tns-c3-13 > :nth-child(6) > .ripplelink').click()
       cy.wait(45000)
       // Generate CRMS Code button
       cy.get(':nth-child(1) > [style="width: 100px;"] > .ui-cell-data > .ng-star-inserted').click()
       cy.wait(30000)
       // View the loan details
       cy.get(':nth-child(1) > [style="width: 38px;"] > .ui-cell-data > .ng-star-inserted > .glyphicon').click()
       cy.wait(30000)
       // Capture CRMS Code
       cy.get('.pull-right > .ui-button > .ui-button-text').click()
       cy.wait(6000)
       // Input the CRMS Code
       cy.get('#crmsCode').type("12356")
       cy.wait(1000)
       // Add Code button
       cy.xpath('//*[@id="Job-request-modal"]/div/div[2]/div[2]/crms-regulatories/p-tabview/div/div/p-tabpanel[1]/div/div/div[2]/div/button/span')
       .click()
       // Confirm Buttons
       cy.get('.swal2-confirm').click()
       cy.wait(30000)
       cy.get('.swal2-confirm').click()

    })
    // Next - SENT to olaniyiab -- Abisola Olaniyi, CREDIT OPERATIONS INPUTTER
}) 
