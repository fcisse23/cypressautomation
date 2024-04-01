import CommunPo from "../support/pageObject/communPo";
describe("Sélecteur Css", () => {
  before(() => {
    const communPo = new CommunPo();
    communPo.visitPageAccueil();
  });

  it("Ma liste de configuration", () => {
    cy.get(".oxd-sidepanel-body").contains("PIM").click();

    // 1
    // cy.get(".--parent").click();
    // // cy.get(".oxd-dropdown-menu > :nth-child(1)").click();

    // cy.get(".oxd-dropdown-menu").contains("Optional Fields").click();

    // cy.get(".orangehrm-main-title").should("contain", "Optional Fields");

    // 2

    for (let index = 0; index <= 4; index++) {
      cy.get(".--parent").click();

      cy.get(".oxd-topbar-body-nav-tab-link")
        .eq(index)
        .then((textElement) => {
          cy.wrap(textElement).click();

          const element = textElement.text();
          cy.get(".orangehrm-main-title").should("contain", element);
        });
    }
  });
});
