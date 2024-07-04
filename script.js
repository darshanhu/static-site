const searchBox = document.querySelector("input[type='text']");

searchBox.addEventListener("keyup", function(event) { 
    if (event.key === "Enter") { 
        // Do work i.e trigger the guide
        pendo.showGuideById('ys7ZJPGskME_CNOaYSqG2_izzt4');
    } 
});

