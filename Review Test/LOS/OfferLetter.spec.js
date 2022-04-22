/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    it(" offer Letter", ()=> { 
         
        cy.get('#auth-name').type('SN024458');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-24 > span.ng-tns-c5-24').click();
        cy.wait(10000)
        cy.get(':nth-child(7) > .ripplelink > .ng-tns-c5-25').click();
        cy.wait(10000)
        cy.get('.ui-button-text').click();
        cy.wait(10000)
        cy.get('#searchString').type('1323426982337').should('be.visible');
        cy.wait(10000)
        cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.ui-cell-data > .ng-star-inserted > a').click();
        
        cy.wait(10000)
        cy.get(':nth-child(3) > .row > .col-md-12 > :nth-child(3)').click();
        cy.wait(10000)
        cy.get('#offerletterTemplateId').select(14);
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-30 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        
        cy.get('p-dialog.ng-tns-c1-33 > .ui-dialog > .ui-dialog-content > .panel-footer > .row > .col-md-12 > .btn').click();
        cy.wait(10000)
        cy.get('#isFinalOfferLetter').check();
        cy.wait(10000)
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div[1]/div/div/div/div[3]/div/div/button[2]').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-37 > .ui-dialog > .ui-dialog-content > .panel > .form-horizontal > .panel-body > .form-group > .col-md-8 > .form-control').type('okay').should('be.visible');
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-37 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
    });
});
