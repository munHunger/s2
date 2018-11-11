describe("Basics", function() {
  before(() => cy.visit("http://localhost:4200/chat"));

  it("has an input field", function() {
    cy.get(".chat")
      .find(".input")
      .first()
      .should("have.attr", "placeholder", "Skriv ett meddelande ...");
  });
});
