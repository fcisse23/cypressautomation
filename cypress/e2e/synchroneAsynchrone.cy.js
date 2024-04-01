/// <reference types="Cypress" />
describe('Comprendre asynchrone et asynchrone', () => {
    it('Mode synchrone', () => {
      cy.log('Début')
      cy.log('Étape 1')
      cy.log('Étape 2')
      cy.log('Fin')
    });
    it.skip('Mode asynchrone', () => {
      cy.log('Début')
      cy.log('Étape 1')
      cy.log('Étape 2')
      cy.wait(5000)
      console.log('Fin asynchrone')
    });
    it('Mode asynchrone 2', () => {
      cy.log('Début')
      cy.log('Étape 1')
      cy.get('#mobouton').click()
      cy.log('Étape 2')
      cy.wait(5000)
      console.log('Fin asynchrone')
    });
    
  
});