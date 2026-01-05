
Cypress.Commands.add("WaitHome", () => {
    cy.intercept(
        "POST",
        "**/wp-content/plugins/litespeed-cache/guest.vary.php"
    ).as("liteSpeed");

    cy.wait("@liteSpeed");
});