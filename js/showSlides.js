// slideshow - overlay pagaende sida

// öppnar slideshow direkt med första bilden när overlay öppnas
let index = 1;
showSlides(index, "mySlides1");
showSlides(index, "mySlides2");
showSlides(index, "mySlides3");

// funktion plusSlides kontrollerar knappar tidigare och nästa (< och > i overlay)
function plusSlides(n, x) {
  showSlides((index += n), x);
}

// funktion showSlides
function showSlides(n, x) {
  // Array som sparar alla element med samma klass i overlay.
  let slides = document.getElementsByClassName(x);

  // Om sant då blir index lika med 1 och slideshow börjar om (visar första bilden i arrayen).
  if (n > slides.length) {
    index = 1;
  }

  // Om sant då blir index lika med slides längd och då visas sista bilden i arrayen.
  if (n < 1) {
    index = slides.length;
  }

  // For loop som gör att alla bilder i slides arrayen inte visas.
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Sats som visar bilderna i arrayen slides enligt index.
  slides[index - 1].style.display = "flex";
}
