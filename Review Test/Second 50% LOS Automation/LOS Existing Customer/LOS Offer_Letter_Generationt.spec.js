/// <reference types = "cypress" />

describe ('Credit Appraisal_Legal Analyst', () =>{
    
    it("Logging Into the App", () =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000 })
        cy.wait(50000)
    })

    it("Account Officer Account_Login", () => {
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("abidoyet")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(15000)  
    })

    // Checking the Credit Application Status.
    it("Checking Credit Application Status", () => {
        cy.get(":nth-child(6) > .ripplelink.ng-tns-c3-3").click()
        cy.get(":nth-child(1) > .ripplelink.ng-tns-c3-16 > .material-icons.ng-tns-c3-16").click()
        cy.get('.ng-tns-c3-17.ng-tns-c3-16 > :nth-child(8) > .ripplelink').click()
        cy.wait(10000)
        cy.get('.pull-right > .ui-button').click()
        cy.get('#searchString').type("1323327249187")
        cy.get('.btn-success').click()
        cy.wait(30000)
    })

    // Login in into the Legal Analyst Account
    describe ('Credit Appraisal_Legal Analyst', () =>{
        it("Logging Into the App", () =>{
            cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000 })
            cy.wait(50000)
        })

        it("Legal Analyst_Login", () => {
            cy.get(".m-t-60 > .col-xs-12 > .form-control").type("oladipof")
            cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
            cy.get(".col-xs-12 > .btn").click()
            cy.wait(55000)  
        })

        // Generating Offer Letter 
        it("Generating_Offer_Letter", () => { 
            cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3 > .ng-star-inserted').click()
            cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-11 > .ng-star-inserted').click()

            // Generate offer letter tab
            cy.get(':nth-child(3) > .ripplelink > .ng-tns-c3-12').click()
            cy.wait(40000)

            // Picking the loan application (clicking on view button)
            cy.get(':nth-child(1) > :nth-child(7) > .ui-cell-data > .ng-star-inserted > a').click()
            cy.wait(70000)
            // Generate Original Offer letter checkbox
            cy.get('#isFinalOfferLetter').check()
            cy.wait(2000)

            // View Customer information
            cy.get(':nth-child(2) > a > .ui-tabview-title').click()
            cy.wait(3000)
            
            // Selecting Offer Letter Template
            cy.get(':nth-child(3) > .row > .col-md-12 > :nth-child(3)').click()
            cy.wait(1000)
            cy.get('#offerletterTemplateId').select(5)
            cy.wait(1000)
            cy.get('p-dialog.ng-tns-c1-20 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success')
            .click()
            cy.wait(1000)
            cy.get('.swal2-confirm').click()
            cy.wait(10000)
            cy.get('.swal2-confirm').click()
            // Closing offer letter box
            cy.get('.panel-heading > .row > .col-md-12 > .btn-danger').click()
            // View Comments
            cy.get('.col-md-12 > :nth-child(5)').click()
            cy.wait(1000)
            // Closing the comment box
            cy.get('p-dialog.ng-tns-c1-16 > .ui-dialog > .ui-dialog-content > [style="margin-bottom:0"] > :nth-child(1) > .pull-right > .close')
            .click()
            
            // Forwarding Application to Business 
            cy.get(':nth-child(3) > .row > .col-md-12 > .btn-success > .glyphicon').click()
            cy.wait(3000)
            cy.get('.swal2-confirm').click()
            cy.wait(20000)
            cy.get('.swal2-confirm').click()
            
        })
        // next approval Relationship Manager
    })
})
