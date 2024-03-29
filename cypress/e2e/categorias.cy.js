describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')



    cy.get('[data-testid=category]').eq(0).click();
    cy.get('[data-testid=category]').eq(1).click();
    cy.get('[data-testid=product]').eq(2).click();
    cy.get('[data-testid=category]').eq(3).click();
    cy.get('[data-testid=category]').eq(4).click();




  })
})