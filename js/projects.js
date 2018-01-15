var body = document.querySelector("body");

window.onload = function() {
  //La page chargé on enlève le loader
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--animation");
  setTimeout(function() {
    loader.style.display = "none";
  }, 500);
  var companyTitle = document.querySelector(".companyTitle");
  var containerInfosProject = document.querySelector(".containerInfosProject");
  var contenuProject = document.querySelector(".contenuProject");

  companyTitle.classList.add("companyTitle--animation");
  containerInfosProject.classList.add("containerInfosProject--animation");
  contenuProject.classList.add("contenuProject--animation");
};

//ANIMATION FOOTER DE PROJECT
var footer = document.querySelector(".footer");
var square = document.querySelector(".squareMoveAnimation");
footer.addEventListener("mouseover", function() {
  square.classList.toggle("squareMoveAnimation--animation");
});
footer.addEventListener("mouseout", function() {
  square.classList.toggle("squareMoveAnimation--animation");
});