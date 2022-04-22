// Last Stage - Disbursement

/// <reference types = "cypress" />

describe ('FILLING STAGE', () =>{
    
    it("Logging Into the App", () =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000 })
        cy.wait(50000)
    })

    it("CRM Filling Officer_Login", () => {
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("anurugwof")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(25000)  
    })

    it("Flag Off", () => {
        // Credit Tab
        cy.xpath('/html/body/app-root/app-main/div/div/div[1]/div/div[1]/app-menu/ul/li[4]/a').click()
        cy.wait(2000)
        // Credit Origination
        cy.xpath('/html/body/app-root/app-main/div/div/div[1]/div/div[1]/app-menu/ul/li[4]/ul/li[1]/a').click()
        cy.wait(2000)
        // Credit Documentation
        cy.xpath('/html/body/app-root/app-main/div/div/div[1]/div/div[1]/app-menu/ul/li[4]/ul/li[1]/ul/li[2]/a').click()
        cy.wait(77000)
        // Flag Off
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/app-credit-documentation-los/div/div/div/div/div[3]/div/div/p-datatable/div/div[2]/table/tbody/tr[1]/td[14]/span[2]/button')
        .click()
        cy.wait(2000)
        // Confirm buttons
        cy.get('.swal2-confirm').click()
        cy.wait(30000)
        cy.get('.swal2-confirm').click()

    })

})