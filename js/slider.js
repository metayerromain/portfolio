var buttonChild = document.querySelectorAll(".buttonSlide");
var bbMarket = document.querySelectorAll(".bbMarket");
var busto = document.querySelectorAll(".busto");
var about = document.querySelectorAll(".about");
var urbexTravelers = document.querySelectorAll(".urbexTravelers");

var overlay = document.querySelector(".overlayProjectMobile");
var overlayCloseButton = document.querySelector(".overlayCloseButton");
var mobileProject = document.querySelector(".mobileProject");
var itemsOverlay = document.querySelectorAll(".itemsOverlay");
var spam = false;

/**
 * FORCE L'ANIMATION AU LANCEMENT D'UNE PAGE
 */
setTimeout(function() {
  //Apres 1s on enlève le loader
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--animation");
  setTimeout(function() {
    loader.style.display = "none";
  }, 500);

  //on active l'animation du contenu
  var activeSlide = document.querySelectorAll(".activeSlide");
  var slideActive = document.querySelector(".slide--1");
  slideActive.classList.add("activeSlide");

  searchSlide(slideActive);
  urbexTravelers[0].classList.add("activeButton");
}, 1500);

// EVENT LISTENER SUR MON NOM
var hover = document.querySelector(".romain");
var fullName = document.querySelectorAll(".fullName");
var circleNom = document.querySelector(".circle");

for (let i = 0; i < fullName.length; i++) {
  hover.addEventListener("mouseover", function() {
    fullName[i].classList.toggle("fullName--animation");
  });
  hover.addEventListener("mouseout", function() {
    fullName[i].classList.toggle("fullName--animation");
  });
}
/**
 * HOVER SUR LES PETITS RONDS
 */
function textOut(elem) {
  var text = elem.parentElement.children[0];
  text.classList.toggle("overlayTitle--animation");
}
urbexTravelers[0].addEventListener("mouseover", function() {
  textOut(urbexTravelers[0]);
});
urbexTravelers[0].addEventListener("mouseout", function() {
  textOut(urbexTravelers[0]);
});
bbMarket[0].addEventListener("mouseover", function() {
  textOut(bbMarket[0]);
});
bbMarket[0].addEventListener("mouseout", function() {
  textOut(bbMarket[0]);
});
busto[0].addEventListener("mouseover", function() {
  textOut(busto[0]);
});
busto[0].addEventListener("mouseout", function() {
  textOut(busto[0]);
});
about[0].addEventListener("mouseover", function() {
  textOut(about[0]);
});
about[0].addEventListener("mouseout", function() {
  textOut(about[0]);
});
/**
 * FONCTION QUI GERE LES ANIMATIONS DE LA SLIDE ACTIVE
 */
function searchSlide(slideActive) {

  var allSlides = document.querySelectorAll(".slide");
  var poste = document.querySelectorAll(".poste");
  var company = document.querySelectorAll(".company");
  var year = document.querySelectorAll(".year");
  var image = document.querySelectorAll(".imgSliderContainer");

  for (var i = 0; i < 4; i++) {
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

//ONSCROLL
window.addEventListener("mousewheel", function(e) {
  var activeSlide = document.querySelector(".activeSlide");
  var indexSlide = activeSlide.className.split(" ")[1].split("--")[1];
  var indexSlideParse = parseInt(indexSlide);
  var scroll = e.wheelDelta;

  if (spam == false) {
    if (scroll > 0 && scroll < 1000) {
      var timer = null;
      if (timer) {
        clearTimeout(timer);
      }
      var timer = setTimeout(() => {
        timer = null;
        spam = true;
        activeSlide.classList.remove("activeSlide");
        indexSlideParse--;
        if (indexSlideParse < 1) {
          indexSlideParse = 4;
        }

        var active = document.querySelector(".slide--" + indexSlideParse);
        active.classList.add("activeSlide");
        searchSlide(active);

        for (var i = 0; i < buttonChild.length; i++) {
          buttonChild[i].classList.remove("activeButton");
          buttonChild[indexSlideParse - 1].classList.add("activeButton");
        }

        setTimeout(() => {
          spam = false;
        }, 1000)
      }, 500)
    }
    if (scroll < 0 && scroll > -1000) {

      var timer = null;
      if (timer) {
        clearTimeout(timer);
      }
      var timer = setTimeout(() => {
        timer = null;
        spam = true;
        activeSlide.classList.remove("activeSlide");
        indexSlideParse++;
        if (indexSlideParse > 4) {
          indexSlideParse = 1;
        }

        var active = document.querySelector(".slide--" + indexSlideParse);
        active.classList.add("activeSlide");
        searchSlide(active);

        for (var i = 0; i < buttonChild.length; i++) {
          buttonChild[i].classList.remove("activeButton");
          buttonChild[indexSlideParse - 1].classList.add("activeButton");
        }

        setTimeout(() => {
          spam = false;
        }, 1000)
      }, 500)
    }
  }
});

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

for (var i = 0; i < about.length; i++) {
  about[i].index = i;
  about[i].addEventListener("click", function(e) {
    var activeSlide = document.querySelectorAll(".activeSlide");
    for (var i = 0; i < activeSlide.length; i++) {
      activeSlide[i].classList.remove("activeSlide");
    }
    for (var i = 0; i < buttonChild.length; i++) {
      buttonChild[i].classList.remove("activeButton");
    }
    var slideActive = document.querySelector(".slide--4");
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