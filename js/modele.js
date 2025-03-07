// Variables globales du modèle
let nombre = 0;
let decimalExposant = 1;
let saveValue = 0;

// Fonctions du modèle

// Fonction qui affiche un chiffre à droite d'un nombre
function ajoutChiffre(chiffre) {
	if (!decimalPoint) {
		nombre = nombre * 10 + chiffre;
	} 
	
	else {
		nombre =
			(nombre * Math.pow(10, decimalExposant) + chiffre) /
			Math.pow(10, decimalExposant);
		decimalExposant += 1;
	}
	
	return nombre;
}

function resetNombre() {
	nombre = 0;
	decimalExposant = 0;
	saveValue = 0;
	return nombre
}

function saveValueNombre() {
	saveValue = nombre;
	// Pour préparer à la saisie du prochain nombre
	nombre = 0;
	decimalExposant = 0;
	saveValue = 0;
}

function addition() {
	nombre += saveValue;
	saveValue = nombre;

	return nombre
}

function result() {
	saveValue = nombre;
	return saveValue
}