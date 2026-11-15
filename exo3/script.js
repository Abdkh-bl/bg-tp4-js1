// Slide 51 : On utilise le mode strict.
"use strict";

// Slide 45 : On utilise une fonction avec paramètre.
function f2(note) {

    // Slide 42 : On utilise une condition.
    return note >= 10;
}

// Slide 45 : On utilise une fonction.
function f1() {

    // Slide 38 : On utilise un tableau.
    let students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];

    // Slide 44 : On utilise une boucle.
    for (let student of students) {

        // Slide 42 : On utilise une condition if/else.
        if (f2(student[3])) {

            // Slide 33 : On utilise console.log().
            console.log(student[0] + " : ADMIS");

        } else {

            // Slide 33 : On utilise console.log().
            console.log(student[0] + " : AJOURNÉ");
        }
    }
}