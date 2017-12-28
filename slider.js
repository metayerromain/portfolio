var buttonChild = document.querySelectorAll(".buttonSlide");
var bbMarket = document.querySelector(".bbMarket");
var busto = document.querySelector(".busto");
var urbexTravelers = document.querySelector(".urbexTravelers");

/**
 * ANIMATION AU LANCEMENT D'UNE PAGE
 */
window.onload = function() {
  //La page chargé on enlève le loader
  var loader = document.querySelector(".loader");
  loader.style.display = "none";

  var activeSlide = document.querySelectorAll(".activeSlide");

  var slideActive = document.querySelector(".slide--1");
  slideActive.classList.add("activeSlide");

  searchSlide(slideActive);
  urbexTravelers.classList.add("activeButton");
};
/**
 * FONCTION QUI GERE LES ANIMATIONS DE LA SLIDE ACTIVE
 */
function searchSlide(slideActive) {

  var allSlides = document.querySelectorAll(".slide");
  var poste = document.querySelectorAll(".poste");
  var company = document.querySelectorAll(".company");
  var year = document.querySelectorAll(".year");
  var image = document.querySelectorAll(".imgSliderContainer");

  for (var i = 0; i < 3; i++) {
    poste[i].classList.remove("poste--animation");
    company[i].classList.remove("company--animation");
    year[i].classList.remove("poste--animation");
    image[i].classList.remove("img--animation");
  }

  var poste = slideActive.querySelector(".poste");
  var company = slideActive.querySelector(".company");
  var year = slideActive.querySelector(".year");
  var image = slideActive.querySelector(".imgSliderContainer");

  poste.classList.add("poste--animation");
  company.classList.add("company--animation");
  year.classList.add("poste--animation");
  image.classList.add("img--animation");
}

//CLIC SUR CHAQUE BOUTON DU SLIDER
urbexTravelers.addEventListener("click", function() {
  var activeSlide = document.querySelectorAll(".activeSlide");
  for (var i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("activeSlide");
  }
  for (var i = 0; i < buttonChild.length; i++) {
    buttonChild[i].classList.remove("activeButton");
  }
  var slideActive = document.querySelector(".slide--1");
  slideActive.classList.add("activeSlide");

  searchSlide(slideActive);
  urbexTravelers.classList.add("activeButton");
});

bbMarket.addEventListener("click", function() {
  var activeSlide = document.querySelectorAll(".activeSlide");
  for (var i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("activeSlide");
  }
  for (var i = 0; i < buttonChild.length; i++) {
    buttonChild[i].classList.remove("activeButton");
  }
  var slideActive = document.querySelector(".slide--2");
  slideActive.classList.add("activeSlide");

  searchSlide(slideActive);
  bbMarket.classList.add("activeButton");
});

busto.addEventListener("click", function() {
  var activeSlide = document.querySelectorAll(".activeSlide");
  for (var i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("activeSlide");
  }
  for (var i = 0; i < buttonChild.length; i++) {
    buttonChild[i].classList.remove("activeButton");
  }
  var slideActive = document.querySelector(".slide--3");
  slideActive.classList.add("activeSlide");

  searchSlide(slideActive);
  busto.classList.add("activeButton");
});