/// <reference types="cypress" />
describe('Automation Test',()=>{
    it('Navigate to url',()=>{
        cy.visit('http://fintrakcredit360web-fb.azurewebsites.net/#/auth/login?returnUrl=%2Fdashboard')
        cy.wait(1000)
    })
    
    it(" Credit Appraisal", ()=> {
        // MCC
        cy.get('#auth-name').type('SN024362');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-15 > span.ng-tns-c5-15').click();
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink > .ng-tns-c5-16').click();
        cy.wait(10000)
        cy.get('#applicationTypeId').select(1);
        cy.wait(10000)
        cy.get('[style="width: 110px;"] > .ui-column-filter').type('1323426982337');
        cy.wait(10000)
        cy.get('.ui-cell-data > .ng-star-inserted').click();

        //cy.get('.panel > .panel-body > p-datatable > .ui-datatable > p-paginator.ng-star-inserted > .ui-paginator-bottom > .ui-paginator-last').click();
        //cy.get(':nth-child(7) > [style="width: 120px;"] > .ui-cell-data > .ng-star-inserted').click();
        cy.wait(10000)
        
        cy.get(':nth-child(1) > .col-md-8 > .form-control').type('okay').should('be.visible');
        cy.wait(10000)
        cy.get(':nth-child(2) > .col-md-8 > .form-control').attachFile("offer letter.docx");
        cy.wait(10000)
        cy.get('.col-md-4 > .btn').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get(':nth-child(3) > a > .ui-tabview-title').click();
        cy.wait(10000)
        cy.get('select.ng-star-inserted').select(2);
        cy.wait(10000)
        cy.xpath('//*[@id="comment"]').type('okay').should('be.visible');
        cy.wait(10000)
        cy.get('#vote').select(2);
        cy.wait(10000)
        cy.get(':nth-child(4) > .col-md-2 > .btn').click();
        // cy.get('#applicationTypeId').select(1);
        // cy.get('[style="width: 110px;"] > .ui-column-filter').type('1323426982337');
        // cy.get('[style="width: 120px;"] > .ui-cell-data > .ng-star-inserted').click();
        // cy.wait(10000)
        
        // cy.get(':nth-child(1) > .col-md-8 > .form-control').type('okay').should('be.visible');
        // cy.wait(10000)
        // cy.get(':nth-child(2) > .col-md-8 > .form-control').attachFile("offer letter.docx");
        // cy.wait(10000)
        // cy.get('.col-md-4 > .btn').click();
        // cy.wait(10000)
        // cy.get('.swal2-confirm').click();
        // cy.wait(10000)
        // cy.get(':nth-child(3) > a > .ui-tabview-title').click();
        // cy.wait(10000)
        // cy.get('select.ng-star-inserted').select(2);
        // cy.wait(10000)
        // cy.xpath('//*[@id="comment"]').type('okay').should('be.visible');
        // cy.wait(10000)
        // cy.get('#vote').select(2);
        // cy.wait(10000)
        // cy.get(':nth-child(4) > .col-md-2 > .btn').click();

    })

    });
