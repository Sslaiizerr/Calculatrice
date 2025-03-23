// Variables globales du modèle
let nombre = 0;
let decimalExposant = 1;
let saveValue = 0;
let historiqueCalcul = '';


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

// Fonctions de reset
function resetCalculCourant() {
	// Fonction qui reset mais qui garde le calcul courant
	nombre = 0;

	return nombre;
}

function resetEverything() {
	nombre = 0;
	decimalExposant = 1;
	saveValue = 0;

	resetOperation();

	return nombre;
}

function removeChiffre() {
	nombre = parseInt(nombre / 10);

	return nombre;
}

function saveValueNombre() {
	// Pour contrer le fait que si l'on clique successivement sur 
	// addition -> soustraction -> addition
	// saveValue devienne 0 car nombre deviendra 0 au 2eme clic sur
	// le bouton
	if (nombre != 0) {
		saveValue = nombre;
	}
	// Pour préparer à la saisie du prochain nombre
	nombre = 0;
	decimalExposant = 1;

	return saveValue;
}


// Fonctions de calculs (opérateurs)
function addition() {
	saveValue += nombre;
	nombre = saveValue;

	return nombre;
}

function soustraction() {
	saveValue -= nombre;
	nombre = saveValue;

	return nombre;
}

function multiplier() {
	saveValue *= nombre;
	nombre = saveValue;

	return nombre;
}

function diviser() {
	if (nombre != 0) {
		saveValue /= nombre;
		nombre = saveValue;

		return nombre;
	}

	messageErreur();
	return saveValue;
}

function inverse() {
	nombre *= -1;
	saveValue = nombre;

	return nombre;
}

function pourcentage() {
	nombre /= 100;

	return nombre * 100;
}

function result() {
	saveValue = nombre;

	return saveValue;
}

// Tentative d'ajout d'un historique de calcul qui pourra être affiché
// quelque par sur un écran
function ajoutAHistorique(nouvelElt) {
	historiqueCalcul += nouvelElt;

	return historiqueCalcul;
}