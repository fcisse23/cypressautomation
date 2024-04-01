```javascript 
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

```
```html 
<div id="personne">
    <h1>Nom: Jean Dupont</h1>
    <p>Age: 30 ans</p>
    <p>Profession: Ingénieur</p>
</div>


```

```js

cy.get('#personne').should('contain', 'Nom')
```