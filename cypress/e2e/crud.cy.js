describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')





    cy.get('.Home_productsContainer__d4p4L').click();
    cy.get('[data-testid=category]').eq(0).click();
    cy.get('[data-testid=product-add-to-cart]').eq(1).click();
    cy.get('.Header_navButton__am0W2 > svg').click();
    cy.get('.MenuBar_itensCart__rMIJH:nth-child(1)').click();
    cy.get('.MenuBar_deleteItem__CgeRa > path').click();
    cy.get('.MenuBar_close__TPIA1').click();










  })
})