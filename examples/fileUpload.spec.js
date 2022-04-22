describe('File Upload Test', () => {
    it('File Upload', () => {
        cy.visit('https://encodable.com/uploaddemo/')
    })

    it('Single File Upload', () => {
        cy.get('#uploadname1')
            .attachFile('Sample.pdf');
        cy.get('#newsubdir1').type('Test')  
        cy.get('#uploadbutton').click()
        cy.contains('Your upload is complete')
        .should('be.visible')
        cy.contains('uploaded successfully').should('be.visible')
        
           

    })
})