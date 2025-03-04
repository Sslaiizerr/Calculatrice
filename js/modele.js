// Variables globales du modèle
let nombre = 0;
let decimalExposant = 0;

// Fonctions du modèle

// Fonction qui affiche un chiffre à droite d'un nombre
function ajoutChiffre(chiffre) {
    if (!decimalPoint) {
        nombre = nombre * 10 + chiffre;
    } else {
        nombre =
            (nombre * Math.pow(10, decimalExposant) + chiffre) /
            Math.pow(10, decimalExposant);
        decimalExposant += 1;
    }
    return nombre;
}

function setDecimalPoint() {
    decimalPoint = true;
    decimalExposant = 0;
}

function resetNombre() {
    nombre = 0;
}
