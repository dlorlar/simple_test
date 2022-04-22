/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    it(" Credit Appraisal Group Head", ()=> {
        //credit appraisal Group Head
        cy.get('#auth-name').type('SN022132');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000) 
        cy.get(':nth-child(3) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000) 
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-16 > span.ng-tns-c5-16').click();
        cy.wait(10000) 
        cy.get(':nth-child(5) > .ripplelink > .ng-tns-c5-17').click();
        cy.wait(10000) 
        cy.get('.pull-right > #searchString').type('1323426982337');
        cy.wait(10000) 
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000) 
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000) 
        cy.get('.panel-body > .hidden-xs > :nth-child(2)').click();
        cy.wait(10000) 
        cy.get('#comment').type('okay');
        cy.wait(10000) 
        cy.get('.fullScreen > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000) 
        cy.get('.swal2-confirm').click();
        cy.wait(10000) 
        cy.get('.swal2-confirm').click();
        cy.wait(10000) 
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000) 
        cy.get('.swal2-confirm').click();
    });
});