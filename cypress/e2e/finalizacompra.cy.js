describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')





    cy.get('.Home_productsGrid__LlH5u').click();
    cy.get('[data-testid=category]').eq(0).click();
    cy.get('[data-testid=product-add-to-cart]').eq(1).click();
    cy.get('.Header_navButton__am0W2 > svg').click();
    cy.get('.MenuBar_deleteItem__CgeRa').click();
    cy.get('.MenuBar_buttonCheckout__Zh48V').click();
    cy.get('[data-testid=checkout-fullname]').click();
    cy.get('[data-testid=checkout-fullname]').type('{backspace}');
    cy.get('[data-testid=checkout-fullname]').type('{backspace}');
    cy.get('[data-testid=checkout-fullname]').type('Guilherme');
    cy.get('[data-testid=checkout-cpf]').type('08742889910');
    cy.get('[data-testid=checkout-email]').type('{backspace}');
    cy.get('[data-testid=checkout-email]').type('{backspace}');
    cy.get('[data-testid=checkout-email]').type('{backspace}');
    cy.get('[data-testid=checkout-email]').type('guilhermebitt@gmail.com');
    cy.get('[data-testid=checkout-phone]').type('42984442575');
    cy.get('[data-testid=checkout-cep]').type('85195000');
    cy.get('[data-testid=checkout-address]').type('{backspace}');
    cy.get('[data-testid=checkout-address]').type('rua limao');
    cy.get('input:nth-child(8)').type('centro');
    cy.get('input:nth-child(9)').type('01');
    cy.get('input:nth-child(10)').type('gurapuava');
    cy.get('#estado').trigger('click');
    cy.get('#estado').type('Paraná');
    cy.get('#estado').trigger('click');
    cy.get('label:nth-child(3)').click();
    cy.get('#cc').click();










  })
})