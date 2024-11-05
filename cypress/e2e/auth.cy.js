describe("Authentication Flow", () => {
  const email = "testuser2@example.com";
  const password = "Password123";

  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Adjust this if your localhost port or base URL differs
  });

  it("should successfully sign up with correct information", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("input[type='email']").type(email);
    cy.get("input[type='password']").type(password);
    cy.get("button[type='submit']").click();

    cy.contains("User signed up successfully").should("be.visible");
  });

  it("should show error when signing up with an existing email", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("input[type='email']").type(email);
    cy.get("input[type='password']").type(password);
    cy.get("button[type='submit']").click();

    cy.contains("User already exists").should("be.visible");
  });

  it("should successfully sign in with correct credentials", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("input[type='email']").type(email);
    cy.get("input[type='password']").type(password);
    cy.get("button[type='submit']").click();

    cy.contains("User signed in successfully").should("be.visible");
  });

  it("should show error for correct email and wrong password", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("input[type='email']").type(email);
    cy.get("input[type='password']").type("WrongPassword");
    cy.get("button[type='submit']").click();

    cy.contains("Invalid email or password").should("be.visible");
  });

  it("should show error for wrong email and correct password", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("input[type='email']").type("wronguser@example.com");
    cy.get("input[type='password']").type(password);
    cy.get("button[type='submit']").click();

    cy.contains("Invalid email or password").should("be.visible");
  });
});
