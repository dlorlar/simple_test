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
    it('Start credit Application', () => {
        
        cy.get('#menu-button > i').click();
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
          cy.get(':nth-child(2) > .btn').click();
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

          cy.get('app-eligibility-requirements.ng-star-inserted > :nth-child(1) > .ui-g-12 > .panel > .panel-body').click();
          cy.wait(50000)
          cy.get('.cyan-btn > .ui-button-text').click();
          cy.get('#jobTypeId').select(3);
          cy.get('#jobSubTypeId').select(2);
          cy.get('#departmentUnitId').select(1);
          cy.get(':nth-child(2) > .btn').click();
          
        // credit application  1322197539243 
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-22 > span.ng-tns-c5-22').click();
        cy.get(':nth-child(4) > .ripplelink > .ng-tns-c5-23').click();

            // cy.get(':nth-child(4) > .ripplelink > .ng-tns-c5-23').click();
             cy.wait(10000)
             cy.get(':nth-child(4) > .ui-column-filter').type('1322197539243');
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
             cy.get('//*[@id="create-edit-modal"]/div/div[2]/div/div[2]/div/div/div/p-datatable/div/div[1]/table/tbody/tr/td[3]/span[2]/label').click();
             cy.wait(20000)
             cy.get('p-dialog.ng-tns-c1-68 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn').click();
             cy.wait(20000)
             cy.get(':nth-child(5) > :nth-child(1) > .col-md-12 > .btn-success').click();
             cy.wait(20000)

             //credit appraisal RM
             cy.wait(10000)
             cy.get(':nth-child(5) > .ripplelink > .ng-tns-c5-23').click();
             cy.get('.pull-right > #searchString').type('1284979759072');
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
             cy.get('.swal2-confirm').click();
             cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div/div/div/p-tabview/div/ul/li[2]/a').click();
             cy.get('.panel-body > .hidden-xs > :nth-child(3)').click();
             cy.get('#comment').type('okay');
             cy.get('.fullScreen > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
             cy.wait(20000)
             cy.get('.swal2-confirm').click();
             cy.wait(20000)
             cy.get('.swal2-confirm').click();
             cy.wait(20000)
             cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
             cy.wait(20000)
             cy.get('.swal2-confirm').click();
            

    })
    // credit appraisal BM
    it(" Credit Appraisal", ()=> {
        cy.get('#auth-name').type('SN017882');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)  
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-23 > span.ng-tns-c5-23').click();
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink > .ng-tns-c5-24').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1321779172263');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('#comment').type('okay');
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

       // credit appraisal BDM
        cy.get('#auth-name').type('SN023165');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)  
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-19 > span.ng-tns-c5-19').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c5-20').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1321779172263');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('#comment').type('okay');
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

        //credit appraisal Group Head
        cy.get('#auth-name').type('SNo22132');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000) 
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000) 
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-19 > span.ng-tns-c5-19').click();
        cy.wait(10000) 
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c5-20').click();
        cy.wait(10000) 
        cy.get('.pull-right > #searchString').type('1321779172263');
        cy.wait(10000) 
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000) 
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000) 
        cy.get('.panel-body > .hidden-xs > :nth-child(2)').click();
        cy.wait(10000) 
        cy.get('#comment').type('okay');
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
        cy.get('#searchString').type('1284979759072');
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
        cy.get('.pull-right > #searchString').type('1284979759072');
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

        //Credit appraisal Head of Unit
        cy.get('#auth-name').type('SN023387');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-19 > span.ng-tns-c5-19').click();
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-20').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1284979759072');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(4)').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > :nth-child(2) > #comment').type('okay').should('be.visible');
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

        //credit appraisal HCAP
        cy.get('#auth-name').type('SN024382');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-19 > span.ng-tns-c5-19').click();
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-20').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1284979759072');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(4)').click();
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

        //Credit appraisal Line Excecutive/ Group Head 1284979759072
        cy.get('#auth-name').type('sn025599');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-16 > span.ng-tns-c5-16').click();
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-17').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1282369929778');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(4)').click();
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

        // Credit Appraisal DMD
        cy.get('#auth-name').type('SN027652');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-16 > span.ng-tns-c5-16').click();
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-17').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1284979759072');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(2)').click();
        cy.wait(10000)
        cy.xpath('//*[@id="comment"]').type('okay').should('be.visible');
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

        //CRO 1321779172263
        cy.get('#auth-name').type('SN027522');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-35 > span.ng-tns-c5-35').click();
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-36').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1293175112176');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(4)').click();
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

        // MD
        cy.get('#auth-name').type('SN026520');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-18 > span.ng-tns-c5-18').click();
        cy.wait(10000)
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-19').click();
        cy.wait(10000)
        cy.get('.pull-right > #searchString').type('1293175112176');
        cy.wait(10000)
        cy.get('.panel > .pull-right > :nth-child(2)').click();
        cy.wait(10000)
        cy.get('.ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .hidden-xs > :nth-child(4)').click();
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
        cy.get('.panel > .panel-body > p-datatable > .ui-datatable > p-paginator.ng-star-inserted > .ui-paginator-bottom > .ui-paginator-last').click();
        cy.get(':nth-child(7) > [style="width: 120px;"] > .ui-cell-data > .ng-star-inserted').click();
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
        cy.get('select.ng-star-inserted').select(1);
        cy.wait(10000)
        cy.xpath('//*[@id="comment"]').type('okay').should('be.visible');
        cy.wait(10000)
        cy.get('#vote').select(2);
        cy.wait(10000)
        cy.get(':nth-child(4) > .col-md-2 > .btn').click();
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
        cy.get('#searchString').type('1284636314666');
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

    it(" offer Letter", ()=> { 
         
        cy.get('#auth-name').type('SN024458');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-23 > span.ng-tns-c5-23').click();
        cy.wait(10000)
        cy.get(':nth-child(7) > .ripplelink > .ng-tns-c5-24').click();
        cy.wait(10000)
        cy.get('.ui-button-text').click();
        cy.wait(10000)
        cy.get('#searchString').type('1293175112176').should('be.visible');
        cy.wait(10000)
        cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.ui-cell-data > .ng-star-inserted > a').click();
        cy.wait(10000)
        cy.get('#isFinalOfferLetter').check();
        cy.wait(10000)
        cy.get(':nth-child(3) > .row > .col-md-12 > :nth-child(3)').click();
        cy.wait(10000)
        cy.get('#offerletterTemplateId').select(13);
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-29 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-32 > .ui-dialog > .ui-dialog-content > .panel-footer > .row > .col-md-12 > .btn').click();
        cy.wait(10000)
        cy.xpath('/html/body/app-root/app-main/div/div/div[2]/ng-component/div[1]/div/div/div/div[3]/div/div/button[2]').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-36 > .ui-dialog > .ui-dialog-content > .panel > .form-horizontal > .panel-body > .form-group > .col-md-8 > .form-control').type('okay').should('be.visible');
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-36 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click();
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.get('.swal2-confirm').click();

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
        cy.get('.panel-body > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > :nth-child(1) > .ui-column-filter').type('1312046911870');
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

    it("Availment Routing ", ()=> {
         
        cy.get('#auth-name').type('SN021557');
        cy.get('#auth-password').type('testing');
        cy.get('.col-xs-12 > .btn').click(); 
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-21 > span.ng-tns-c5-21').click();
        cy.wait(10000)
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c5-22 > span.ng-tns-c5-22').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c5-23').click();
        cy.wait(10000)
        cy.get(':nth-child(4) > .ui-column-filter').type('1319200771384').should('be.visible');
        cy.wait(10000)
        cy.get('.ui-tabview-panel > :nth-child(1) > .panel > .panel-body > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > .ui-datatable-even > .ui-selection-column > p-dtradiobutton.ng-star-inserted > .ui-radiobutton > .ui-radiobutton-box').dblclick();
        cy.wait(10000)
        cy.get('.panel-body > .btn').click();
        cy.wait(10000)
        cy.get('#search').type('SN023919').should('be.visible');
        cy.wait(10000)
        cy.get('.table > tbody > .ng-star-inserted > :nth-child(1)').click();
        cy.wait(10000)
        cy.get('p-dialog.ng-tns-c1-31 > .ui-dialog > .ui-dialog-content > .panel-footer > .form-horizontal > .form-group > .col-md-12 > .btn-success').click();
        cy.wait(20000)
        cy.get('.swal2-confirm').click();
        cy.wait(10000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click();
        cy.wait(10000)
        cy.wait(10000)
        cy.get('.swal2-confirm').click();  
    })

    it(" ", ()=> {
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
   cy.get('.panel-body > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > :nth-child(3) > .ui-column-filter').type('1284636314666').should('be.visible');
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

