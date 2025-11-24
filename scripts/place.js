// place.js (deferred)
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


// --- static values 
const temperature = 24;
const windSpeed = 15;
const units = "imperial";

// FUNCTION: calculateWindChill
// Returns the wind chill value based on: temperature, wind speed, and unit system
// if using Fahrenheit and mph

function calculateWindChill(temp, speed, system) {
    if (system === "imperial") {
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    }
    else {
        return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    }
}

// FUNCTION: displayWindChill
// Checks if wind chill can be calculated
// If YES → calculate it
// If NO  → show "N/A"
function displayWindChill() {
    const windChillElement = document.getElementById("windchill");

    let chill;

    // Conditions differ by system
    const tempCondition =
        units === "imperial" ? temperature <= 50 : temperature <= 10;

    const windCondition =
        units === "imperial" ? windSpeed > 3 : windSpeed > 4.8;

    if (tempCondition && windCondition) {
        chill = calculateWindChill(temperature, windSpeed, units).toFixed(1);
    } else {
        chill = "N/A";
    }

    windChillElement.textContent = chill;
}

// Run on page load
document.addEventListener("DOMContentLoaded", displayWindChill);
