describe('Intérraction avec liste dropdown', () => {
    it('Select element dropdown partie 1', () => {
      cy.visit('https://demoqa.com/frames')

    // cy.get('#frame1').then($iframe=>{
    //     const body = $iframe.contents().find('body')
    //     cy.get('body').as('iframe')
    // })

    // cy.get('@iframe').find('#sampleHeading')


    cy.get('#frame1')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap).find('#sampleHeading').should('contain','This is a sample page')
    })
    

   /**
    * 
    * 1 - Commencer par expliquer c'est quoi les iframe
    *   - où ils sont utilisé 
    * problematique pour les automatiser 
    * voir un exemple d'automatisation
    * donner un exercice d'automatisation d'ifram
    * 
    * 
    * Cypress est un outil populaire de test d'interface utilisateur pour les applications web. Si vous souhaitez tester du contenu dans une iframe avec Cypress, cela peut être un peu délicat, car Cypress n'a pas une prise en charge directe des iframe. Cependant, vous pouvez toujours le faire avec quelques astuces.

Voici comment vous pouvez scripter l'interaction avec une iframe dans Cypress :

Obtenez l'élément de l'iframe:
Pour accéder au contenu d'une iframe, vous devez d'abord obtenir la iframe elle-même.

javascript
Copy code
cy.get('iframe')
Attendez que l'iframe soit chargée :
Vous pouvez attendre que l'iframe soit complètement chargée en vous assurant que son body est accessible.

javascript
Copy code
cy.get('iframe').its('0.contentDocument.body').should('not.be.empty')
Encapsulez les étapes précédentes dans une commande personnalisée :
Pour rendre le code plus réutilisable, vous pouvez encapsuler les étapes précédentes dans une commande Cypress personnalisée. Ajoutez ceci à votre fichier commands.js :

javascript
Copy code
Cypress.Commands.add('getIframeBody', () => {
  // Récupère l'élément iframe puis le body de l'iframe
  return cy
    .get('iframe')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
})
Utilisez la commande personnalisée dans vos tests :
Maintenant que vous avez une commande pour obtenir le body de l'iframe, vous pouvez l'utiliser dans vos tests.

javascript
Copy code
describe('Iframe Test', function() {
  it('should interact with iframe content', function() {
    cy.visit('your_url_containing_iframe')

    cy.getIframeBody().find('button').click()  // Exemple : cliquer sur un bouton à l'intérieur de l'iframe
  })
})
S'il y a plusieurs iframes :
Si vous avez plusieurs iframes et que vous voulez cibler une iframe spécifique, vous pouvez ajuster la commande cy.get('iframe') pour qu'elle utilise un sélecteur CSS plus spécifique.

Notez que cette approche repose sur le fait que la iframe est du même domaine que votre page principale. Si la iframe est d'un domaine différent, des problèmes de politique de même origine (Same-Origin Policy) peuvent survenir, ce qui rend Cypress incapable d'accéder au contenu de cette iframe.

Pour interagir avec des iframes de domaines différents, vous pourriez avoir besoin d'autres stratégies, comme stubbing ou mocking les appels réseau, ou encore charger la ressource de l'iframe sur un serveur proxy pour contourner les restrictions de même origine.
    * 
    */

  })