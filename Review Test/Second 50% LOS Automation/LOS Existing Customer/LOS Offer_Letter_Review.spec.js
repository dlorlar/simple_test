/// <reference types = "cypress" />

describe ('REVIEW OF OFFER LETTER', () =>{
    
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

    describe("Offer Letter Review_RM", () => {
        it("Goto Site", () => {
            cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000 })
            cy.wait(50000)                              
        })
    
        it("Login in to RM Account", () => {
        // Login in
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("roy-egbokhano")
        cy.wait(1000)
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.wait(1000)
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(15000)

        })

        it("Review Offer Letter Tab", () => {
            // credit tab
            cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3').click()
            cy.wait(1000)
           
            // Credit origination tab
            cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-13').click()
            cy.wait(1000)
           
            //Review offer letter tab
            cy.get('.ng-tns-c3-14.ng-tns-c3-13 > :nth-child(7) > .ripplelink').click()
            cy.wait(40000)

            // Clicking on the view button
            cy.get('.ui-cell-data > .ng-star-inserted > a').click()
            cy.wait(38000)

            // Clicking on Indicate Customer Acceptance button
            cy.get('.btn-group > .btn-success > .glyphicon').click()
            //Comment
            cy.get('.panel-body > .form-group > .col-md-8 > .form-control').type("Good to go.")
            cy.get('p-dialog.ng-tns-c1-23 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
            cy.wait(20000)
            // Clicking on confirmation button
            cy.wait(3000)
            cy.get('.swal2-confirm').click()
            cy.wait(20000)
            cy.get('.swal2-confirm').click()
  
        })
        // sent to drawdown request - account officer level.
    })
})