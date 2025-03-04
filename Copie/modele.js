// Variables globales du modèle
let nombre = 0;

// Fonctions du modèle

// Fonction qui affiche un chiffre à droite d'un nombre
function ajoutChiffre(chiffre) {
	if (decimalPoint == 0) {
		nombre = nombre * 10 + chiffre;
	} else {
		nombre =
			(nombre * Math.pow(10, decimalPoint) + chiffre) /
			Math.pow(10, decimalPoint);
		decimalpoint += 1;
	}
	return nombre;
}

function setDecimalPoint() {
	decimalPoint = 1;
}

function resetNombre() {
	nombre = 0;
}
