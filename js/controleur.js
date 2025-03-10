const screen = document.getElementById("screen");

// Variables
let decimalPoint = false;
let isCheckedBtnPlus = false;
let isCheckedBtnMoins = false;
let isCheckedBtnMultiplier = false;

// Récupération de tous les boutons dans une liste
const allButtons = document.getElementsByClassName("touche");

for (const button of allButtons) {
    button.addEventListener("click", getButtonText);
}


function getButtonText(event) {
    let id = event.target.id;
    let nb;

    if (Number.isInteger(parseInt(id))) {
        nb = ajoutChiffre(parseInt(id));
        renderView(nb);

    // Virgule
    } else if (id == "btnPoint") {
        if (!decimalPoint) {
            decimalPoint = true;
            // Pour afficher à l'utilisateur le point pour signifier
            // qu'il a bien été prit en compte
            renderView(String(nombre) + ".");
        }

    // Addition
    } else if (id == 'btnPlus') {
        if (!isCheckedBtnPlus) {
            nb = saveValueNombre();
            isCheckedBtnPlus = true;
            renderView(nb);

        } else {
            nb = addition();
            saveValueNombre();
            renderView(nb);
        }

    // Soustraction
    } else if (id == 'btnMoins') {
        if (!isCheckedBtnMoins) {
            nb = saveValueNombre();
            isCheckedBtnMoins = true;
            renderView(nb);
        } else {
            nb = soustraction();
            saveValueNombre();
            renderView(nb);
        }

    } else if (id == 'btnMultiplier') {
        if (!isCheckedBtnMultiplier) {
            nb = saveValueNombre();
            isCheckedBtnMultiplier = true;
            renderView(nb);
        } else {
            nb = multiplier();
            saveValueNombre();
            renderView(nb);
        }  
    
    } else if (id == "btnCE") {
        nb = resetEverything();
        renderView(nb);

    } else if (id == 'btnEXE') {
        if (isCheckedBtnPlus) {
            addition();
            isCheckedBtnPlus = false;
        } else if (isCheckedBtnMoins) {
            soustraction();
            isCheckedBtnMoins = false;
        } else if (isCheckedBtnMultiplier) {
            multiplier();
            isCheckedBtnMultiplier = false;
        }

        nb = result();
        renderView(nb);
    }
}

function resetControleur() {
    decimalPoint = false;
    isCheckedBtnPlus = false;
	isCheckedBtnMoins = false;
	isCheckedBtnMultiplier = false;
}

function renderView(nombre) {
    screen.innerText = nombre;
}

// Initialisation par défaut au chargement de la page
screen.innerText = nombre;
