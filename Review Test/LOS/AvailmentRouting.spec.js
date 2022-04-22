/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    it("Availment Routing ", ()=> {
         
        cy.get('#auth-name').type('SN021557');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-21 > span.ng-tns-c5-21').click();
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-22 > span.ng-tns-c5-22').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c5-23').click();
        cy.wait(10000)
        cy.get(':nth-child(4) > .ui-column-filter').type('1323426982337').should('be.visible');
        cy.wait(10000)
        cy.get('.ui-tabview-panel > :nth-child(1) > .panel > .panel-body > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > .ui-datatable-even > .ui-selection-column > p-dtradiobutton.ng-star-inserted > .ui-radiobutton > .ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .btn').click();
        cy.wait(10000)
        cy.get('#search').type('SN023919').should('be.visible');
        cy.wait(10000)
        cy.get('.table > tbody > .ng-star-inserted > :nth-child(1)').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-31 > .ui-dialog > .ui-dialog-content > .panel-footer > .form-horizontal > .form-group > .col-md-12 > .btn-success').click();
        cy.wait(20000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.wait(10000)
        cy.get('.swal2-confirm').click();  
    })
});