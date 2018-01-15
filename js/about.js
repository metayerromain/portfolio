/**
 * ANIMATION AU LANCEMENT D'UNE PAGE
 */
window.onload = function() {
  //La page chargé on enlève le loader
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--animation");
  setTimeout(function() {
    loader.style.display = "none";
  }, 500);
  var textInfos = document.querySelector(".textInfos");
  var rightInfos = document.querySelector(".rightInfos");
  var contact = document.querySelector(".contact");
  var imgAboutContainer = document.querySelector(".imgAboutContainer");
  var containerInfosLeft = document.querySelector(".containerInfosLeft");

  rightInfos.classList.add("rightInfos--animation")
  textInfos.classList.add("text--animation");
  contact.classList.add("contact--animation");
  imgAboutContainer.classList.add("image--animation");
  containerInfosLeft.classList.add("containerInfosLeft--animation");
};