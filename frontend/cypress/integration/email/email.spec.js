describe("Basics", function() {
  before(() => cy.visit("http://localhost:4200/email"));

  it("has an input field", function() {
    cy.get(".email")
      .find(".input")
      .first()
      .should("have.attr", "placeholder", "Skriv ett meddelande ...");
  });
});
