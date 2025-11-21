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
document.addEventListener("DOMContentLoaded", () => {

/* per instructions: "The navigation must employ a hover affect."
*/
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

    /* transform hamburger into X  - still working on this
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".mobile-menu");

    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("active"); // toggles X
        menu.classList.toggle("active");         // shows/hides menu
    });*/
})
