describe("Basics", function() {
  before(() => cy.visit("http://localhost:4200"));

  it("Title is 'S2'", function() {
    cy.title().should("eq", "S2");
  });
});
