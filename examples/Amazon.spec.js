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
        // cy.get('.hmenu-visible > :nth-child(3) > .hmenu-item').click()
        cy.get(':nth-child(2) > :nth-child(1) > .nav_cat_links > .nav_first > .nav_a').click()
    })

    it('Ensure user can filter by Brands Samsung', () => {
       cy.xpath('/html/body/div[1]/div[2]/div[2]/div[2]/div/div/div[17]/ul/li[3]/span/a/span').should('have.text', 'Samsung').click()
    })

    it('Ensure user can sort the Samsung results with price High to Low', () => {
        cy.get('.a-dropdown-prompt').click()
        cy.get('#s-result-sort-select_2').click()
    })
    
    it('Ensure user can click on the second higest priced', () => {
        cy.get('[data-asin="B0928N2RV3"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    })
    it('Switch the Window', () => {
        cy.visit('https://www.amazon.in/Samsung-Ultra-Smart-QA65QN90AAKLXL-Black/dp/B0928N2RV3/ref=sr_1_2?qid=1649025285&refinements=p_89%3ASamsung&rnid=3837712031&s=electronics&sr=1-2')
        cy.get('#feature-bullets > .a-size-base-plus').should('be.visible', 'About this item')
    })
})    