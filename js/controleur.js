const screen = document.getElementById("screen");

let decimalPoint = false;
let isCheckedBtnPlus = false;

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
            decimalPoint = true;
            renderView(String(nombre) + ".");
        }
    
    } else if (id == 'btnPlus') {
        if (!isCheckedBtnPlus) {
            saveValueNombre();
            isCheckedBtnPlus = true;
            
        } else {
            nb = addition();
            saveValueNombre();
            renderView(nb);
        }

    } else if (id == "btnCE") {
        nb = resetNombre();
        renderView(nb);

    } else if (id == 'btnEXE') {
        if (isCheckedBtnPlus) {
            addition();
            isCheckedBtnPlus = false;
        }

        nb = result();
        renderView(nb);
    }
}

function renderView(nombre) {
    screen.innerText = nombre;
}

// Initialisation par défaut au chargement de la page
screen.innerText = nombre;
