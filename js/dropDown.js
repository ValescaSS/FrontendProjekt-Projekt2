// dropdown function 

function myFunction(y) {
    let x = document.getElementById(y);
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }