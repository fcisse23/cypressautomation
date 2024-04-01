/// <reference types="cypress" />
describe('Difference entre les commandes Jquery et Cypress', () => {

    it.only('Utiliser les commandes Jquery et Cypress', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()

      
        cy.get(".oxd-sidepanel-body").contains("Admin").click();
    
        // const element = cy.get('.oxd-table-filter-header-title > .oxd-text')

        // cy.log(element.text())
        cy.get('.oxd-table-filter-header-title > .oxd-text').then($element =>{
            cy.log($element.text())
        })
 
  })
  })
   


   


