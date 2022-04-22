///<reference types = "cypress" />
describe('Amazon', () => {
    it('Navigate to URL', () => {
        cy.visit('https://www.amazon.in/') 
    })

    it('Ensure user can click on the TV, Appliances and Electronics', () =>{
        cy.get('.hm-icon-label').click({force: true})
        cy.get(':nth-child(16) > .hmenu-item > div').click()
    })

    it('Esure user can click Television', () => {
        cy.get('.hmenu-visible > :nth-child(3) > .hmenu-item').click()
    })

    it('Ensure user can filter by Brands Samsung', () => {
        cy.get(':nth-child(17) > .a-unordered-list > :nth-child(2) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
    })

    it('Ensure user can sort the Samsung results with price High to Low', () => {
        cy.get('.a-dropdown-prompt').click()
        cy.get('#s-result-sort-select_2').click()
    })
    
    it('Ensure user can click on the second higest priced', () => {
        cy.get('[data-asin="B0928N2RV3"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    })
})    