/// <reference types="cypress" />

describe('Test API avec Cypress', () => {
    it('API Test GET', ()=> {
        cy.request('GET', 'http://localhost:3000/users').should(response=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(2)
        })

    });
    it('API Test POST', ()=> {
        cy.request('POST', 'http://localhost:3000/users',{
            id: 3, 
            nom: "Charlie" , 
            prenom:"Gaetan"
        }).should(response=>{
            expect(response.body.id).to.eq(3)
            expect(response.body.nom).to.eq("Charlie")
            expect(response.body.prenom).to.eq("Gaetan")
        })

    });
    it('API Test PUT', ()=> {
        cy.request('PUT', 'http://localhost:3000/users/3',{
            id: 3, 
            nom: "Florini" , 
            prenom:"Gaetan"
        }).should(response=>{
            expect(response.body.id).to.eq(3)
            expect(response.body.nom).to.eq("Florini")
            expect(response.body.prenom).to.eq("Gaetan")
        })

    });
    it('API Test DELETE', ()=> {
        cy.request('DELETE', 'http://localhost:3000/users/3').should(response=>{
           expect(response.status).to.eq(200)
        })

        cy.request('GET', 'http://localhost:3000/users').should(response=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(2)
        })
    });
    it.only('Mock API', ()=> {
        cy.intercept('GET', '/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC',{
            body : [{
                "id": 10,
                "userName": "fcisse",
                "deleted": false,
                "status": true,
                "employee": {
                    "empNumber": 10,
                    "employeeId": "0038",
                    "firstName": "Fode",
                    "middleName": "",
                    "lastName": "CISSE",
                    "terminationId": null
                },
                "userRole": {
                    "id": 2,
                    "name": "ESS",
                    "displayName": "ESS"
                }
            }]
        }).as('utilisateurs')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.wait('@utilisateurs').then(interception=>{
            expect(interception.response.statusCode).to.eq(200)
            expect(interception.response.body[0].userName).to.eq('fcisse')
            expect(interception.response.body[0].employee.firstName).to.eq('Fode')
        })
  

    });
    


     
    });
    
            
      
  