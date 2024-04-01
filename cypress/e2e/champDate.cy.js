import moment from "moment";
import CommunPo from "../support/pageObject/communPo";

function dateDuJour() {
  const maDateDuJour = moment().format("YYYY-MM-DD");

  return maDateDuJour;
}
function dateDuJourPlusDeux() {
  const maDateDuJourPlusDeux = moment().add(2, "days").format("YYYY-MM-DD");

  return maDateDuJourPlusDeux;
}

describe("Sélecteur Css", () => {
  before(() => {
    const communPo = new CommunPo();
    communPo.visitPageAccueil();
  });
  it("Test date picker", () => {
    const maDateDuJour = dateDuJour();
    const maDateDuJourPlusDeux = dateDuJourPlusDeux();

    cy.log("La date du jour", maDateDuJour);
    cy.log("La date du jour plus deux", maDateDuJourPlusDeux);

    cy.get(".oxd-sidepanel-body").contains("My Info").click();

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).then((datePicker) => {
      cy.wrap(datePicker).clear().type(maDateDuJourPlusDeux);

      cy.wrap(datePicker).should("have.value", maDateDuJourPlusDeux);
    });
  });
});
