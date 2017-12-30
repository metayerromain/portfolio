/**
 * ANIMATION AU LANCEMENT D'UNE PAGE
 */
window.onload = function() {
  //La page chargé on enlève le loader
  var loader = document.querySelector(".loader");
  loader.style.display = "none";

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