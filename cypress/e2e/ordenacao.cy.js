describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')



    cy.get('.Home_productsContainer__d4p4L').click();
    cy.get('[data-testid=category]').eq(0).click();
    cy.get('#order').trigger('click');
    cy.get('#order').type('sale');
    cy.get('#order').trigger('click');
    cy.get('#order').trigger('click');
    cy.get('#order').type('desc');
    cy.get('#order').trigger('click');
    cy.get('#order').trigger('click');
    cy.get('#order').type('asc');
    cy.get('#order').trigger('click');






  })
})