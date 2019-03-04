// automatisk slideshow - index sida

let slideIndex = 0;

function showSlidesAuto() {
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlidesAuto, 2500);
}
showSlidesAuto();

// overlay - pagaende sida

function on(x) {
  document.getElementById(x).style.display = "block";
}
function off(y) {
  document.getElementById(y).style.display = "none";
}
