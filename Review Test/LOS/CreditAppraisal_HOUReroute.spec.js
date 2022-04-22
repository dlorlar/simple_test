/// <reference types="cypress" />
describe('Automation Practice Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    
    it(" Credit Appraisal", ()=> {
        // Credit Appraisal HOU Reroute
        cy.get('#auth-name').type('SN023387');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000) 
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-19 > span.ng-tns-c5-19').click();
        cy.wait(10000)
        cy.get(':nth-child(8) > .ripplelink.ng-tns-c5-20 > span.ng-tns-c5-20').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c5-21').click();
        cy.wait(10000)
        cy.get('#searchString').type('1323426982337');
        cy.wait(10000)
        cy.get('.pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('app-workflow-routing > :nth-child(1) > .panel-body > :nth-child(1)').click();
        cy.wait(10000)
        cy.get('#search').type('SN024441');
        cy.wait(10000)
        cy.get('.table > tbody > .ng-star-inserted > :nth-child(1)').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-25 > .ui-dialog > .ui-dialog-content > .panel-body > form.ng-untouched > .form-horizontal > :nth-child(2) > div.col-md-12 > #comment').type('okay');
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-25 > .ui-dialog > .ui-dialog-content > .panel-footer > .form-horizontal > .form-group > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
    });
});