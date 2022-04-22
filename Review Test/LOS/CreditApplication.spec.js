/// <reference types="cypress" />
describe('Automation Practice Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    it(" log in", ()=> {
        cy.get('#auth-name').type('SN019641');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)   
    })
    it('Credit Application', () => {
        // credit application  1322197539243 
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-22 > span.ng-tns-c5-22').click();
        cy.get(':nth-child(4) > .ripplelink > .ng-tns-c5-23').click();

            // cy.get(':nth-child(4) > .ripplelink > .ng-tns-c5-23').click();
             cy.wait(10000)
             cy.get(':nth-child(4) > .ui-column-filter').type('1323426982337');
             cy.wait(10000)
             cy.get('.ui-radiobutton-box').dblclick();
             cy.wait(10000)
             cy.get('app-eligibility-requirements.ng-star-inserted > :nth-child(1) > .ui-g-12 > .panel > .panel-body').click();
             cy.wait(10000)
             cy.get('.cyan-btn > .ui-button-text').click();
             cy.wait(10000)
             cy.get('#jobTypeId').select(3);
             cy.wait(10000)
             cy.get('#jobSubTypeId').select(2);
             cy.wait(10000)
             cy.get('#departmentUnitId').select(1);
             cy.wait(10000)
             cy.get(':nth-child(2) > .btn').click();
             cy.wait(10000)
             cy.get('#requestSubject').type('ok');
             cy.wait(10000)
             cy.get('.ql-editor').type('okay');
             cy.wait(10000)
             cy.get('.ng-invalid.ng-dirty > p-tabview > .ui-tabview > .ui-tabview-nav').click();
             cy.wait(10000)
             cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click();
             cy.wait(10000)
             cy.get('.swal2-confirm').click();
             cy.wait(10000)
             cy.get('.ui-button-success > .ui-button-text').click();
             cy.wait(10000)
             cy.get('#conditionPrecedent').type('okay');
             cy.wait(10000)
             cy.get('#conditionSubsequent').type('okay');
             cy.wait(10000)
             cy.get('#transactionDynamics').type('okay');
             cy.wait(10000)
             cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click();
             cy.wait(10000)
             cy.get('.swal2-confirm').click();
             cy.wait(20000)
             cy.get('app-loan-checklist > .container > .hidden-xs > .btn-group > .btn').click();
             cy.wait(20000)
             cy.get('app-loan-checklist > .container > .hidden-xs > .btn-group > .dropdown-menu > :nth-child(2) > a').click();
             cy.wait(10000)
             cy.get('p-dialog.ng-tns-c1-68 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn').click();
             cy.wait(20000)
             cy.get('app-loan-checklist > .container > .hidden-xs > .btn-group > .btn').click();
             cy.wait(10000)
             cy.get('.hidden-xs > .btn-group > .dropdown-menu > :nth-child(3) > a').click();
             cy.wait(10000)
             cy.xpath('//*[@id="create-edit-modal"]/div/div[2]/div/div[2]/div/div/div/p-datatable/div/div[1]/table/tbody/tr/td[3]/span[2]/label').click();
             cy.wait(20000)
             cy.get('p-dialog.ng-tns-c1-68 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn').click();
             cy.wait(20000)
             cy.get(':nth-child(5) > :nth-child(1) > .col-md-12 > .btn-success').click();
             cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
    });
});