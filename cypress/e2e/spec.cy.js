beforeEach(() => {
  cy.visit('http://127.0.0.1:5173/');
});


describe('Users feed page', () => {
  it('should display a user with the name "Leanne Graham" in the feed', function () {
    cy.contains('Leanne Graham').should('be.visible');
  });

  it('should show comments when clicking on the first "Show comments" button', function () {
    cy.contains('Show comments').first().click();

    cy.contains('dignissimos et deleniti voluptate et quod').should('be.visible');
  });
});