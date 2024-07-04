const searchBox = document.querySelector("input[type='text']");

searchBox.addEventListener("keyup", function(event) { 
    if (event.key === "Enter") { 
        // Do work i.e trigger the guide
        pendo.showGuideById('ys7ZJPGskME_CNOaYSqG2_izzt4');
        pendo.updateOptions( {
          visitor: {
              id: "propertyUser-new",
              full_name: "Darshan Hulswar",
              pendoId: 99,
              listProperty: ["128", "129", "130", "131", "240"],
              numericList: [400, 500, 600, 700, 800],
              birthDate: "1999-11-28",
              uniqueClientId: 99294858,
              typeTesting: true,
              serverUrl: "https://static-toggle.netlify.app/",
              rw_sw_url: "https://static-toggle.netlify.app/"
              
          },
      
          account: {
              id: "fastrack_account",
              name: "SOFTLAND_ACCOUNT",
              DAU: 99
          },
          events: {
              ready: function () {
                  console.log("Yes, now it will show the guide")
                  window.pendo.showGuideById("ljF1w0DV486z1bp09uR0PWkpauI")
                  console.log("No it's not showing")
              }
          },
          // disableGuides: true
      });
    } 
});

