console.log("Initializing Track Events...")

const btnDefault = document.querySelector("#btn-default");
const btnPrimary = document.querySelector("#btn-primary");
const btnSecondary = document.querySelector("#btn-secondary");
const btnSuccess = document.querySelector("#btn-success");
const btnDanger = document.querySelector("#btn-danger");
const btnWarning = document.querySelector("#btn-warning");
const btnInfo = document.querySelector("#btn-info");
const btnDark = document.querySelector("#btn-dark");
const btnLink = document.querySelector("#btn-link");

btnDefault.addEventListener('click', () => {
    pendo.track("DEFAULT_BUTTON_EVENTS", {
        button: "DEFAULT_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "DEFAULT_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnPrimary.addEventListener('click', () => {
    pendo.track("PRIMARY_BUTTON_EVENTS", {
        button: "PRIMARY_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "PRIMARY_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnSecondary.addEventListener('click', () => {
    pendo.track("SECONDARY_BUTTON_EVENTS", {
        button: "SECONDARY_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "SECONDARY_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnSuccess.addEventListener('click', () => {
    pendo.track("SUCCESS_BUTTON_EVENTS", {
        button: "SUCCESS_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "SUCCESS_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnDanger.addEventListener('click', () => {
    pendo.track("DANGER_BUTTON_EVENTS", {
        button: "DANGER_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "DANGER_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnWarning.addEventListener('click', () => {
    pendo.track("WARNING_BUTTON_EVENTS", {
        button: "WARNING_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "WARNING_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnInfo.addEventListener('click', () => {
    pendo.track("INFO_BUTTON_EVENTS", {
        button: "INFO_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "INFO_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnDark.addEventListener('click', () => {
    pendo.track("DARK_BUTTON_EVENTS", {
        button: "DARK_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "DARK_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

btnLink.addEventListener('click', () => {
    pendo.track("LINK_BUTTON_EVENTS", {
        button: "LINK_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        plan: "Pro Annual",
        accountType: "Facebook",
        width: JSON.stringify(window.innerWidth),
        height: JSON.stringify(window.innerHeight)
      });
      console.log({trackEvent: "LINK_BUTTON_EVENTS", sentStatus: true})
      flushEvents()
})

function flushEvents() {
    setTimeout(function() {
        pendo.flushNow()
        console.log("FLUSHED_CACHED_EVENTS");
    }, 5000)   
}

const searchBarInput = document.querySelector("#search-bar-input")
const searchBarSubmitBtn = document.querySelector("#search-bar-button")
const searchForm = document.querySelector("#search-form");

searchForm.addEventListener('submit', (e) => {
    handleSubmit(e)
})

searchBarSubmitBtn.addEventListener('click', (e) => {
    handleSubmit(e)
})

function handleSubmit(e) {
    e.preventDefault()
    alert(`FETCHING DATA about: ${searchBarInput.value}`)
    captureSearchQuery(searchBarInput.value)
    searchBarInput.value = ""
}

function captureSearchQuery(query) {
    pendo.track("SEARH_QUERIES", {
        button: "SEARCH_BUTTON",
        page: "Inspire - Admins Dashboard | Track Events",
        url: pendo.getCurrentUrl(),
        query: query,
      });
      console.log({trackEvent: "SEARH_QUERIES", sentStatus: true})
      flushEvents()
}