describe('Jumia', () => {
    it('Jumia search', () => {
        cy.visit('https://www.jumia.com.ng/')
    })

    it('Search', () => {
    
        cy.get('#search').within(()=>{
            cy.get('#fi-q').type('Xiaomi Redmi Note 10 pro')
            cy.get('#search > .btn').should('be.visible').click()
            cy.url('/catalog/?q=Xiaomi+Redmi+Note+10+pro').should('be.visible')
        })
           

    })
})