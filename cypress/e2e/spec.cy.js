beforeEach(() => {
  cy.visit('http://127.0.0.1:5173/');
});


describe('Users Feed Page', () => {
  it('should display a user with the name "Leanne Graham" in the feed', function () {
    cy.contains('Leanne Graham').should('be.visible');
  });

  it('should show comments when clicking on "Show Comments"', function () {
    cy.contains('Show comments').first().click();

    cy.contains('id labore ex et quam laborum').should('be.visible');
  });
});