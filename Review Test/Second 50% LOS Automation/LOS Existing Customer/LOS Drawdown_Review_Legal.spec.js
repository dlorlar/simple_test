// last approver = drawdown approval Relatinoship Mangaer

/// <reference types = "cypress" />

describe ('DRAWDOWN REVIEW LEVEL', () =>{
    
    beforeEach(() => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000})
        cy.wait(50000)
    })

    it("Legal Analyst Stage", () =>{
       
        // Login Into Legal_Analyst Account
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("oladipof")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(30000) 

        // Approval Tab
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.wait(5000)
        // Credit Tab
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-7 > span.ng-tns-c3-7').click()
        cy.wait(5000)
         // Drawdown Approval Tab
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c3-8').click()
        cy.wait(40000)
        // Picking then loan Application
        cy.get('.ui-datatable-even > .ui-selection-column').click()
        cy.wait(90000)
        // Submit Approval
        cy.get('.pull-right > .btn-success').click()
        cy.wait(2000)
        // Comment
        cy.get('.ui-dialog-content > .panel > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(1) > :nth-child(2) > #comment')
        .type("Met condition")
        cy.wait(2000)
        // Decision
        cy.get('#approvalStatusId').select(1)
        cy.wait(2000)
        // Submit button
        cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click()
        // Yes
        cy.get('.ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(30000)
        // Confirm Button
        cy.get('.swal2-confirm').click()
    })

    // Last approval = drawdown Legal Review Analyst

    // next approver = drawdown Legal Review Approval - aduoluw
    
    it("Legal Approval Stage", () =>{
           // Login Into Legal_Approval Account
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("aduoluw")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(30000) 

        // Approval Tab
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.wait(5000)
        // Credit Tab
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-7 > span.ng-tns-c3-7').click()
        cy.wait(5000)
        // Drowdown Approval Tab
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c3-8').click()
        cy.wait(80000)
        // Picking the Loan Application
        cy.get('.ui-datatable-even > .ui-selection-column').click()
        cy.wait(80000)
        // Submit for Approval
        cy.get('.pull-right > .btn-success').click()
        cy.wait(3000)
        // Comment
        cy.get('.ui-dialog-content > .panel > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(1) > :nth-child(2) > #comment')
        .type("Best brain")
        // Decision
        cy.get('#approvalStatusId').select(1)
        // Save Button
        cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(1000)
        // Yes
        cy.get('.ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(30000)
        // Confirm button
        cy.get('.swal2-confirm').click()
        // Confirm Button
        cy.wait(70000)
        cy.get('.swal2-confirm').click()

    })
    // up next, credit avialment and documentation
})