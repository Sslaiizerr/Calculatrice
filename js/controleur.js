const screen = document.getElementById("screen");

// Variables
let decimalPoint = false;
let operateur = '';

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
        if (operateur != 'addition') {
            operateur = 'addition';
            // ajoutAHistorique('+');
            nb = saveValueNombre();
            renderView(nb);

        } else {
            nb = addition();
            saveValueNombre();
            renderView(nb);
        }

    // Soustraction
    } else if (id == 'btnMoins') {
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

    // Multiplication
    } else if (id == 'btnMultiplier') {
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

    // Division
    } else if (id == 'btnDiviser') {
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
    
    } else if (id == 'btnPlusMoins') {
        nb = inverse();
        renderView(nb);
    
    } else if (id == 'btnFleche') {
        nb = removeChiffre();
        renderView(nb);

    } else if (id == "btnC") {
        nb = resetEverything();
        renderView(nb);

    } else if (id == 'btnCE') {
        nb = resetCalculCourant();
        renderView(nb);

    } else if (id == 'btnEXE') {
        if (operateur == 'addition') {
            addition();
            operateur = '';
        } else if (operateur == 'soustraction') {
            soustraction();
            operateur = '';
        } else if (operateur == 'multiplication') {
            multiplier();
            operateur = '';
        } else if (operateur == 'division') {
            diviser();
            operateur = '';
        }

        nb = result();
        renderView(nb);
    }
}

function resetControleur() {
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
