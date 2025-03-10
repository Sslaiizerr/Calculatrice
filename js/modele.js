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

function resetEverything() {
	nombre = 0;
	decimalExposant = 1;
	saveValue = 0;
	// Demander au prof si on peut conserver ça ici ou si on doit le
	// décaler dans le controleur
	decimalPoint = false;
  isCheckedBtnPlus = false;
	isCheckedBtnMoins = false;

	return nombre
}

function saveValueNombre() {
	saveValue = nombre;
	// Pour préparer à la saisie du prochain nombre
	nombre = 0;
	decimalExposant = 1;

	return nombre;
}

function addition() {
	saveValue += nombre;
	nombre = saveValue;

	return nombre
}

function soustraction() {
	saveValue -= nombre;
	nombre = saveValue;

	return saveValue
}

function result() {
	saveValue = nombre;

	return saveValue
}