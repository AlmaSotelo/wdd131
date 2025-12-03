// form.js (deferred)
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

const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;     // value sent in form
    option.textContent = product.name; // what user sees
    select.appendChild(option);
});