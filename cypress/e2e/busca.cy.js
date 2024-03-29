describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')


    cy.get('[data-testid=query-input]').click();
    cy.get('[data-testid=query-input]').type('{backspace}');
    cy.get('[data-testid=query-input]').type('estojo');
    cy.get('[data-testid=query-button]').click();
    cy.get('[data-testid=query-input]').click();
    cy.get('[data-testid=query-input]').type('mochila');
    cy.get('[data-testid=query-button]').click();







  })
})