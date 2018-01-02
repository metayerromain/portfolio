var buttonChild = document.querySelectorAll(".buttonSlide");
var bbMarket = document.querySelectorAll(".bbMarket");
var busto = document.querySelectorAll(".busto");
var urbexTravelers = document.querySelectorAll(".urbexTravelers");

var overlay = document.querySelector(".overlayProjectMobile");
var overlayCloseButton = document.querySelector(".overlayCloseButton");
var mobileProject = document.querySelector(".mobileProject");
var itemsOverlay = document.querySelectorAll(".itemsOverlay");

/**
 * ANIMATION AU LANCEMENT D'UNE PAGE
 */
window.onload = function() {
  //La page chargé on enlève le loader
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--animation");
  loader.style.display = "none";

  var activeSlide = document.querySelectorAll(".activeSlide");

  var slideActive = document.querySelector(".slide--1");
  slideActive.classList.add("activeSlide");

  searchSlide(slideActive);
  urbexTravelers[0].classList.add("activeButton");
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
for (var i = 0; i < urbexTravelers.length; i++) {
  urbexTravelers[i].index = i;
  urbexTravelers[i].addEventListener("click", function(e) {
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
    this.classList.add("activeButton");
    closeOverlay();
  });
}

for (var i = 0; i < bbMarket.length; i++) {
  bbMarket[i].index = i;
  bbMarket[i].addEventListener("click", function(e) {
    var activeSlide = document.querySelectorAll(".activeSlide");

    for (var i = 0; i < activeSlide.length; i++) {
      activeSlide[i].classList.remove("activeSlide");
    }
    for (var i = 0; i < buttonChild.length; i++) {
      buttonChild[i].classList.remove("activeButton");
    }

    var slideActive = document.querySelector(".slide--2");
    slideActive.classList.add("activeSlide");

    this.classList.add("activeButton");
    searchSlide(slideActive);
    closeOverlay();
  });
}

for (var i = 0; i < busto.length; i++) {
  busto[i].index = i;
  busto[i].addEventListener("click", function(e) {
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
    this.classList.add("activeButton");
    closeOverlay();
  });
}

/**
 * ANIMATION DE L'OVERLAY EN RESPONSIVE
 */

function closeOverlay() {
  for (var i = 0; i < itemsOverlay.length; i++) {
    itemsOverlay[i].classList.remove("itemsOverlay--animation");
    itemsOverlay[i].classList.remove("activeButton");
    overlayCloseButton.classList.remove("overlayCloseButton--animation");
  }
  overlay.classList.remove("overlayProject--animation");
}

mobileProject.addEventListener("click", function() {
  overlay.classList.add("overlayProject--animation");
  overlayCloseButton.classList.add("overlayCloseButton--animation");
  for (var i = 0; i < itemsOverlay.length; i++) {

    itemsOverlay[i].classList.add("itemsOverlay--animation");
  }
});
overlayCloseButton.addEventListener("click", function() {
  closeOverlay();
});