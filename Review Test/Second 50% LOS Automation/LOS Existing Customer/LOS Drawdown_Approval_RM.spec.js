/// <reference types = "cypress" />

describe ('DRAWDOWN APPROVAL LEVEL', () =>{
    
    it("Logging Into the App", () =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000})
        cy.wait(50000)
    })

    it("Login Into RM Account", () => {
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("ferdinandr")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(30000)  
    })

    it("Drawdown_Approval", () => {
        // Approval Tab
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.wait(5000)
        // Credit Tab
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c3-7 > span.ng-tns-c3-7').click()
        cy.wait(5000)
        // Drawdown Approval Tab
        cy.get('.ng-tns-c3-9.ng-tns-c3-7 > :nth-child(3) > .ripplelink').click()
        cy.wait(40000)
        // Picking the loan application
        cy.get('.ui-radiobutton-box').click()
        cy.wait(90000)

        // Supporting Document Tab
        const newDoc = "NewDoc.docx";
        cy.get(':nth-child(8) > a > .ui-tabview-title').click()
        cy.wait(5000)
        // Document Category
        cy.get('#documentCategoryId').select(1)
        cy.wait(7000)
        // Document Type
        cy.get('#documentTypeId').select(25)
        cy.wait(2000)
        // Choose a file 
        cy.get('div.col-md-6 > .form-control').attachFile(newDoc)
        cy.wait(2000)
        // Clicking the upload button
        cy.get(':nth-child(3) > .panel-footer > .row > .col-md-12 > .btn').click()
        cy.wait(20000)
        // Submit for Approval
        cy.get('.pull-right > .btn-success').click()
        cy.wait(2000)
        // Approval Comment
        cy.get('.ui-dialog-content > .panel > form.ng-pristine > .panel-body > .form-horizontal > :nth-child(1) > :nth-child(2) > #comment')
        .type("Satisfactoy")
        cy.wait(2000)
        // Approval Decision
        cy.get('#approvalStatusId').select(1)
        cy.wait(2000)
        // Submit Approval
        cy.get('form.ng-touched > .panel-footer > .row > .col-md-12 > .btn-success').click()
        // Yes
        cy.get('.ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(30000)
        // Confirm Button
        cy.get('.swal2-confirm').click()
    })

    // next approver = Legal Review Analyst   
    
})