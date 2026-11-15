// Slide 51 : On utilise le mode strict.
"use strict";

// Slide 45 : On utilise une fonction.
function f1() {

    // Slide 38 : On utilise un tableau.
    let etudiants = [
        "Etudiant1",
        "Etudiant2",
        "Etudiant3"
    ];

    // Slide 44 : On utilise une boucle.
    for (let etudiant of etudiants) {

        // Slide 33 : On utilise console.log().
        console.log(etudiant);
    }
}

// Slide 45
function f2() {

    // Slide 39 : On utilise un objet.
    let etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    // Slide 33 : On utilise console.log().
    console.log(etudiant);
}

// Slide 45
function f3() {

    // Slide 40 : On utilise un tableau d'objets.
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Slide 44 : On utilise une boucle.
    for (let etudiant of etudiants) {

        // Slide 33 : On utilise console.log().
        console.log(
            etudiant.nom +
            "-" +
            etudiant.prenom +
            "-" +
            etudiant.age
        );
    }
}
