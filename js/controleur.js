const screen = document.getElementById("screen");

let decimalPoint = false;

// Récupération de tous les boutons dans une liste
const allButtons = document.getElementsByClassName("touche");

for (const button of allButtons) {
    button.addEventListener("click", getButtonText);
}

// Variables

// Fonctions logiques
function getButtonText(event) {
    let id = event.target.id;
    let nb;

    if (Number.isInteger(parseInt(id))) {
        nb = ajoutChiffre(parseInt(id));
        renderView(nb);

    } else if (id == "btnPoint") {
        if (!decimalPoint) {
            setDecimalPoint();
            renderView(String(nombre) + ".");
        }

    } else if (id == "btnCE") {
        resetNombre();
        renderView(nombre);
    }
}

function renderView(nombre) {
    screen.innerText = nombre;
}

// Initialisation par défaut au chargement de la page
screen.innerText = nombre;
