 (function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
     
        pendo.initialize({
         visitor: {
                id: "propertyUser",
                full_name:    "Darshan Hulswar",
                typeTesting: 99,
                listProperty: ["128", "129", "130", "131", "240"],
                numericList: [400, 500, 600, 700, 800],
                birthDate: "1999-11-28"
            },

            account: {
                id: "fastrack_account",
                name: "SOFTLAND_ACCOUNT",
                DAU: 99
            });
        }})('43994d6b-66ea-49fc-71f1-31077e387150');
