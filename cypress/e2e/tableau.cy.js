import CommunPo from "../support/pageObject/communPo";
import PimPo from "../support/pageObject/pimPo";

const pimmPo = new PimPo();

describe("Test tableau", () => {
  before(() => {
    const communPo = new CommunPo();
    communPo.visitPageAccueil();
  });

  it("Modification infos utilisateur", () => {
    pimmPo.accesPim();
    pimmPo.modificationInfosUser();
    pimmPo.saisiePrenom();
    pimmPo.clickBoutonSauvegarde();
    pimmPo.accesPim();
    pimmPo.assertModification();
  });

  it.only("Suppression infos user", () => {
    pimmPo.accesPim();
    pimmPo.suppressionAvecBoubelle();
    // pimmPo.clickBoutonDelete();
    // pimmPo.assertSuppression();
  });

  it("Suppression 1ère ligne", () => {
    pimmPo.accesPim();
    pimmPo.selectionPremiereLigneTableau();
    pimmPo.clickCaseACocher();
    pimmPo.assertboutonDeleteVisible();
    pimmPo.clickboutonDeletteTableau();
    pimmPo.clickBoutonDelete();
  });
});
