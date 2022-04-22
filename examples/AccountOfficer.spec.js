///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login') 
    })

    it('Ensure user can Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('abidoyet')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click().should('have.text', 'Log In').and('have.class', 'btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light')
        cy.url().should('include', '/dashboard')
        cy.wait(7000)
    })

    it.skip('Ensure user can start credit application', () => {
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-16 > span.ng-tns-c3-16').click()
        cy.get(':nth-child(6) > .ripplelink > .ng-tns-c3-17').click()
        cy.get('#startLoanTypeId').select('Corporate/SME').should('be.visible', 'Corporate/SME')
        cy.get(':nth-child(3) > .col-md-4 > #startLoanTypeId').select('Single Customer').should("be.visible", 'Single Customer')
        cy.get('.card > .panel > .panel-footer > .row > .col-md-12 > .btn').click()
    })

    it.skip('Search Customer', () => {
        cy.get('.col-md-4 > #search').type('auburn')
        cy.get('.ui-radiobutton-box').click()
    })

    it.skip('Upload Credit Bureau', () => {
        cy.get('.col-md-12 > div > .btn-primary').click()
        cy.get('.ui-datatable-even > :nth-child(8)').click()
        cy.get(':nth-child(1) > :nth-child(3) > .btn').click()
        const fixtureFile = 'Sample.pdf';
            cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control').attachFile(fixtureFile);
            cy.get('div.col-md-4 > .btn').click()
            cy.get('.swal2-confirm').click()
            cy.get('.ui-datatable-even > :nth-child(8)').click()

            cy.get(':nth-child(2) > :nth-child(3) > .btn').click() 
            cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control')
                .attachFile('Sample2.pdf');
            cy.get('div.col-md-4 > .btn').click()
            cy.get('.swal2-confirm').click()
            cy.get('.ui-datatable-even > :nth-child(8)').click()

            cy.get(':nth-child(3) > :nth-child(3) > .btn').click() 
            cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control')
                .attachFile('Sample3.pdf');
            cy.get('div.col-md-4 > .btn').click()
            cy.get('.swal2-confirm').click()
            cy.wait(1000)
    })
})