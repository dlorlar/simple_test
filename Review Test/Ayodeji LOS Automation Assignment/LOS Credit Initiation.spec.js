/// <reference types = "cypress" />
describe ('Existing Customer LOS', () =>{
    it("Logging Into the App", () =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000 })
        cy.wait(50000)
    })

    it("User Login", () => {
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("abidoyet")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(15000)  
    })

    // //Initiating a credit application.
    // it("Start Credit Application", () => {
    //     cy.get(":nth-child(6) > .ripplelink.ng-tns-c3-3").click()
    //     cy.get(":nth-child(1) > .ripplelink.ng-tns-c3-16 > .material-icons.ng-tns-c3-16").click()
    //     cy.get(".ng-tns-c3-17.ng-tns-c3-16 > :nth-child(6) > .ripplelink").click()
    //     cy.wait(100000)
    //     cy.get("#startLoanTypeId").select(1)
    //     cy.wait(2000)
    //     cy.get(".card > .panel > .panel-footer > .row > .col-md-12 > .btn").click()
    //     cy.wait(2000)
    // })

    // //Picking an already profiled customer on the system.
    // it("Search for existing customer", () => {
    //     cy.get(".col-md-4 > #search").type("ADEBISI{enter}")
    //     cy.wait(40000)
    //     cy.xpath("/html/body/app-root/app-main/div/div/div[2]/ng-component/app-customer-information/div/div/div/div/div[2]/p-datatable/div/div[1]/table/tbody/tr[4]/td[1]/p-dtradiobutton/div/div[2]")
    //     .click()
    //     cy.wait(40000)
    //     cy.get(".col-md-12 > div > .btn-primary").click()
    //     cy.wait(10000)
    //     cy.get(".ui-datatable-even > :nth-child(8)").click()
    //     cy.wait(10000)
    // })

    // //Uploading of Credit Bureau Documents 
    // it("Upload Credit Bureau Documents", () => {

    //     // Uploading 1st document 
    //     const crmS = 'CRMS.docx';
    //     cy.get(':nth-child(1) > :nth-child(3) > .btn').click()
    //     cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control')
    //     .attachFile(crmS);
    //     cy.wait(3000)
    //     cy.get('div.col-md-4 > .btn').click()
    //     cy.wait(10000)
    //     cy.get('.swal2-confirm').click()
    //     cy.wait(5000)  
    //     cy.get(".ui-datatable-even > :nth-child(8)").click()
    //     cy.wait(5000)
    //     cy.get('tbody > :nth-child(1) > :nth-child(5) > input').check()
    //     cy.wait(8000)
    //     cy.get('.swal2-confirm').click()
    //     cy.wait(5000) 
       
    //     // Uploading 2nd document
    //     const firstBureau = 'FirstBu.docx';
    //     cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
    //     cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control')
    //     .attachFile(firstBureau)
    //     cy.wait(3000)
    //     cy.get('div.col-md-4 > .btn').click()
    //     cy.wait(10000)
    //     cy.get('.swal2-confirm').click()
    //     cy.wait(3000)
    //     cy.get(".ui-datatable-even > :nth-child(8)").click()
    //     cy.wait(5000)
    //     cy.get(":nth-child(2) > :nth-child(5) > input").check() 
    //     cy.wait(8000)
    //     cy.get('.swal2-confirm').click()
    //     cy.wait(6000)
        
    //     // Uploading 3rd document 
    //     const crcDoc = 'CRC.docx';
    //     cy.get(':nth-child(3) > :nth-child(3) > .btn').click()
    //     cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control')
    //     .attachFile(crcDoc);
    //     cy.wait(3000)
    //     cy.get('div.col-md-4 > .btn').click()
    //     cy.wait(10000)
    //     cy.get('.swal2-confirm').click()
    //     cy.wait(4000)
    //     cy.get(".ui-datatable-even > :nth-child(8)").click()
    //     cy.wait(5000)
    //     cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/credit-bureau-search-component/div/div/div/div/div/div[2]/div/form/table/tbody/tr[3]/td[5]/input')
    //     .check()
    //     cy.wait(8000)
    //     cy.get('.swal2-confirm').click()
    //     cy.wait(6000)
    
        
    //     cy.get(".btn > .ui-button-text").click()
    //     cy.wait (20000)
    // })

    //     describe("Start Loan Application", () => {
    //         it("New Loan Application", () => {
    //             cy.get("#productClassProcessId").select(1)
    //             cy.get(".card > .panel > .ng-invalid > .panel-footer > .row > .col-md-12 > .btn").click()
    //             cy.wait(10000)
    //         })

    //         //Filling of customer Information
    //         it("Customer Information", () => {
    //             cy.get("#requireCollateralTypeId").select(1)
    //             cy.get("#productClassId").select(1)
    //             cy.get("#loantermSheetId").select(5)
    //             cy.get("#loansWithOthers").type("0001")
    //             cy.get("#isEmployerRelated").check()
    //             cy.get("#relatedEmployerId").select(4)
    //             cy.get(".ui-button-info > .ui-button-text").click()
    //             cy.wait(80000)
    //         })

    //         // Filling of customer Loan information
    //         it("Customer Loan Information", () => {
    //             // Product
    //             cy.get("#proposedProductId").select(17)
    //             cy.wait(3000)

    //             // Flow charge
    //             cy.get("#isflowchange").check()      
    //             cy.wait(3000)

    //             // Proposed Tenor in numbers
    //             //  cy.get(':nth-child(2) > :nth-child(1) > .form-control').type("60") 

    //             // Tenor period in Months, Days and Years
    //             cy.get(":nth-child(4) > :nth-child(2) > :nth-child(2) > .form-control").select(1)
    //             cy.wait(3000)
               
    //             // Management fee
    //             cy.get(':nth-child(1) > div.ng-untouched > .col-md-4 > .form-control').type("1")
    //             cy.wait(3000)

    //             // Commitment fee                
    //             cy.get(":nth-child(3) > div.ng-untouched > .col-md-4 > .form-control").type("1")
    //             cy.wait(3000)

    //             // Facility Amount
    //             cy.get("#proposedAmount").type("55600000")
    //             cy.wait(3000)

    //             // Exchange Rate
    //             // cy.get('.ng-invalid.ng-dirty > .form-horizontal > :nth-child(8) > :nth-child(2) > .form-control').type("1")

    //             // Product Price Index and Spread                
    //             cy.get("#productPriceIndexId").select(8)
    //             cy.get(":nth-child(9) > :nth-child(3) > .form-control").type("1")
    //             cy.wait(3000)

    //             // CRMS founding Source 
    //             cy.get("#crmsFundingSourceId").select(6)
    //             cy.wait(3000)

    //             // Purpose of the loan
    //             cy.get("#loanPurpose").type("For construction purpose")
    //             cy.wait(3000)

    //             // Moratorium option
    //             cy.get("#isMoratorium").check()
    //             cy.get("#moratorium").type("2")
    //             cy.wait(3000)

    //             // CASA Account
    //             cy.get("#operatingCasaAccountId").select(4)
    //             cy.wait(3000)

    //             // Trade Cycle
    //             cy.get("#approvedTradeCycleId").select(2)
    //             cy.wait(3000)

    //             // Review Type
    //             cy.get("#loanDetailReviewTypeId").select(1)
    //             cy.wait(3000)

    //             // Sector & Sub-Sec
    //             cy.get("#sectorId").select(6)
    //             cy.get("#subSectorId").select(1)
    //             cy.wait(3000)

    //             // // Interest Rate & advisory fee
    //             // cy.get(":nth-child(3) > .col-md-4 > .form-control").type(12)
    //             // cy.get(":nth-child(2) > div.ng-untouched > .col-md-4 > .form-control").type(2)

    //             // Currency
    //             cy.get("#currencyId").select(1)
    //             cy.wait(3000)

    //             // // Exchange Amount
    //             // cy.get(':nth-child(8) > :nth-child(4) > .form-control').type("2")

    //             // Founding Source
    //             cy.get("#crmsPaymentSourceId").select(15)
    //             cy.wait(3000)

    //             // Repayments (frequency & interest)
    //             cy.get("#repaymentScheduleId").select(1)
    //             cy.get("#repaymentTerm").type("Good")

    //             cy.get("#interestRepaymentId").select(1)                
    //             cy.get("#interestRepayment").type("Good")
    //             cy.wait(3000)           

    //             // Take over loan checkbox
    //             cy.get("#isTakeOverApplication").check()
    //             cy.wait(5000)
    //         })

    //         it("Risk Criteria Accessment", () => {
    //             cy.get(".table > :nth-child(2) > :nth-child(2) > :nth-child(3)").type("2")
    //             // Open Comment box
    //             cy.get('.table > :nth-child(2) > :nth-child(2) > :nth-child(5) > a').click()
    //             // Type in comment box
    //             cy.get("#comment").type("Good")
    //             // Close comment box
    //             cy.get('p-dialog.ng-tns-c1-114 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-danger').click()
    //             cy.wait(3000) 
                
    //             // Other risks
    //             cy.get('[id="2011"]').select(2)      
    //             cy.wait(1000)               
    //             cy.get('.table > :nth-child(3) > :nth-child(2) > :nth-child(3)').type("5")  
    //             cy.wait(1000)            
    //             cy.get('[id="2007"]').select(1)             
    //             cy.wait(1000)
    //             cy.get('[id="2008"]').select(1)     
    //             cy.wait(1000)          
    //             cy.get('[id="2009"]').select(1)
    //             cy.wait(3000)
                
    //             // Add Facility
    //             cy.get('.pull-right > .ui-button-text').click()
    //             cy.wait(20000)
                
    //             // confirmation message
    //             cy.get(".swal2-confirm").click()
    //             cy.wait(3000)

    //             // Save & Continue button 
    //             cy.get(':nth-child(1) > .panel-footer > .row > .col-md-12 > .btn-success').click()
    //             cy.wait(10000)

    //             // Confirmation message (1322045829292)
    //             cy.get('.swal2-confirm').click()
    //             cy.wait(6000)

    //             // Next button click
    //             cy.get('.ui-g-12 > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
    //             cy.wait(60000)
    //         })
            
    //     })
        
        describe("Account Officer Operation", () => {
            it("Initiating Appraisal Process", () => {                     
                // Searching & picking customer loan application
                cy.get(':nth-child(2) > :nth-child(1) > .ui-g > .ui-g-8').click()
                cy.wait(120000)
                cy.get('#searchString').type("ADEBISI{enter}")
                cy.get('.panel > .pull-right > :nth-child(2)').click()
                cy.wait(50000)
                cy.get(':nth-child(1) > .ui-selection-column > p-dtradiobutton.ng-star-inserted > .ui-radiobutton > .ui-radiobutton-box').click()
                cy.wait(80000)
            })

            it("Credit Appraisal by Account Officer", () => {
                // // Conditions
                // cy.get(':nth-child(4) > a > .ui-tabview-title').click()
                // cy.wait(10000)
                // cy.get('app-credit-condition > :nth-child(1) > .col-md-6 > .form-control').select(1)
                // cy.wait(4000)
                // // Add New
                // cy.get('app-credit-condition > :nth-child(5) > .form-horizontal > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > [style="width: 110px;"] > .ui-column-title > .pull-right > .ui-button')
                // .click()
                // cy.wait(4000)
                // cy.get('#condition').type("Good.")
                // cy.wait(500)
                // cy.get('#condition-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-untouched > .panel-footer > .row > .col-md-12 > .btn-success')
                // .click()        
                // cy.wait(10000)

                // // Transaction Dynamics
                // cy.get(':nth-child(5) > a > .ui-tabview-title').click()
                // cy.wait(5000)
                // cy.get('app-transaction-dynamics > :nth-child(1) > .col-md-6 > .form-control').select(1)
                // cy.wait(6000)
                
                // // Add New
                // cy.get('app-transaction-dynamics > :nth-child(5) > .form-horizontal > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > [style="width: 110px;"] > .ui-column-title > .pull-right > .ui-button')
                // .click()
                // cy.wait(10000)
                // cy.get('#dynamics').type("Good.")
                // cy.wait(500)
                // cy.get('.ng-invalid.ng-dirty > .panel-body > .form-horizontal > :nth-child(3) > .col-md-6 > .checkbox-container > #isExternal')
                // .check()
                // cy.wait(500)
                // cy.get('#position').type("046")
                // cy.wait(500)
                // cy.get('#dynamics-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success')
                // .click()
                // cy.wait(15000)
                  
                // Approval Memorandum
                cy.get(':nth-child(9) > a > .ui-tabview-title').click()
                cy.wait(10000)

                // Select Document Section
                // cy.get('#sectionId').select(5)
                // cy.wait(50000)

                // Load Template
                cy.get('.form-group > .btn-warning').click()
                cy.wait(6000)

                // Select Teplate
                cy.get('#creditTemplateId').select(1)
                cy.wait(8000)
                
                // Save
                cy.get('#append-modal > div > div.ui-dialog-content.ui-widget-content > div > form > div.panel-footer > div > div > button')
                .click()
                cy.wait(10000)

                // Application Information
                cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[2]/a/span').click()
                cy.wait(10000)

                // OnLending CheckBox
                cy.get('#isOnLending').check()
              

                // Selecting Approver
                cy.get(':nth-child(20) > .panel-body > .btn-default').click()
                cy.wait(12000)

                // Searching Approver
                cy.get('#search').type("roy")
                cy.wait(7000)

                // Pick the staff
                cy.get('.col-md-12 > .table > tbody > tr > :nth-child(1)').click()
                cy.wait(7000)

                // Submit Button
                cy.get('.panel-body > .btn-success').click()
                cy.wait(2000)

                // Comment
                cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment')
                .type("pass")
                cy.wait(2000)

                // Save and Send
                cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success')
                .click()
                cy.wait(47000)
                cy.get('.swal2-confirm').click()
                cy.wait(30000)
                cy.get('.swal2-confirm').click()
            })
        })
})
