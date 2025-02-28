const searchBox = document.querySelector("input[type='text']");

let executed = false;
function triggerGuideOnEnter() {
  if (!executed) {
    executed = true;
    pendo.showGuideById('ys7ZJPGskME_CNOaYSqG2_izzt4');
  }
}

searchBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    triggerGuideOnEnter();
  }
});


(function () {
  // Delay execution for 10 seconds following the completion of page load
  const delayInMilliseconds = 10000;

  const executeAfterDelay = () => {
    // the below line checks for passed metadata: login_milestone using pendo.getSerializedMetadata() on visitor level and then checks for the condition if it matches then programatically trigger the guide using pendo.showGuideById("guideID")
    pendo.getSerializedMetadata().visitor.login_milestone
    let loginMieStone = pendo.getSerializedMetadata().visitor.login_milestone;

    if (loginMieStone === 10) {
      pendo.showGuideById("-4P7n-IFWKFMXrawJCJW88j1S5A")
    }
  };

  window.onload = () => {
    try {
      setTimeout(executeAfterDelay, delayInMilliseconds);
    } catch (error) {
      console.error('Error executing function after delay:', error);
    }
  };
})();