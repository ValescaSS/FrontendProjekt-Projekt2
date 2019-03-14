// automatisk slideshow - index sida

let slideIndex = 0;

function showSlidesAuto() {

  // Array som sparar alla element med samma klass (bilder).
  let slides = document.getElementsByClassName("mySlides");

  // For loop som gör att alla bilder i slides arrayen inte visas.
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // slideIndex ökar med 1
  slideIndex++;

  // Om sant då blir slideIndex lika med 1 och slideshow börjar om (visar första bilden i arrayen).
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Sats som visar bilderna i arrayen slides enligt index.
  slides[slideIndex - 1].style.display = "block";

  // funktion setTimeout som anropar funktionen showSlidesAuto varje två och halva sekunder
  // ändrar bilden varje två och halva sekunder
  setTimeout(showSlidesAuto, 2500);
}

showSlidesAuto();

