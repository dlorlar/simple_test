/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    it(" Availment", ()=> {
        //Availment Officer 1284636314666   1319200771384
        cy.get('#auth-name').type('SN023919');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-13 > span.ng-tns-c5-13').click();
        cy.wait(10000)
        cy.get(':nth-child(6) > .ripplelink > .ng-tns-c5-14').click();
        cy.wait(10000)
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div[1]/div/div[1]/div/div[2]/div/p-datatable/div/div[1]/table/thead/tr/th[3]/input').type('1323426982337').should('be.visible');
        cy.wait(10000)
        cy.get('.ui-cell-data > .ng-star-inserted').click();
        cy.wait(10000)
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div[1]/div/div/div/form/div[1]/div/p-tabview/div/ul/li[4]/a/span').click();
        cy.wait(10000)
        cy.get('.hidden-xs > .btn-group > .btn').click();
        cy.wait(10000)
        cy.get('.hidden-xs > .btn-group > .dropdown-menu > :nth-child(4) > a').click();
        cy.wait(10000)
        cy.xpath('//*[@id="create-edit-modal"]/div/div[2]/div/div[2]/div/div/div/div/p-datatable/div/div[1]/table/tbody/tr[1]/td[5]/span[2]/label').click();
        cy.wait(10000)
        cy.xpath('//*[@id="create-edit-modal"]/div/div[2]/div/div[2]/div/div/div/div/p-datatable/div/div[1]/table/tbody/tr[2]/td[5]/span[2]/label').click();
        cy.wait(10000)
        cy.xpath('//*[@id="create-edit-modal"]/div/div[2]/div/div[2]/div/div/div/div/p-datatable/div/div[1]/table/tbody/tr[3]/td[5]/span[2]/label').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-62 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get(':nth-child(2) > :nth-child(9) > .ui-cell-data > div.ng-star-inserted > a.ng-star-inserted').click();
        cy.wait(10000)
        cy.get('.pull-right > :nth-child(2) > .btn').click();
        cy.wait(10000)
        cy.get('.col-md-8 > #comment').type('okay');
        cy.wait(10000)
        cy.get(':nth-child(10) > .ui-cell-data > .ng-star-inserted').click();
        cy.wait(10000)
        cy.get('#crmsRepaymentTypeId').select(4);
        cy.wait(10000)
        cy.get('#moratoriumPeriod').type('30').should('be.visible');
        cy.wait(10000)
        cy.get('#collateralPresent').check();
        cy.wait(10000)
        cy.get('#securedByCollateral').check();
        cy.wait(10000)
        cy.get('#crmsCollateralTypeId').select(4);
        cy.wait(10000)
        cy.get('#loan-crms-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-23 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();   
     })
     })