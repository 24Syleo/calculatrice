//récupérer les boutons du DOM
const clear = document.getElementById('clear');
const egal = document.getElementById('egal');

// Ajouter l'évènement sur les boutons 
clear.onclick = () => forclear();
egal.onclick = () => resultat();

//boucle pour les boutons pour récupérer les id
const boutons = document.querySelectorAll('.btnValue');

for (var i of boutons) {
    i.addEventListener('click', (evt) => ajoutValeur(evt.target.id))
}

// remettre à zéro
function forclear() {
    document.getElementById("sortie").innerHTML = "0";
}

// enlever le zéro
function removeZero() {
    let value = document.getElementById("sortie").innerHTML;
    if (value == "0") {
        value = " ";
        document.getElementById("sortie").innerHTML = value;
    }
}

// pourcentage
function pourcentage() {
    let value = document.getElementById("sortie").innerHTML;
    value = value / 100;
    document.getElementById("sortie").innerHTML = value;
}


// mettre les valeurs dans l'ecran
function ajoutValeur(value) {
    removeZero(); // d'abord enlever le 0
    document.getElementById("sortie").innerHTML += value;
}

// resultat 

function resultat() {
    removeZero()
    let equation = document.getElementById("sortie").innerHTML;
    let resultat = eval(equation); //eval est une fonction javascript eval('equation') elle evalue / execute la variable en parametre 
    document.getElementById('sortie').innerHTML = resultat; // le resulat est stocker dans la variable resultat plus qu'a afficher
}

//onkeydown evenement executer par le clavier
document.addEventListener("keydown", (evt) => {
    let key = evt.keyCode;
    console.log(key);
    switch (key) {
        case 48:
        case 96:
            ajoutValeur(0);
            break;
        case 49:
        case 97:
            ajoutValeur(1);
            break;
        case 50:
        case 98:
            ajoutValeur(2);
            break;
        case 51:
        case 99:
            ajoutValeur(3);
            break;
        case 52:
        case 100:
            ajoutValeur(4);
            break;
        case 53:
        case 101:
            ajoutValeur(5);
            break;
        case 54:
        case 102:
            ajoutValeur(6);
            break;
        case 55:
        case 103:
            ajoutValeur(7);
            break;
        case 56:
        case 104:
            ajoutValeur(8);
            break;
        case 57:
        case 105:
            ajoutValeur(9);
            break;
        case 106:
            ajoutValeur('*');
            break;
        case 107:
            ajoutValeur('+');
            break;
        case 109:
            ajoutValeur('-');
            break;
        case 110:
            ajoutValeur('.');
            break;
        case 111:
            ajoutValeur('/');
            break;
        case 13:
            resultat();
            break;
        case 8:
            forclear();
            break;
    }
});