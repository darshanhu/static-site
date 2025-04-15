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
    visitor: {
      customLanguage: "hi",
      id: "open-user",
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
      id: "fastrack_account",
      name: "SOFTLAND_ACCOUNT",
      DAU: 99,
      monthly_value: 20000,
      is_paying: true,
      tags: ["enterprise"],
      prem: "Premium User",
      planLevel: "enterprise",
    },
  });
})("43994d6b-66ea-49fc-71f1-31077e387150");

pendo.track("OPEN_TRACK_EVENT", {
  plan: "Pro Annual",
  accountType: "Facebook",
  width: JSON.stringify(window.innerWidth),
  height: JSON.stringify(window.innerHeight),
});
