// Slider on Home page
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 13) {
    counter = 1;
  }
}, 4000);