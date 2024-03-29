describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')




    cy.get('[data-testid=query-input]').click();
    cy.get('[data-testid=category]').eq(0).click();
    cy.get('[data-testid=product-add-to-cart]').eq(1).click();
    cy.get('[data-testid=product-add-to-cart]').eq(2).click();









  })
})