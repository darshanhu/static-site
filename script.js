const searchBox = document.querySelector("input[type='text']");

function triggerGuideOnEnter() {
  if (!executed) {
    executed = true;
    pendo.showGuideById('ys7ZJPGskME_CNOaYSqG2_izzt4');
  }
}

searchBox.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    triggerGuideOnEnter();
  }
});