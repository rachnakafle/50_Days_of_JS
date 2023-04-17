function encrypt() {
  var baseString = document.getElementById("en").value;
  encodedString = window.btoa(baseString);

  document.getElementById("de").value = encodedString;
}

function decrypt() {
  var decodedString = window.atob(encodedString);
  document.getElementById("de").value = decodedString;
}
