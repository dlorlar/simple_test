class EDMS{
    domain(){
        return cy.get('#inputgroup')
    }
    username(){ 
        return cy.get(':nth-child(1) > .p-float-label > #inputgroup')
    }
    password(){ 
        return cy.get('#pwd')
    }
    signin(){ 
        return cy.get('.p-button')
    }
}
export default EDMS