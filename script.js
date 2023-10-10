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


const birth = {
	date: 10,
	month: 10
}

const date = new Date();

if(date.getDate() === birth.date && date.getMonth() + 1 === birth.month) {
   pendo.showGuideById("ljF1w0DV486z1bp09uR0PWkpauI");
}
