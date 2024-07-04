const searchBox = document.querySelector("input[type='text']");

let executed = false;
searchBox.addEventListener("keyup", function(event) { 
    if (event.key === "Enter") { 
      if (!executed) {
        executed = true;
        // Do work i.e trigger the guide
        pendo.showGuideById('ys7ZJPGskME_CNOaYSqG2_izzt4');
      }   
    } 
});