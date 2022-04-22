class Login{
    email(){
        return cy.get('.m-t-60 > .col-xs-12 > .form-control')
    }
    password(){
        return cy.get(':nth-child(3) > .col-xs-12 > .form-control')
    }
    signin(){
        return cy.get('.col-xs-12 > .btn')
    }
}
export default Login