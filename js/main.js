/**
 * ANIMATION AU LANCEMENT D'UNE PAGE DES ELEMENTS
 */
setTimeout(function() {
  var homeHeader = document.querySelector(".header");
  homeHeader.classList.add("homeAnimation");
  var homeButtons = document.querySelector(".sliderButtons");
  homeButtons.classList.add("homeAnimation");
  var mobileProjects = document.querySelector(".mobileProjects");
  mobileProjects.classList.add("homeAnimation");
}, 1500);

/**
 * CHANGEMENT DU CURSOR AU HOVER SUR LINKCURSOR
 */
var circle = document.querySelector(".circle");
var circleInner = document.querySelector(".circleInner");
var linkCursor = document.querySelectorAll(".linkCursor");
for (let i = 0; i < linkCursor.length; i++) {
  linkCursor[i].addEventListener("mousemove", function() {
    posx = event.clientX;
    posy = event.clientY;
    linkCursor[i].style.cursor = "none";
    circle.style.transform = "translate(" + posx + "px" + "," + posy + "px" + ")";
    circleInner.classList.add("circle--animation--1");
  });

  linkCursor[i].addEventListener("mouseout", function() {
    circleInner.classList.remove("circle--animation--1");
  });
  linkCursor[i].addEventListener("click", function() {
    circleInner.classList.toggle("circle--animation--1");
  });
}

/**
 * ANIMATION DES LIENS SUR TOUTES LES PAGES DONC BLC
 */
var hoverResume = document.querySelector(".hoverResume");
var trait = document.querySelector(".trait");
var textResume = document.querySelector(".textResume");
var resume = document.querySelector(".resume");
var contactItemAll = document.querySelectorAll(".contactItem");
var link = document.querySelectorAll(".link");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", function() {
    link[i].classList.toggle("fadeLink");
  });
  link[i].addEventListener("mouseout", function() {
    link[i].classList.toggle("fadeLink");
  });
}

hoverResume.addEventListener("mouseover", function() {
  trait.classList.toggle("fadeout");
  textResume.classList.toggle("fadeout");
  resume.classList.toggle("fadeout");
});
hoverResume.addEventListener("mouseout", function() {
  trait.classList.toggle("fadeout");
  textResume.classList.toggle("fadeout");
  resume.classList.toggle("fadeout");
});

for (let i = 0; i < contactItemAll.length; i++) {
  contactItemAll[i].addEventListener("mouseover", function() {
    contactItemAll[i].classList.toggle("fadeItemsContact");
  });
  contactItemAll[i].addEventListener("mouseout", function() {
    contactItemAll[i].classList.toggle("fadeItemsContact");
  });
}