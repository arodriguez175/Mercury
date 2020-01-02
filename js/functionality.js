// Hamburger menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Make back button
document.getElementById("back-button").addEventListener("click", goBack);

function goBack() {
    window.history.back();
}

// Auto-updating Copyright Year
document.getElementById("footer").innerHTML="Copyright&copy; "+(new Date().getFullYear());