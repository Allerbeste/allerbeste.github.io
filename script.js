
function ZeigeAntwort(id){
   var X = document.getElementById(id);
   if (X.style.display === "none") {
    X.style.display = "block";
  } else {
    X.style.display = "none";
  }
}
