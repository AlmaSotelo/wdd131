// temples.js (deferred)
(function () {
    "use strict";

    // current year
    var yearEl = document.getElementById("currentyear");
    if (yearEl) {
        var now = new Date();
        yearEl.textContent = now.getFullYear();
    }

    // last modified: uses the browser-provided document.lastModified string
    var lastEl = document.getElementById("lastModified");
    if (lastEl) {
        // Preserve native format per instructions.
        lastEl.textContent = "Document last modified: " + (document.lastModified || "unknown");
    }
})();


/* per instructions: "The navigation must employ a hover affect."
*/
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

document.addEventListener("DOMContentLoaded", () => {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');


        /* transform hamburger into X and back to hamburguer */
        if (nav.classList.contains('open')) {
            menuBtn.textContent = "✖";
        } else {
            menuBtn.textContent = "☰";
        }
    });   
})
