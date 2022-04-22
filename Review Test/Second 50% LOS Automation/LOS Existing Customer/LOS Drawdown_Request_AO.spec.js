/// <reference types = "cypress" />

describe ('DRAWDOWN REQUEST LEVEL', () =>{
    
    it("Logging Into the App", () =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000})
        cy.wait(50000)
    })

    it("Login Into AO Account", () => {
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("abidoyet")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(30000)  
    })

    // Making drawdown request.
    it("Drawdown_Request", () => {
        // Credit Tab
        cy.get(":nth-child(6) > .ripplelink.ng-tns-c3-3").click()
        // Credit Origination Tab
        cy.get(":nth-child(1) > .ripplelink.ng-tns-c3-16 > .material-icons.ng-tns-c3-16").click()
        // Drawdown tab
        cy.get('.ng-tns-c3-17.ng-tns-c3-16 > :nth-child(14) > .ripplelink').click()
        cy.wait(100000)
        // Picking the loan application
        cy.get(':nth-child(1) > .ui-selection-column > p-dtradiobutton.ng-star-inserted > .ui-radiobutton > .ui-radiobutton-box').click()
        cy.wait(65000)

    })

    it("Offer_Letter_Checklists", () => {
        // Offer Letter Tab
        cy.get(':nth-child(4) > a > .ui-tabview-title').click()
        cy.wait(10000)
        // Clicking on Waiver's Button
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .row > .col-md-12 > .btn-success').click()
        cy.wait(10000)

        // Checklist 1
        cy.get(':nth-child(1) > :nth-child(3) > .ui-cell-data > .ng-star-inserted > .glyphicon').click()
        cy.wait(2000)
        // Selecting a checklist
        cy.get('#checkListStatusId').select(2)
        cy.wait(2000)
        // Clicking on upload buttoon
        cy.get('.col-md-8 > a > .glyphicon').click()
        cy.wait(2000)
        // Selecting document category
        cy.get('document-upload.ng-star-inserted > :nth-child(2) > form.ng-pristine > .panel-body > .form-horizontal > .form-group > :nth-child(4) > #documentCategoryId')
        .select(3)
        cy.wait(10000)
        // Selecting document type
        cy.get('.ng-invalid.ng-dirty > .panel-body > .form-horizontal > .form-group > :nth-child(5) > #documentTypeId').select(1)
        cy.wait(2000)
        // Attaching the document 
        const collateralValuation = 'COLVal.docx';
        cy.get('.ng-invalid.ng-dirty > .panel-body > .form-horizontal > .form-group > div.col-md-4 > .form-control')
        .attachFile(collateralValuation)
        cy.wait(8000)
        // Clicking on upload button
        cy.get('document-upload.ng-star-inserted > :nth-child(2) > .panel-footer > .row > .col-md-12 > .btn > .glyphicon').click()
        cy.wait(70000)
        // Clicking on confirm button
        cy.get('.swal2-confirm').click()
        // Clicking on cancel button
        cy.get('.ng-tns-c1-71.ui-dialog > :nth-child(2) > :nth-child(2) > .row > .col-md-12 > .btn').click()
        cy.wait(1500)
        // Clicking on save button
        cy.get('p-dialog.ng-tns-c1-68 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(15000)

        // Checklist 2
        cy.get(':nth-child(2) > :nth-child(3) > .ui-cell-data > .ng-star-inserted > .glyphicon').click()
        // Selecting a checklist
        cy.get('#checkListStatusId').select(1)
        // Reason
        cy.get('#reason').type("He is a good man")
        // Clicking on save button
        cy.get('p-dialog.ng-tns-c1-68 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()

        // Checklist 3
        cy.get('fieldset > .col-md-12 > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > .ui-datatable-even > :nth-child(3) > .ui-cell-data > .ng-star-inserted')
        .click()
        // Selecting a checklist
        cy.get('#checkListStatusId').select(1)
        // Reason
        cy.get('#reason').type("Other conditions met")
        // Clicking on save button
        cy.get('p-dialog.ng-tns-c1-68 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(5000)

        // Checklist 4
        cy.get('fieldset > .col-md-12 > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > .ui-datatable-even > :nth-child(3) > .ui-cell-data > .ng-star-inserted')
        .click()
        // Selecting a checklist
        cy.get('#checkListStatusId').select(1)
        // Reason
        cy.get('#reason').type("Fulfill other obligation")
        // Clicking on save button
        cy.get('p-dialog.ng-tns-c1-68 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(7000)

       // Clicking on go for approval button
       cy.get('p-dialog.ng-tns-c1-67 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > :nth-child(2)').click()
    })

    it("Drawdown_Initiation", () => {
        // Customer Request Tab
        cy.get('p-tabview[_ngcontent-flm-c6=""] > :nth-child(1) > :nth-child(1) > .ui-tabview-selected').click()
        cy.wait(4000)
        // New amount drawdown initiation 
        cy.get(':nth-child(5) > .col-md-8 > .form-control').type("16500000")
        cy.wait(3000)
        cy.get('#casaAccountId').select(2)
        cy.wait(3000)
        cy.get(':nth-child(7) > .col-md-8 > .form-control').type("Can go now")
        cy.wait(2000)
        // Selecting Next Approver
        cy.get('.col-md-8 > .btn-default').click()
        cy.wait(10000)
        // Searching for next approver
        cy.get('#staffSearch').type("ferdinandr")
        cy.wait(2000)
        // Picking an Approver
        cy.get('.col-md-12 > .table > tbody > :nth-child(1) > :nth-child(1)').click()
        cy.wait(1000)
        // Initiating Drawdown
        cy.get('.btn-sm').click()
        cy.wait(15000)
        // Confirm Button
        cy.get('.swal2-confirm').click()
        cy.wait(45000)
        // Confirm Button
        cy.get('.swal2-confirm').click()
    })
    // next drawdown approver = relationship manager - ferdinandr
})         