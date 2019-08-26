describe("Google test", () => {
    it("visit google and search", () => {
        cy.visit("https://google.com");
        cy.get('[name="q"]').type('Search {enter} ')
        cy.get('[name="q"]').should('have.value', 'Search');
    });
});