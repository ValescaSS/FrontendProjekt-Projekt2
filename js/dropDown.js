// dropdown nav meny

// Funktionen anropas onclick.
// Funktion dropDown visar eller gömmer navigerings meny och ändrar ikoner om sidan visas eller inte.
// I desktoplayout visas eller göms nav meny med undersidor pågående-, kommande- och tidigare utställningar.
// I mobil layout visas eller göms två nav meny. 
// En med hem-, utställningar- och kontaktsidor. 
// Den andra nav meny visas eller göms när man klickar på utställningar.

function dropDown(x, y, z) {

  // Variabler som sparar elementen enligt Id.
  let nav = document.getElementById(x);
  let icon1 = document.getElementById(y);
  let icon2 = document.getElementById(z);

  // Om sant då göms nav meny.
  // Ändrar ikoner.
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    icon1.style.display = "flex";
    icon2.style.display = "none";
  } 

  // Om if påstående är inte sant då visas nav meny.
  // Ikoner ändrar.
  else {
    nav.style.display = "flex";
    icon1.style.display = "none";
    icon2.style.display = "flex";
  }
}


