/// <reference types="Cypress"/>

describe("Credit Appraisal_Credit Risk Manager", () => {
    it("NavigateToUrl", () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000 })
        cy.wait(50000)                              
    })

    it("Zonal Head Appraisal", () => {
        // Login in
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("olasokoa")
        cy.wait(1000)
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.wait(1000)
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(15000)
    })

    it("Credit Applications", () => {
        cy.get(':nth-child(2) > :nth-child(1) > .ui-g > .ui-g-8').click()
        cy.wait(150000)
        cy.get('#searchString').type("ADEBISI{enter}")
        cy.wait(2000)
        cy.get(':nth-child(1) > .ui-selection-column > p-dtradiobutton.ng-star-inserted > .ui-radiobutton > .ui-radiobutton-box')
        .click()
        cy.wait(70000)
    })

    it("Approval Memorandum Tab", () => {
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[2]/a').click()
        cy.wait(35000)
        // Select Document Section
        cy.get('#sectionId').select(8)
        cy.wait(50000)
        
    })

    it("Risk Assessment Criteria Tab", () => {
        cy.xpath("/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[4]/a/span").click()
        cy.wait(10000)
        cy.get('#productDropDown').select(1)
        cy.wait(5000)
    })
   
    it("Conditions Tab", () => { 
       cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[5]/a/span').click()
       cy.wait(10000)
       cy.get('app-credit-condition > :nth-child(1) > .col-md-6 > .form-control').select(1)
       cy.wait(4000)
       // Add New Button
       cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/div/p-tabpanel[5]/div/div/app-credit-condition/div[3]/div/p-datatable/div/div[1]/table/thead/tr/th[5]/span/div')
       .click()
       cy.wait(4000)
       cy.get('#condition').type("Move on dude.")
       cy.wait(500)
       cy.get('#condition-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-untouched > .panel-footer > .row > .col-md-12 > .btn-success')
       .click()        
       cy.wait(10000)
    })

    it("Transaction Dynamics Tab", () => { 
       cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[6]/a/span').click()
       cy.wait(5000)
       cy.get('app-transaction-dynamics > :nth-child(1) > .col-md-6 > .form-control').select(1)
       cy.wait(6000)
       
       // Add New
       cy.get(':nth-child(5) > .form-horizontal > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > [style="width: 110px;"] > .ui-column-title > .pull-right > .ui-button').click()
       cy.wait(10000)
       cy.get('#dynamics').type("Let's dance the dance.")
       cy.wait(500)
       cy.get('.ng-invalid.ng-dirty > .panel-body > .form-horizontal > :nth-child(3) > .col-md-6 > .checkbox-container > #isExternal')
       .check()
       cy.wait(500)
       cy.get('#position').type("004")
       cy.wait(500)
       cy.get('#dynamics-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success')
       .click()
       cy.wait(15000)
    }) 
    
    it("Supporting Documents", () => {
        cy.get(':nth-child(8) > a > .ui-tabview-title').click()
        cy.wait(10000)
        cy.get('.ui-tabview-panel > document-upload > :nth-child(2) > form.ng-pristine > .panel-body > .form-horizontal > .form-group > :nth-child(4) > #documentCategoryId')
        .select(4)
        cy.wait(10000)
        cy.get(".ng-invalid.ng-dirty > .panel-body > .form-horizontal > .form-group > :nth-child(5) > #documentTypeId").select(2)
        //cy.xpath('//*[@id="documentTypeId"]').select(1)
        cy.wait(3000)

        // Uploading Supporting Document
        const just_DOC = 'JUSTDOC.docx';
        cy.get('.ng-invalid.ng-dirty > .panel-body > .form-horizontal > .form-group > div.col-md-4 > .form-control')
        .attachFile(just_DOC);
        cy.wait(15000)
        cy.get('.ui-tabview-panel > document-upload > :nth-child(2) > .panel-footer > .row > .col-md-12 > .btn > .glyphicon').click()
        cy.wait(10000)

    })

    it("Application Information Tab", () => { 
       cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[3]/a/span').click()
       cy.wait(15000)
       cy.get('#isOnLending').check()

       // Accept
       cy.get('.panel-body > .btn-success').click()
       cy.wait(15000)
       cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type("Correctly accepted.")
       cy.wait(10000)
       cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
       cy.wait(90000)
       cy.get('.swal2-confirm').click()
       cy.wait(90000)
       cy.get('.swal2-confirm').click()
    })
})

//// next approval is the legal analyst.