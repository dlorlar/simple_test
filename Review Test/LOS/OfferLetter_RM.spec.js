/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    it(" offer Letter", ()=> { 
                // offer letter RM
                cy.get('#auth-name').type('SN019641');
                cy.get('#auth-password').type('testing');
                cy.get('.col-xs-12 > .btn').click(); 
                cy.wait(10000)
                cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
                cy.wait(10000)
                cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-22 > span.ng-tns-c5-22').click();
                cy.wait(10000)
                cy.get(':nth-child(16) > .ripplelink > .ng-tns-c5-23').click();
                cy.wait(10000)
                cy.get('.panel-body > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > :nth-child(1) > .ui-column-filter').type('1323426982337');
                cy.wait(10000)
                cy.get('.ui-cell-data > .ng-star-inserted > a').click();
                cy.wait(20000)
                cy.get('.btn-group > :nth-child(2)').click();
                cy.wait(10000)
                cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/p-dialog[5]/div/div[2]/div/div[2]/div/div/div/textarea').type('okay').should('be.visible');
                cy.wait(10000)
                cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/p-dialog[5]/div/div[2]/div/div[3]/div/div/button[1]').click();
                cy.wait(10000)
                cy.get('.swal2-confirm').click();
                cy.wait(20000)
                cy.get('.swal2-confirm').click();
                cy.wait(10000)
                cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
                cy.wait(10000)
                cy.get('.swal2-confirm').click();
        
            })
        });