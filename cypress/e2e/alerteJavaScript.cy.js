/// <reference types="cypress" />

describe('Gestion des boites de dialogues avec Cypress', () => {
    it('Gestion des alertes avec Cypress', () => {
       cy.visit('https://demoqa.com/alerts')

       cy.get('#alertButton').click()
       cy.on('window:alert',(text)=>{
        expect(text).to.equal('You clicked a button')
       })
    });

    it('Gestion des boites de dialogue après 5 secondes avec Cypress', () => {
       cy.visit('https://demoqa.com/alerts')

       cy.get('#timerAlertButton').click()
       cy.on('window:alert',(text)=>{
        expect(text).to.equal('This alert appeared after 5 seconds')
       })
    });

     it('Clique sur le bouton Ok de la boite confirm avec Cypress', () => {
       cy.visit('https://demoqa.com/alerts')

       cy.get('#confirmButton').click()
      
       cy.on('window:confirm',(text)=>{
        expect(text).to.equal('Do you confirm action?')
        return true;
       })
       cy.get('#confirmResult').should('contain','You selected Ok')
    });

     it('Clique sur le bouton Annuler de la boite confirm avec Cypress', () => {
       cy.visit('https://demoqa.com/alerts')

       cy.get('#confirmButton').click()
      
       cy.on('window:confirm',(text)=>{
        expect(text).to.equal('Do you confirm action?')
        return false;
       })

       cy.get('#confirmResult').should('contain','You selected Cancel')
    });

    it('Clique sur le bouton Ok de la  boite prompt avec Cypress', () => {
       cy.visit('https://demoqa.com/alerts',{
        onBeforeLoad(win){
            cy.stub(win, 'prompt').returns('Message alerte')
        }
       })

       cy.get('#promtButton').click()
       cy.get('#promptResult').should('contain','You entered Message alerte')
    });

    it('Clique sur le bouton Annuler de la  boite prompt avec Cypress', () => {
       cy.visit('https://demoqa.com/alerts',{
        onBeforeLoad(win){
            cy.stub(win, 'prompt').returns(null)
        }
       })

       cy.get('#promtButton').click()
       cy.contains('Message alerte').should('not.exist')
    });
   
});
