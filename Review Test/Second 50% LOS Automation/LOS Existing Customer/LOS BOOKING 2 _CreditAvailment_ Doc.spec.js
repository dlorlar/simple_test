// Last Stage - Credit Availment_ Documentation. Credit Admin
/// <reference types="Cypress"/>

describe ('BOOKING - AVAILMENT_DOCUMENTATION LEVEL 2', () =>{

    it("Login into the APP", () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/#/auth/login', {failOnStatusCode: false, timeout: 60000})
        cy.wait(50000)
    })

    it("Credit Operation Inputter Account Login ", () =>{
       
        // Login Into Credit_Admin Account
        cy.get(".m-t-60 > .col-xs-12 > .form-control").type("olaniyiab")
        cy.get(":nth-child(3) > .col-xs-12 > .form-control").type("testing")
        cy.get(".col-xs-12 > .btn").click()
        cy.wait(30000)
    })

    it("Navigating to and picking the loan", () => {
        // Credit Tab
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c3-3 > .ng-star-inserted').click()
        cy.wait(1000)
        // Credit Origination Tab
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-14 > .ng-star-inserted').click()
        cy.wait(1000)
        // Booking Tab
        cy.get(':nth-child(5) > .ripplelink > .ng-tns-c3-15').click()
        cy.wait(45000)
        // Viewing the Loan details
        cy.get(':nth-child(1) > [style="width: 38px;"] > .ui-cell-data > .ng-star-inserted > .glyphicon').click()
        cy.wait(60000)
    })

    it("Generate Schedule & BOOKING", () => {
        // Facility Memorandum Tab
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/loan-booking/div/div/div[1]/div/div[3]/div/form/p-tabview/div/ul/li[2]/a/span').click()
        cy.wait(2000)
        // Generate Schedule Tab
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/loan-booking/div/div/div[1]/div/div[3]/div/form/p-tabview/div/ul/li[10]/a/span').click()
        cy.wait(4000)
        // Schedule Method (reducing balance)
        cy.get('.card > .panel > .panel-body > div.form-horizontal > :nth-child(2) > :nth-child(2) > .form-control').select(2)
        cy.wait(2000)

        // Calendar
        // Setting effective date
        cy.get('#loanDate > .ui-calendar > .ui-datepicker-trigger > .ui-button-icon-left').click()
        cy.wait(1000) // Year
        cy.get(".ui-datepicker-year").select("2021")
        cy.wait(1000) // Month
        cy.get('.ui-datepicker-month').select("August")
        cy.wait(1000) // Day
        cy.get("tbody.ng-tns-c4-77 > :nth-child(1) > :nth-child(4) > .ui-state-default").click()
        cy.wait(1000)

        // Interest Frequency
        cy.get('#interestFrequency').select("Monthly")

        // Calendar
        // Maturity Date
        cy.get('#maturityDate > .ui-calendar > .ui-datepicker-trigger > .ui-button-icon-left').click()
        cy.wait(1000) // Year
        cy.get(".ui-datepicker-year").select("2024")
        cy.wait(1000) // Month
        cy.get('.ui-datepicker-month').select("August")
        cy.wait(1000) // Day
        cy.xpath('//*[@id="maturityDate"]/span/div/table/tbody/tr[2]/td[1]/a').click()
        cy.wait(1000)

        // Price Index
        cy.get('#priceIndexId').select("FIXED")
        cy.wait(1000)
        //Principal Frequency
        cy.get('#principalfrequency').select("Monthly")
        cy.wait(1000)
        // Repricing Mode
        cy.get('#repricingModeId').select(2)
        cy.wait(1000)

        // GENERATE SCHEDULE 
        cy.xpath('//*[@id="s-template"]/div/div/div/div/div[2]/form/div[3]/div/button').click()
        cy.wait(20000)
        // Close the confirmatino box
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/loan-booking/fintrakbanking-message/div/div[2]/div[3]/div/a').click()
        cy.wait(1000)
        // Close the schedule details
        cy.xpath('//*[@id="add-modal"]/div/div[2]/div/div[3]/div/div/button').click()
        cy.wait(1000)

        // BOOKING
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/loan-booking/div/div/div[1]/div/div[3]/div/form/div/div/div/button[1]').click()
        cy.wait(10000)
        // Close
        cy.xpath("/html/body/app-root/app-main/div/div/div[2]/loan-booking/fintrakbanking-message/div/div[2]/div[3]/div/a").click()
        
    })    
})
