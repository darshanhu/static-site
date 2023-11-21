let active = false;

function toggle() {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector(".text");
  active = !active;
  if (active) {
    toggle.classList.add("active");
    text.innerHTML = "ON";

    pendo.track("TOGGLE_STATUS", {
      toggleState: "ON"
    });

    console.log("Pendo Track Event Called with status 'ON'")
    
  } else {
    toggle.classList.remove("active");
    text.innerHTML = "OFF";

     pendo.track("TOGGLE_STATUS", {
      toggleState: "OFF"
    });

    console.log("Pendo Track Event Called with status 'OFF'")
  }
}


$('#exampleModal').on('shown.bs.modal', function () {
  // $('#myInput').trigger('focus')
})



window.addEventListener('resize', function(event) {

  if(window.innerWidth >= 1311 ) {
    pendo.showGuideById("tVYYILHD6bVvCa-4TZOf9sICX7g");
    console.log("SCreen size changed")
  }

}, true);

const btn = document.getElementById("chameleon-btn");

let flag = true;

setInterval(function(){ 
  //code goes here that will be run every 1 seconds.   
  console.log(time)

  if(flag) {
    btn.style.display = "none";
    flag = false;
    console.log("Button is visible")
  } else {
    btn.style.display = "block";
    flag = true;
    console.log("Button is hidden")
  }
}, 10000);



