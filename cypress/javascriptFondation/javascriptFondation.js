/**
 *
 *  1 - Afficher le texte "Bonjour Javascript"
 *
 * */

// console.log("Bonjour Javascript");

/**
 *
 *  2 - Les variables, les constante et les types de données
 *
 * */

// var , let const
// var , l'encienne façon de definir une variable en javascript.

// let, pour déclarer une variable qui peut être modifiée

let x = 5;
x = 15;
// console.log(x);

// const, pour déclarer une variable non modifiable

const y = 5;
// console.log(y);

/**
 *
 *   Les types de données
 *
 */

// Les nombres (Number)

let age = 25;
let nombreDePommes = 10;
let prixTotal = nombreDePommes * 1.5;

// console.log(prixTotal);

// Les chaines de caractères (String)

let prenom = "Alice";
let nomDeFamille = "Dupont";

// Les booléens (Boolean)

let estMajeur = true;
let estAbonneAmaChaine = false;

// Type null

let taille = null;

// Type non defini (Undefined)

let ordinateur;

// console.log(ordinateur);

/***
 *
 *  3 - La concaténation
 */

// Concaténation

// let message = "Bonjour " + prenom;

let bonjour = "Bonjour ";

let message = bonjour + prenom;
// console.log(message);

// L'interpolation

let message2 = `Bonjour ${prenom}`;

// console.log(message2);

let a = 5;
let b = 7;
let message3 = `La somme de ${a} et ${b} est égale à ${a + b}`;

// console.log(message3);

/**
 *
 *  4 - Les objets et les tableaux (Arrays)
 *
 */

// Les objets

let personne = {
  nom: "Alice",
  age: 25,
  profession: "QA",
};

// notation avec point

// console.log(personne.nom);

// notation par crochet

// console.log(personne["age"]);

// Les tableaux (Arrays)

let fruits = ["pomme", "banane", "orange"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// modification

fruits[0] = "kiwi";

// console.log(fruits);

personne.nom = "Matilde";

// console.log(personne);

/**
 *
 * Les opérateurs
 *
 */

// Les opérateurs arithmétiques

("+, -, *, /, % ");

// Les opérateurs de comparaison

("== , !=, ===, !==, >, <, >=, <=");

// Les opérateurs logiques

("&& , ||, !");

// Les opérateurs d'affectation

("+= , -= , *=, /=, %=");

x += 5; // x = x + 5

x -= 5; // x = x - 5

x *= 5; // x = x * 5

x /= 5; // x = x / 5

x %= 5; // x = x % 5

/**
 *
 * Les instructions conditionnelles
 *
 */

// condition if

let poids = 12;

if (poids < 10) {
  console.log("La livraison est offerte");
} else {
  //   console.log("La livraison est payante");
}

// condition switch

let jour = "jeudi";

switch (jour) {
  case "lundi":
    console.log("On est lundi !");
    break;
  case "mardi":
    console.log("On est mardi !");
    break;
  case "mercredi":
    console.log("On est mercredi !");
    break;
  default:
  // console.log("On est un autre jour de la semaine !");
}

/**
 *
 * Les boucles
 *
 */

// for, while , do-while

let tableau = [1, 2, 3, 4, 5];

// l'incrementation : i++ => i = i + 1
// decrementation : i-- => i = i - 1

let i = 0;
// 0, 1, 2, 3, 4

for (i; i <= 4; i++) {
  //   console.log(tableau[i]);
}

// while

let kilo = 0;

while (kilo < 5) {
  //   console.log("boucle while " + kilo);
  kilo++;
}

// do-while

// do {
//   console.log("boucle do while " + kilo);
//   kilo++;
// } while (kilo < 5);

/**
 *
 * Les fonctions
 *
 */

// function

function direBonjour(nom) {
  // console.log("Bonjour " + nom + "!");
}

direBonjour("Fode");

// fonction avec expression de fonction

const direBonsoir = function () {
  // console.log("Bonsoir !");
};

direBonsoir();

// fonction pour retourner une valeur

function additionner(a, b) {
  return a + b;
}

let resultat = additionner(2, 3);
// console.log(resultat);

/**
 *
 * Les classes
 *
 */

class Animale {
  constructor(nom, espece) {
    this.nom = nom;
    this.espece = espece;
  }
  parler() {
    console.log(
      `Bonjour, Je m'appelle ${this.nom}. Je suis un(e) ${this.espece}`
    );
  }
}

// Création d'un objet à partir d'une classe

let monAnimal = new Animale("Milou", "Chat");
// monAnimal.parler();
