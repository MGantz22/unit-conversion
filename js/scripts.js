function hideResultsAndError(){
    document.getElementById("oz").setAttribute("class","hidden");
    document.getElementById("g").setAttribute("class","hidden");
    document.getElementById("lbs").setAttribute("class","hidden");
    document.getElementById("sorry").setAttribute("class","hidden");
}
function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='units']:checked").value;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
}


window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideResultsAndError();

  if (!Onces || !Onces) {
    document.getElementById("error-message").removeAttribute("class");
    } else {    
  if (!Grams || !Grams) {
    document.getElementById("error-message").removeAttribute("class");
    } else {        
  if (!Pounds || !Height) {
    document.getElementById("error-message").removeAttribute("class");
    };
  };
 };
  };
};