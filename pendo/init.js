
(function (apiKey) {
  (function (p, e, n, d, o) {
    var v, w, x, y, z;
    o = p[d] = p[d] || {};
    o._q = o._q || [];
    v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];
    for (w = 0, x = v.length; w < x; ++w)
      (function (m) {
        o[m] =
          o[m] ||
          function () {
            o._q[m === v[0] ? "unshift" : "push"](
              [m].concat([].slice.call(arguments, 0))
            );
          };
      })(v[w]);
    y = e.createElement(n);
    y.async = !0;
    y.src = "https://cdn.pendo.io/agent/static/" + apiKey + "/pendo.js";
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, "script", "pendo");

  // This function creates visitors and accounts in Pendo
  // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
  // Please use Strings, Numbers, or Bools for value types.

  pendo.initialize({
    guides: {
      delay: false,
      disabled: false,
      globalScripts: [
        {
          script: function (step, guide) {
            console.log('Step ', step.id, ' has run');
          }
        }
      ],
      timeout: 30000
    },
    visitor: {
      customLanguage: "",
      id: "new-visitor",
      email: "propertyUser-new@mail.com",
      full_name: "Darshan Hulswar",
      tags: ["Product Manager"],
      functionZone: "Phoenix's Build",
      pendoId: 99,
      listProperty: ["128", "129", "130", "131", "240"],
      numericList: [400, 500, 600, 700, 800],
      birthDate: "1999-11-28",
      uniqueClientId: 99294858,
      typeTesting: true,
      serverUrl: "https://static-toggle.netlify.app/",
      rw_sw_url: "https://static-toggle.netlify.app/",
      subscriptionRenewDate: "2024-07-14",
      MRR: 499.87,
      architecture: "DEEP SEEK",
    },

    account: {
      id: "new-account",
      name: {
        "account": {
          "id": "12345",
          "name": "Acme Corp",
          "plan": "Pro",
          "active": true
        }
      },
      DAU: 99,
      monthly_value: 20000,
      is_paying: true,
      tags: ["enterprise"],
      prem: "Premium User",
      planLevel: "enterprise",
    },
  });
})("43994d6b-66ea-49fc-71f1-31077e387150");

/*
pendo.track("OPEN_TRACK_EVENT", {
  plan: "Pro Annual",
  accountType: "Facebook",
  width: JSON.stringify(window.innerWidth),
  height: JSON.stringify(window.innerHeight),
});
*/


// !function () {
//   var i = "analytics", analytics = window[i] = window[i] || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
//     analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "screen", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware", "register"]; analytics.factory = function (e) { return function () { if (window[i].initialized) return window[i][e].apply(window[i], arguments); var n = Array.prototype.slice.call(arguments); if (["track", "screen", "alias", "group", "page", "identify"].indexOf(e) > -1) { var c = document.querySelector("link[rel='canonical']"); n.push({ __t: "bpc", c: c && c.getAttribute("href") || void 0, p: location.pathname, u: location.href, s: location.search, t: document.title, r: document.referrer }) } n.unshift(e); analytics.push(n); return analytics } }; for (var n = 0; n < analytics.methods.length; n++) { var key = analytics.methods[n]; analytics[key] = analytics.factory(key) } analytics.load = function (key, n) { var t = document.createElement("script"); t.type = "text/javascript"; t.async = !0; t.setAttribute("data-global-segment-analytics-key", i); t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"; var r = document.getElementsByTagName("script")[0]; r.parentNode.insertBefore(t, r); analytics._loadOptions = n }; analytics._writeKey = "AUrWndPhT0Ic1Pc9ifeTasMBvjDD9Q4X";; analytics.SNIPPET_VERSION = "5.2.0";
//     analytics.load("AUrWndPhT0Ic1Pc9ifeTasMBvjDD9Q4X");
//     analytics.page();
//   }
// }();

// analytics.identify("darshan.hulswar@pendo.io", { email: "darshan.hulswar@pendo.io", name: "John Doe", groupId: "test" })
