describe("Checking chat", function() {
  let chat = {
    senderEmail: "mail@mail.mail",
    senderAlias: "parent",
    firstPage: {
      items: []
    }
  };
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://mock/chat",
      response: chat
    });
    cy.visit("http://localhost:4200/chat");
  });

  it("has a propper email", () =>
    cy
      .get(".chat")
      .find(".email")
      .first()
      .should("contain.text", chat.senderEmail));

  it("has a propper alias", () =>
    cy
      .get(".chat")
      .find(".alias")
      .first()
      .should("contain.text", chat.senderAlias));

  it("has an input field", function() {
    cy.get(".chat")
      .find(".input")
      .first()
      .should("have.attr", "placeholder", "Skriv ett meddelande ...");
  });

  describe("With no items", () => {
    let page = {
      currentPage: 0,
      itemCount: 0,
      pageSize: 10,
      nextUrl: null,
      items: []
    };
    before(() => (chat.firstPage = page));
    it("doesn't have any messages", () =>
      cy
        .get(".chat")
        .find(".message")
        .should("have.length", 0));
  });
  describe("With one item", () => {
    let page = {
      currentPage: 0,
      itemCount: 1,
      pageSize: 10,
      nextUrl: null,
      items: [
        {
          body: "msg",
          timestamp: Math.round(new Date().getTime() / 1000),
          sent: false
        }
      ]
    };
    before(() => (chat.firstPage = page));

    it("has a single message", () =>
      cy
        .get(".chat")
        .find(".message")
        .should("have.length", 1));

    it("has the body of the message set", () =>
      cy
        .get(".chat")
        .find(".message")
        .first()
        .get(".content")
        .get(".text")
        .should("contain.text", page.items[0].body));
  });

  describe("With two recieved items", () => {
    let page = {
      currentPage: 0,
      itemCount: 2,
      pageSize: 10,
      nextUrl: null,
      items: [
        {
          body: "msg1",
          timestamp: Math.round(new Date().getTime() / 1000),
          sent: false
        },
        {
          body: "msg2",
          timestamp: Math.round(new Date().getTime() / 1000),
          sent: false
        }
      ]
    };
    before(() => (chat.firstPage = page));

    it("has two messages", () =>
      cy
        .get(".chat")
        .find(".message")
        .should("have.length", 2));

    it("has two messages with recieved status", () =>
      cy
        .get(".chat")
        .find(".content.recieved")
        .should("have.length", 2));
  });

  describe("With two sent items", () => {
    let page = {
      currentPage: 0,
      itemCount: 2,
      pageSize: 10,
      nextUrl: null,
      items: [
        {
          body: "msg1",
          timestamp: Math.round(new Date().getTime() / 1000),
          sent: true
        },
        {
          body: "msg2",
          timestamp: Math.round(new Date().getTime() / 1000),
          sent: true
        }
      ]
    };
    before(() => (chat.firstPage = page));

    it("has two messages", () =>
      cy
        .get(".chat")
        .find(".message")
        .should("have.length", 2));

    it("has two messages with sent status", () =>
      cy
        .get(".chat")
        .find(".content.sent")
        .should("have.length", 2));
  });

  describe("With one sent and one recieved item", () => {
    let page = {
      currentPage: 0,
      itemCount: 2,
      pageSize: 10,
      nextUrl: null,
      items: [
        {
          body: "msg1",
          timestamp: Math.round(new Date().getTime() / 1000),
          sent: false
        },
        {
          body: "msg2",
          timestamp: Math.round(new Date().getTime() / 1000),
          sent: true
        }
      ]
    };
    before(() => (chat.firstPage = page));

    it("has two messages", () =>
      cy
        .get(".chat")
        .find(".message")
        .should("have.length", 2));

    it("has one message with sent status", () =>
      cy
        .get(".chat")
        .find(".content.sent")
        .should("have.length", 1));
    it("has one message with recieved status", () =>
      cy
        .get(".chat")
        .find(".content.recieved")
        .should("have.length", 1));
  });
});
