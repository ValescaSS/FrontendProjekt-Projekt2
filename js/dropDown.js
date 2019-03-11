// nav menu dropdown


function dropDown(x, y, z) {
  let nav = document.getElementById(x);
  let icon1 = document.getElementById(y);
  let icon2 = document.getElementById(z);
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    icon1.style.display = "flex";
    icon2.style.display = "none";
  } else {
    nav.style.display = "flex";
    icon1.style.display = "none";
    icon2.style.display = "flex";
  }
}
