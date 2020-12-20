//DOM
let btnCalcul = document.querySelector(".calculer");
let form = document.querySelector("form");
let inputAge = document.querySelector("#Age");
let inputSexe = document.getElementsByName("sexe");
let inputTaille = document.querySelector("#Taille");
let inputPoids = document.querySelector("#Poids");
let selectActivite = document.querySelector("#activite");
let selectObjectif = document.querySelector("#objectif");

//Variables de travail
let age,sexe,taille,poids,activite,objectif;



//on empeche le formulaire de s'envoyer
form.addEventListener("submit",(e)=> {
  e.preventDefault();
})

btnCalcul.addEventListener("click",()=> {
  //attribution des valeurs
  age = inputAge.value;
  for(input of inputSexe) {
    if(input.checked) {
      sexe = input.value;
    }
  }
  taille = inputTaille.value;
  poids = inputPoids.value;
  activite = selectActivite.value;
  objectif = selectObjectif.value;

  console.log(activite + objectif);

  
})