var body = document.querySelector("body");
window.onload = function() {
  //La page chargé on enlève le loader
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--animation");
  loader.style.display = "none";

  var companyTitle = document.querySelector(".companyTitle");
  var containerInfosProject = document.querySelector(".containerInfosProject");
  var contenuProject = document.querySelector(".contenuProject");

  companyTitle.classList.add("companyTitle--animation");
  containerInfosProject.classList.add("containerInfosProject--animation");
  contenuProject.classList.add("contenuProject--animation");
};