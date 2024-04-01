class PimPo {
  accesPim() {
    cy.get(".oxd-sidepanel-body").contains("PIM").click();
  }

  modificationInfosUser() {
    cy.get(".oxd-table-body")
      .contains("Cecil")
      .then((infosUser) => {
        cy.wrap(infosUser)
          .parent()
          .siblings()
          .eq(7)
          .find(".bi-pencil-fill")
          .click({ force: true });
      });
  }
  saisiePrenom() {
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").clear().type("Marin");
  }
  clickBoutonSauvegarde() {
    cy.get(
      ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click();
  }
  assertModification() {
    cy.get(".oxd-table-body")
      .contains("Cecil")
      .then((infosUser) => {
        cy.wrap(infosUser).parent().siblings().eq(2).should("contain", "Marin");
      });
  }
  suppressionAvecBoubelle() {
    cy.get(".oxd-table-body")
      .contains("Cecil")
      .then((infosUser) => {
        cy.wrap(infosUser)
          .parent()
          .siblings()
          .eq(7)
          .find(".bi-trash")
          .click({ force: true });
      });
  }
  clickBoutonDelete() {
    cy.get(".oxd-sheet")
      .should(
        "contain",
        "The selected record will be permanently deleted. Are you sure you want to continue?"
      )
      .screenshot("PopUp");

    cy.get(".oxd-sheet").contains("Delete").click();
  }
  assertSuppression() {
    cy.get(".oxd-table-body").contains("Cecil").should("not.be.exist");
  }
  selectionPremiereLigneTableau() {
    cy.get(".oxd-table-body").children(".oxd-table-card").first();
  }
  clickCaseACocher() {
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon"
    )
      .click({ force: true })
      .screenshot("test");
  }
  assertboutonDeleteVisible() {
    cy.get(".orangehrm-horizontal-padding > div > .oxd-button")
      .should("be.visible")
      .and("have.text", " Delete Selected ");
  }
  clickboutonDeletteTableau() {
    cy.get(".orangehrm-horizontal-padding > div > .oxd-button").click({
      force: true,
    });
  }
}
export default PimPo;
