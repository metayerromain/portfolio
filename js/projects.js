var body = document.querySelector("body");

/**
 * FORCE L'ANIMATION AU LANCEMENT D'UNE PAGE
 */
setTimeout(function() {
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


var spam = false;
var slideProject = document.querySelectorAll(".slideProject");
//ONSCROLL
window.addEventListener("mousewheel", function(e) {
  var activeSlide = document.querySelector(".activeSlideProject");
  var indexSlide = activeSlide.className.split(" ")[1].split("--")[1];
  var indexSlideParse = parseInt(indexSlide);
  console.log("indexParse" + indexSlideParse);
  var scroll = e.wheelDelta;

  if (spam == false) {
    //Scroll vers le haut
    if (scroll > 0 && scroll < 1000 && indexSlideParse > 1) {

      var timer = null;
      if (timer) {
        clearTimeout(timer);
      }
      var timer = setTimeout(() => {
        timer = null;
        spam = true;
        activeSlide.classList.remove("activeSlideProject");
        indexSlideParse--;

        var active = document.querySelector(".slideProject--" + indexSlideParse);
        active.classList.add("activeSlideProject");

        setTimeout(() => {
          spam = false;
        }, 1000)
      }, 500)
    }
    //scroll vers le bas
    if (scroll < 0 && scroll > -1000 && indexSlideParse < slideProject.length) {
      var timer = null;
      if (timer) {
        clearTimeout(timer);
      }
      var timer = setTimeout(() => {
        timer = null;
        spam = true;
        activeSlide.classList.remove("activeSlideProject");
        indexSlideParse++;

        var active = document.querySelector(".slideProject--" + indexSlideParse);
        active.classList.add("activeSlideProject");

        setTimeout(() => {
          spam = false;
        }, 1000)
      }, 500)
    }
  }
});