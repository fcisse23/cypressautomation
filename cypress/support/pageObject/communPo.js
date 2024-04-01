class CommunPo {
  visitPageAccueil() {
    cy.visit(Cypress.env("urlDev"));
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
  }
}
export default CommunPo;
