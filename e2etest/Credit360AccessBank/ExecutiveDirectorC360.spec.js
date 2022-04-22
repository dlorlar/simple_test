///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
        //git
    })

    it('Ensure user can Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('etuokwuv')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(7000)
    })

    it('Credit Appraisal', () => {
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-11 > span.ng-tns-c3-11').click()
        cy.get('.ripplelink > .ng-tns-c3-12').click()
        cy.wait(15000)
        cy.get('.ui-radiobutton-box').click()
        cy.wait(150000)
    })

    it('Accept', () => {
        cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(3) > a > .ui-tabview-title').click()
        cy.get('.panel-body > .btn-success').click()
        cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Sunny day')
        cy.get('#vote').select('Accept').should('be.visible', 'Accept')
        cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(100000)
        cy.get('.swal2-confirm').click()
        cy.wait(250000)
        cy.screenshot()
        cy.get('.swal2-confirm').click()
        cy.wait(50000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click() //Logout
        //Escalate
        // cy.get('.panel-body > .btn-warning').click()
        // cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Sunny day')
        // cy.get('#vote').select('Accept').should('be.visible', 'Accept')
        // cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        // cy.wait(100000)
        // cy.get('.swal2-confirm').click()
        // cy.wait(250000)
        // cy.screenshot()
        // cy.get('.swal2-confirm').click()
        // cy.wait(50000)
        // cy.get('[width="100%"] > :nth-child(2) > .material-icons').click() //Logout

    })
})