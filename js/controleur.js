const screen = document.getElementById("screen");

// Variables
let decimalPoint = false;
let operateur = '';

// Récupération de tous les boutons dans une liste
const allButtons = document.getElementsByClassName("touche");

for (const button of allButtons) {
    button.addEventListener("click", getButtonText);
}

// Boutons de la calcu
function getButtonText(event) {
    let id = event.target.id;
    let nb;

    // Ajout d'un chiffre à la suite du nombre
    if (Number.isInteger(parseInt(id))) {
        nb = ajoutChiffre(parseInt(id));
        renderView(nb);

    // Virgule
    } else if (id == 'btnPoint') {
        fDecimalPoint();

    // Addition
    } else if (id == 'btnPlus') {
        fPlus();

    // Soustraction
    } else if (id == 'btnMoins') {
        fMoins();

    // Multiplication
    } else if (id == 'btnMultiplier') {
        fMultiplier();

    // Division
    } else if (id == 'btnDiviser') {
        fDiviser();

    // Inverse du nombre
    } else if (id == 'btnPlusMoins') {
        fPlusMoins();

    // Flèche de retour
    } else if (id == 'btnFleche') {
        fFleche();

    // Pourcent
    } else if (id == 'btnPourcent') {
        fPourcent();

    // Clear everything
    } else if (id == "btnC") {
        fC();

    // Clear Entry
    } else if (id == 'btnCE') {
        fCE();

    // Résultat
    } else if (id == 'btnEXE') {
        fExe();

    // Bouton de tests (à modif)
    } else if (id == 'test') {
        
    }
}

// Fonctions pour les boutons de la calcu
function fDecimalPoint() {
    if (!decimalPoint) {
        decimalPoint = true;
        // Pour afficher à l'utilisateur le point pour signifier
        // qu'il a bien été pris en compte
        renderView(String(nombre) + ".");
    }
}

function fPlus() {
    if (operateur != 'addition') {
        operateur = 'addition';
        // ajoutAHistorique('+');
        nb = saveValueNombre();
        console.log(nb);
        renderView(nb);

    } else {
        nb = addition();
        saveValueNombre();
        renderView(nb);
    }
}

function fMoins() {
    if (operateur != 'soustraction') {
        operateur = 'soustraction';
        // ajoutAHistorique('-');
        nb = saveValueNombre();
        renderView(nb);
    } else {
        nb = soustraction();
        saveValueNombre();
        renderView(nb);
    }
}

function fMultiplier() {
    if (operateur != 'multiplication') {
        operateur = 'multiplication';
        // ajoutAHistorique('*');
        nb = saveValueNombre();
        renderView(nb);
    } else {
        nb = multiplier();
        saveValueNombre();
        renderView(nb);
    }
}

function fDiviser() {
    if (operateur != 'division') {
        operateur = 'division';
        // ajoutAHistorique('/');
        nb = saveValueNombre();
        renderView(nb);
    } else {
        nb = diviser();
        saveValueNombre();
        renderView(nb);
    }
}

function fPlusMoins() {
    nb = inverse();
    renderView(nb);
}

function fFleche() {
    nb = removeChiffre();
    renderView(nb);
}

function fPourcent() {
    nb = pourcentage();
    // Pour afficher à l'utilisateur le pourcent pour signifier
    // qu'il a bien été pris en compte
    renderView(String(nb) + '%');
    nb = saveValueNombre();
    operateur = 'multiplication';
}

function fC() {
    nb = resetEverything();
    renderView(nb);
}

function fCE() {
    nb = resetCalculCourant();
    renderView(nb);
}

function fExe() {
    if (operateur == 'addition') {
        addition();
        resetOperation();
    } else if (operateur == 'soustraction') {
        soustraction();
        resetOperation();
    } else if (operateur == 'multiplication') {
        multiplier();
        resetOperation();
    } else if (operateur == 'division') {
        diviser();
        resetOperation();
    }

    nb = result();
    renderView(nb);
}

// Logique interne
function resetOperation() {
    operateur = '';
}

function messageErreur() {
    alert("Vous ne pouvez pas diviser par 0");
}

function renderView(nombre) {
    screen.innerText = nombre;
}

// Initialisation par défaut au chargement de la page
screen.innerText = nombre;
