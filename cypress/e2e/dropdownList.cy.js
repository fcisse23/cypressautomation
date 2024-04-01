/// <reference types="cypress" />
describe('Intérraction avec liste dropdown', () => {
    it('Select element dropdown partie 1', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount')

    cy.get('#userSelect').select('2').should('contain','Harry Potter')
    cy.get('#currency').select('Dollar').should('have.value','Dollar')
    })
    it.only('Select element dropdown partie 2', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()

      cy.get(".oxd-sidepanel-body").contains("PIM").click();

    //   cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
    // //   cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    //   cy.get('.oxd-dropdown-menu ').contains('Optional Fields').click()
    //   cy.get('.orangehrm-main-title').should('contain.text','Optional Fields')

    for (let index = 0; index <= 4; index++) {
        cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()

        cy.get('.oxd-topbar-body-nav-tab-link').eq(index).then(textElement=>{
            cy.wrap(textElement).click()

            const element = textElement.text()

            // cy.get('.orangehrm-main-title').should('contain',element)
            cy.get('.orangehrm-main-title').then(ele=>{
              expect(ele).to.contain(element)
            })

        })
    }

    cy.get('.oxd-button').should('contain','Add').and('have.css','background-color','rgb(118, 188, 33)')

  })
    it('Select element Reports dropdown liste', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()

      cy.get(".oxd-sidepanel-body").contains("Leave").click();

    
      cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-dropdown-menu').should('be.visible')

      cy.get('.oxd-topbar-body-nav-tab-link').then(options=>{

        options.each((index, option)=>{
          cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
          cy.get('.oxd-topbar-body-nav-tab-link').eq(index).click()

          cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text',option.textContent)
        })

      })
    
    })


   


  })