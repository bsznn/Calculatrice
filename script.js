/* ------- Exercice 1  ------- */

document
  .getElementById("calcForm")
  .addEventListener("submit", function (event) {
    // Empêchement du comportement par défaut du formulaire
    event.preventDefault();

    // Récupération des valeurs des champs
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    // Différentes opérations choisies par l'utilisateur
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        //  Condition pour gérer le cas de la division par zéro
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Erreur : Division par zéro";
        }
        break;
      default:
        result = "Erreur : Opération invalide";
    }

    // Création de la boîte "alerte" qui contient le résultat
    document.getElementById(
      "alertMessage"
    ).textContent = `Résultat : ${result}`;
    document.getElementById("customAlert").style.display = "block";
  });

// Dissimulation de la boîte "alerte"
document.getElementById("closeAlert").addEventListener("click", function () {
  document.getElementById("customAlert").style.display = "none";
});

/* ------- Exercice 2  ------- */

// Affichage du bloc "calculatrice"
document
  .getElementById("showCalculator")
  .addEventListener("click", function () {
    document.getElementById("calculator").style.display = "block";
  });

// Dissimulation du bloc "calculatrice"
document
  .getElementById("hideCalculator")
  .addEventListener("click", function () {
    document.getElementById("calculator").style.display = "none";
  });

// Exercice 3

// Sélection des éléments nécéssaires
const num1Input = document.getElementById("num1");
const operationSelect = document.getElementById("operation");
const num2Input = document.getElementById("num2");

const infoBox1 = document.getElementById("infoBox1");
const infoBox2 = document.getElementById("infoBox2");
const infoBox3 = document.getElementById("infoBox3");

// Ajout de texte au survol du premier input
num1Input.addEventListener("mouseover", function () {
  infoBox1.textContent = "Saisissez le premier nombre ici.";
});

num1Input.addEventListener("mouseout", function () {
  infoBox1.textContent = "";
});

// Ajout de texte au survol du sélecteur
operationSelect.addEventListener("mouseover", function () {
  infoBox2.textContent = "Sélectionnez l'opération à effectuer : +, -, *, /";
});

operationSelect.addEventListener("mouseout", function () {
  infoBox2.textContent = "";
});

// Ajout de texte au survol du second input
num2Input.addEventListener("mouseover", function () {
  infoBox3.textContent = "Saisissez le deuxième nombre ici.";
});

num2Input.addEventListener("mouseout", function () {
  infoBox3.textContent = "";
});
