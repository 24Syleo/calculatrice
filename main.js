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