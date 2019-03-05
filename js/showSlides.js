// slideshow 1 - pagaende sida

let slideIndex1 = 1;
showSlides(slideIndex1, 'mySlides1');
showSlides(slideIndex1, 'mySlides2');
showSlides(slideIndex1, 'mySlides3');

function plusSlides(n, x) {
  showSlides(slideIndex1 += n, x);
}

function showSlides(n, x) {
  let slides1 = document.getElementsByClassName(x);
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideIndex1 - 1].style.display = "flex";
}