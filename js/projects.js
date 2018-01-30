var body = document.querySelector("body");

/**
 * FORCE L'ANIMATION AU LANCEMENT D'UNE PAGE
 */
setTimeout(function() {
  //La page chargé on enlève le loader
  //La page chargé on enlève le loader
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--animation");
  setTimeout(function() {
    loader.style.display = "none";
  }, 500);
  //Animation du contenu
  var companyTitle = document.querySelector(".companyTitle");
  var containerInfosProject = document.querySelector(".containerInfosProject");
  var contenuProject = document.querySelector(".contenuProject");
  var scroll = document.querySelector(".scrollAnimAbout");
  var slideProject = document.querySelector(".slideProject--1");

  companyTitle.classList.add("companyTitle--animation");
  containerInfosProject.classList.add("containerInfosProject--animation");
  contenuProject.classList.add("contenuProject--animation");
  scroll.classList.add("homeAnimation");
  slideProject.classList.add("activeSlideProject");
}, 1500);

//ANIMATION FOOTER DE PROJECT
var footer = document.querySelector(".footer");
var next = document.querySelector(".nextProject");
var titleNextProject = document.querySelector(".titleNextProject");

var square = document.querySelector(".squareMoveAnimation");
footer.addEventListener("mouseover", function() {
  square.classList.toggle("squareMoveAnimation--animation");
});
footer.addEventListener("mouseout", function() {
  square.classList.toggle("squareMoveAnimation--animation");
});