/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    
    it(" Credit Appraisal", ()=> {
        //credit appraisal Credit Analyst
        cy.get('#auth-name').type('SN024441');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000) 
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-18 > span.ng-tns-c5-18').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c5-19').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1323426982337');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('app-collateral-recommendation > .panel.ng-star-inserted > .panel-heading > .row > .col-md-12 > .pull-right > .ui-button > .ui-button-text').click();
        cy.get('#collateralDetail').type('okay');
        cy.wait(10000)
        cy.get('#collateralCurrency').select(4);
        cy.wait(10000)
        cy.get('#collateralValue').type('3000000');
        cy.wait(10000)
        cy.get('#stampedToCoverAmount').type('3000000');
        cy.wait(10000)
        cy.get('#forcedSaleValue').type('3000000');
        cy.wait(10000)
        cy.get('#openMarketValue').type('3000000');
        cy.wait(10000)
        cy.get('#tstc').type('3000000');
        cy.wait(10000)
        cy.get('form.ng-touched > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('[style="width: 50px;"] > .ui-cell-data > .ng-star-inserted > a').click();
        cy.wait(10000)
        cy.get('#nextReviewDate > .ui-calendar > .ui-datepicker-trigger > .ui-button-icon-left').click();
        cy.wait(10000)
        cy.get('.ui-datepicker-today > .ui-state-default').click();
        cy.wait(10000)
        cy.xpath('//*[@id="terms-modal"]/div/div[2]/div/form/div[2]/div/div/button[1]').click();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(2)').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > :nth-child(2) > #comment').type('okay').should('be.visible');
        cy.wait(10000)
        cy.get('#vote').select(2);
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