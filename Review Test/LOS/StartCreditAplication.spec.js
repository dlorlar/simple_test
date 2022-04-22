/// <reference types="cypress" />
describe('Automation Practice Test', () => {
    it('Navigate to url', () => {
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    it(" log in", () => {
        cy.get('#auth-name').type('SN019641');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click();
        cy.wait(10000)
    })
    it('Start credit Application', () => {


        //cy.get('#menu-button > i').click();
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-22 > span.ng-tns-c5-22').click();
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-23').click();
        cy.wait(8000)
        cy.get('#startLoanTypeId').select(1);
        cy.get('.card > .panel > .panel-footer > .row > .col-md-12 > .btn').click();
        cy.get('.col-md-4 > #search').type('mai');
        cy.wait(20000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(8000)
        cy.get('.hidden-xs > .ng-star-inserted > .btn-primary').click();
        cy.wait(10000)
        cy.get('.ui-button-text-only > .ui-button-text').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-72 > .ui-dialog > .ui-dialog-content > .panel > .panel-heading > .row > .pull-right > .close').click();
        cy.get('.panel-footer > .row > .col-md-12 > div > .ui-button-text-icon-left').click();
        //select Application type
        cy.wait(10000)
        cy.get('#productClassProcessId').select(1);
        cy.wait(10000)
        cy.get('.card > .panel > .ng-invalid > .panel-footer > .row > .col-md-12 > .btn').click();
        cy.wait(10000)
        cy.get('#requireCollateralTypeId').select(3);
        cy.wait(10000)
        cy.get('#productClassId').select(8);
        cy.wait(10000)
        cy.get('#businessUnit').select(3);
        cy.wait(10000)
        cy.get('#loanPreliminaryEvaluationId').select(2);
        cy.wait(10000)
        cy.get('#regionId').select(11);
        cy.wait(10000)
        cy.get(':nth-child(6) > .ui-button-info > .ui-button-text').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-92 > .ui-dialog > .ui-dialog-content > .panel-body > .form-horizontal > .form-group > div.col-md-12 > .form-control').type('36061');
        cy.wait(10000)
        cy.get('.form-group > :nth-child(1) > .btn').click();
        cy.wait(20000)
        cy.get(':nth-child(2) > .btn').click({force: true});
        cy.wait(10000)
        cy.get(':nth-child(3) > .ui-button-info > .ui-button-text').click();
        cy.wait(10000)
        cy.get('#proposedProductId').select(2);
        cy.wait(10000)
        cy.get('#productDetailId').select(2);
        cy.wait(10000)

        cy.get('#isLineFacility').select(1);
        cy.wait(10000)
        cy.get(':nth-child(1) > .form-control').type('90');
        cy.wait(10000)
        cy.get('#proposedAmount').type('3m');
        cy.wait(10000)
        cy.get('#crmsFundingSourceId').select(8);
        cy.wait(10000)
        cy.get('#loanPurpose').type('ok');
        cy.wait(10000)
        cy.get('#repaymentDate').type('ok');
        cy.wait(10000)
        cy.get('#operatingCasaAccountId').select(2);
        cy.wait(10000)
        cy.get('#facilityDetailTypeId').select(4);
        cy.wait(10000)
        cy.get('#loantakefeetypeid').select(1);
        cy.wait(10000)
        cy.get('#sectorId').select(10);
        cy.wait(10000)
        cy.get('#subSectorId').select(2);
        cy.wait(10000)
        cy.get('#proposedInterestRate').select(1);
        cy.wait(10000)
        cy.get('#currencyId').select(1);
        cy.wait(10000)
        cy.get('#crmsPaymentSourceId').select(5);
        cy.wait(10000)
        cy.get('#repaymentTerm').type('ok');
        cy.wait(10000)
        cy.get('#apr').type('500');
        cy.get('.pull-right > .ui-button-text').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(50000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.btn-success').click();
        cy.wait(50000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        //   cy.get('app-eligibility-requirements.ng-star-inserted > :nth-child(1) > .ui-g-12 > .panel > .panel-body').click();
        //   cy.wait(50000)
        //   cy.get('.cyan-btn > .ui-button-text').click();
        //   cy.get('#jobTypeId').select(3);
        //   cy.get('#jobSubTypeId').select(2);
        //   cy.get('#departmentUnitId').select(1);
        //   cy.get(':nth-child(2) > .btn').click();
    });
})