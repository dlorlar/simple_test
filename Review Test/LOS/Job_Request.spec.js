/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    
    it(" job request", ()=> { 
        cy.get('#auth-name').type('tn091176');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c5-15').click();
        cy.wait(10000)
        cy.get(':nth-child(2) > .ng-valid > .ui-calendar > .ui-datepicker-trigger > .ui-button-icon-left').click();
        cy.wait(10000)
        cy.get('.ui-datepicker-next').click();
        cy.wait(10000)
        cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click();
        cy.wait(10000)
        cy.get('#searchString').type('1323426982337');
        cy.wait(10000)
        cy.get(':nth-child(5) > .btn').click();
        cy.wait(10000)
        cy.get('[style="width: 135px;"] > .ui-cell-data > .ng-star-inserted').click();
        cy.wait(10000)
        cy.get('#hubId').select(1);
        cy.wait(10000)
        cy.get('#staffId').select(1);
        cy.wait(10000)
        cy.get(':nth-child(1) > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[style="width: 78px;"] > .ui-cell-data > .ng-star-inserted').click();
        cy.wait(10000)
        cy.xpath('//*[@id="jobreply"]/job-reply-template/div/div[2]/div/p-tabview/div/ul/li[2]/a/span').click();
        cy.wait(10000)
        cy.get('.ql-editor').type('okay').should('be.visible');
        cy.wait(10000)
        cy.get('.panel-body.ng-star-inserted > .panel-footer > .input-group > .input-group-btn > .btn').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();

    })
});