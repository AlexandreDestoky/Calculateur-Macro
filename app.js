//DOM
let btnCalcul = document.querySelector(".calculer");
let form = document.querySelector("form");
let inputAge = document.querySelector("#Age");
let inputSexe = document.getElementsByName("sexe");
let inputTaille = document.querySelector("#Taille");
let inputPoids = document.querySelector("#Poids");
let selectActivite = document.querySelector("#activite");
let info = document.querySelector(".info");

//Variables de travail
let age, sexe, taille, poids, activite;

//on empeche le formulaire de s'envoyer
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btnCalcul.addEventListener("click", () => {
  //attribution des valeurs
  age = inputAge.value;
  for (input of inputSexe) {
    if (input.checked) {
      sexe = input.value;
    }
  }
  taille = inputTaille.value / 100;
  poids = inputPoids.value;
  activite = selectActivite.value;
  activite = Number(activite);

  //Calcul de calories
  if (age && poids && taille) {
    //on ne lance les calculs que si l'age, le poids et la taille ont bien été rempli

    //chiffre qui différencie si H ou F

    let metabolismeBase;
    if (sexe == "H") {
      metabolismeBase = 13.7516 * poids + 500.33 * taille - 6.755 * age + 66;
    } else {
      metabolismeBase = 9.5634 * poids + 184.96 * taille - 4.6756 * age + 655;
    }

    let totalCalorique;

    switch (activite) {
      case 1:
        totalCalorique = metabolismeBase * 1.3;
        break;
      case 2:
        totalCalorique = metabolismeBase * 1.375;
        break;
      case 3:
        totalCalorique = metabolismeBase * 1.55;
        break;
      case 4:
        totalCalorique = metabolismeBase * 1.725;
        break;
      case 5:
        totalCalorique = metabolismeBase * 1.9;
        break;
      default:
        console.log("erreur");
        break;
    }
    info.innerHTML = "il vous faut " + Math.round(totalCalorique) + "kcal par jour";
  }
});
