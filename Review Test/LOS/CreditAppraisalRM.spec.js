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
    it('Credit Appraisal RM', () => {
//credit appraisal RM
cy.wait(10000)
cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
cy.wait(10000)
cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-22 > span.ng-tns-c5-22').click();
cy.wait(10000)
cy.get(':nth-child(5) > .ripplelink > .ng-tns-c5-23').click();
cy.wait(10000)

cy.get('.pull-right > #searchString').type('1323949422806');
cy.wait(10000)
cy.get('.panel > .pull-right > :nth-child(2)').click();
cy.wait(10000)
cy.get('.ui-radiobutton-box').dblclick();
cy.wait(20000)
cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[3]/a/span').click();
cy.wait(20000)
cy.get('.form-group > .btn-warning').click();
cy.wait(10000)
cy.get('#creditTemplateId').select(2);
cy.wait(20000)
cy.xpath('//*[@id="append-modal"]/div/div[2]/div/form/div[2]/div/div/button').click();
cy.wait(10000)
cy.get('#sectionId').select(1);
cy.wait(10000)

cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[4]/a').click();
cy.wait(20000)
cy.get('.row > .form-horizontal > :nth-child(1) > .col-md-8 > .form-control').type('okay');
cy.wait(10000)
cy.get('.row > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control').attachFile("offer letter.docx");
cy.wait(10000)
cy.get('.col-md-4 > .btn').click();
cy.wait(10000)
cy.get('.swal2-confirm').click();
cy.wait(10000)
cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[2]/a').click();
cy.wait(10000)
cy.get('.panel-body > .hidden-xs > :nth-child(3)').click();
cy.wait(10000)
cy.get('#comment').type('okay');
cy.wait(10000)
cy.get('.fullScreen > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
cy.wait(20000)
cy.get('.swal2-confirm').click();
cy.wait(20000)
cy.get('.swal2-confirm').click();
cy.wait(20000)
cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
cy.wait(20000)
cy.get('.swal2-confirm').click();
});
});