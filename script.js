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
    
  } else {
    toggle.classList.remove("active");
    text.innerHTML = "OFF";

     pendo.track("TOGGLE_STATUS", {
      toggleState: "OFF"
    });
  }
}
