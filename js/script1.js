let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

// function currentSlide1(n) {
//   showSlides1((slideIndex1 = n));
// }

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideIndex1 - 1].style.display = "flex";
}
