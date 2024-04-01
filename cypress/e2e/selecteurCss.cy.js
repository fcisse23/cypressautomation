import CommunPo from "../support/pageObject/communPo";
describe("Sélecteur Css", () => {
  before(() => {
    const communPo = new CommunPo();
    communPo.visitPageAccueil();
  });

  it("Different type de sélecteur CSS", () => {
    // Sélecteurs basés sur les noms de balise

    cy.get("div");

    // Sélecteurs basés sur les classes
    cy.get(".oxd-grid-item");

    // Sélecteurs basés sur les identifiants

    cy.get("#app");

    // Sélecteurs basés sur les attributs

    cy.get('[class="oxd-text oxd-text--p orangehrm-attendance-card-state"]');

    // Sélecteurs basés sur les relations

    cy.get("div p");

    // Combinaison des sélecteurs

    cy.get(
      '[class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"][type="button"]'
    );
  });

  it("Utilisation de la fonction find", () => {
    cy.get(".orangehrm-todo-list")
      .find(".orangehrm-todo-list-item")
      .contains("Candidate to Interview");
  });
  it("Utilisation de la fonction parent", () => {
    cy.get(".orangehrm-todo-list-item")
      .parent()
      .should("have.class", "orangehrm-todo-list");

    cy.get(".orangehrm-todo-list-item").parents();
  });
  it("Utilisation de la fonction children", () => {
    cy.get(".orangehrm-todo-list").children().should("have.length", 3);
  });
  it("Utilisation de la commande then et wrap", () => {
    cy.get(".oxd-sidepanel-body").contains("Admin").click();

    cy.contains("Search")
      .parents(".oxd-table-filter-area")
      .then((verifText) => {
        cy.wrap(verifText).contains("Username");
        cy.wrap(verifText).contains("User Role");
        cy.wrap(verifText).contains("Employee Name");
        cy.wrap(verifText).contains("Status");
      });
  });
















  
  it("Utilisation de la commande invoke", () => {
    cy.get(".oxd-sidepanel-body").contains("Admin").click();

    // 1 - avec contain
    cy.get('[type="submit"]').should("contain", "Search");

    // 2 - avec then
    cy.get('[type="submit"]').then((texteBouton) => {
      expect(texteBouton.text()).to.equal(" Search ");

      // 3 - avec invoke
      cy.get('[type="submit"]')
        .invoke("text")
        .then((texte) => {
          expect(texte).to.equal(" Search ");
        });

      // 4 - invoke avec attribut
      cy.get('[type="submit"]')
        .invoke("attr", "class")
        .then((classe) => {
          expect(classe).to.contain("oxd-button");
        });

      // 5 - invoke avec propriété
      cy.get('[type="submit"]')
        .invoke("prop", "tagName")
        .then((tagName) => {
          expect(tagName.toLowerCase()).to.equal("button");
        });

      cy.get(":nth-child(2) > .oxd-input").type("text");
    });
  });

  it("Utilisation du bouton radio et du checkbox", () => {
    cy.get(".oxd-sidepanel-body").contains("My Info").click();

    // utilisation de la méthode first
    // cy.get(".oxd-radio-input ").first().click({ force: true });
    // cy.get(".oxd-radio-input ").first().parent().should("contain.text", "Male");

    // utilisation de la méthode index
    // 1[0] , 2[1] , 3[2]

    /**
     *
     *
     * utulisé cy.wrap
     * faire l'assert que le bouton est bien selectionné
     * faire l'assert qu'il a le text correspondant
     * */

    // cy.get(".oxd-radio-input ").eq(0).click({ force: true });
    // cy.get(".oxd-radio-input ").eq(0).parent().should("contain.text", "Male");

    cy.get(".oxd-radio-input ").eq(1).check();
    cy.get(".oxd-radio-input ").eq(1).parent().should("contain.text", "Female");

    cy.contains("Smoker")
      .parent()
      .siblings()
      .find("input")
      .click({ force: true });

    cy.contains("Smoker")
      .parent()
      .siblings()
      .find("input")
      .should("be.checked");
  });
  it.only("dropdown", () => {
    cy.get(".oxd-sidepanel-body").contains("Admin").click();
    //1 dropdown avec nom de balise select utiliser l'url cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    //   utiliser get(select) pour sélectionner l'élement
    //  faire l'assert

    //2 avec un element de la liste

    // cy.get(".oxd-topbar-body-nav-tab-item").eq(1).click();
    // cy.get(".oxd-dropdown-menu").contains("Employment Status").click();
    // cy.get(".orangehrm-main-title").should("have.text", "Employment Status");

    //3 dropdown avec balise liste d'element

    cy.get(".oxd-topbar-body-nav-tab-item").eq(1).click();

    for (let index = 0; index < 4; index++) {
      cy.get(".oxd-topbar-body-nav-tab-item").eq(1).click();
      cy.get('[role="menuitem"]')
        .eq(index)
        .then((el) => {
          cy.wrap(el).click();
          const textElement = el.text();
          cy.get(".orangehrm-main-title").should("contain", textElement);
        });
    }
  });
});
