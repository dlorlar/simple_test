
// Last Stage - BOOKING 2 - CREDITAVAILMENT_DOCUMENTATION

/// <reference types="Cypress"/>

describe ('DISBURSEMENT_CREDIT OPERATION AUTHORIZER', () =>{

    it("Login into the APP", () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000})
        cy.wait(50000)
    })

    it("Credit Operations Authorizer Login ", () =>{
       
        // Login Into Credit Operations Authorizer Account
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("etukenom")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(50000)
        // passcode
        cy.xpath('//*[@id="twoFactorAuthPassCode"]').type("1234456")
        cy.wait(1000)
        // Authenticate
        cy.xpath('//*[@id="auth-token"]/div/div[2]/div/div[2]/div/div/div/div/button').click()
        cy.wait(15000)
        // Confirm Button
        cy.xpath('/html/body/div[2]/div/div[10]/button[1]').click()
        cy.wait(7000)

    })

    it("Booking Submission", () => {
        // Approval Tab
        cy.xpath('/html/body/app-root/app-main/div/div/div[1]/div/div[1]/app-menu/ul/li[2]/a/span').click()
        cy.wait(1000)
        // Credit Tab
        cy.xpath('/html/body/app-root/app-main/div/div/div[1]/div/div[1]/app-menu/ul/li[2]/ul/li[2]/a').click()
        cy.wait(1000)
        // Disbursement
        cy.xpath('/html/body/app-root/app-main/div/div/div[1]/div/div[1]/app-menu/ul/li[2]/ul/li[2]/ul/li[2]/a').click()
        cy.wait(65000)
        // Picking the loan
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/loan-disbursement/div/div/div[1]/div/div[3]/div/div/p-datatable/div/div[1]/table/tbody/tr[1]/td[1]/p-dtradiobutton/div/div[2]').click()
        cy.wait(40000)
        // Comment
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/loan-disbursement/div/div/div[1]/div/div[3]/div/form/p-tabview/div/div/p-tabpanel[1]/div/p-accordion/div/p-accordiontab[1]/div[2]/div/table/tbody/tr[8]/td[2]/textarea')
        .type("Labaster")
        cy.wait(1000)
        // Status
        cy.xpath('//*[@id="approvalStatus"]').select(1)
        cy.wait(1000)
        // Submit Booking
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/loan-disbursement/div/div/div[1]/div/div[3]/div/form/div/div/div/button[3]').click()
        cy.wait(5000)
        // Confirm buttons
        cy.get('.swal2-confirm').click()
        cy.wait(30000)
        cy.get('.swal2-confirm').click()

    })
  // next stage - LOS Filling
})

