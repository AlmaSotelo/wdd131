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
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Hermosillo Sonora Mexico",
        location: "Hermosillo, Mexico",
        dedicated: "2000, February, 27",
        area: 10789,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hermosillo-sonora-mexico/320x200/hermosillo-sonora-mexico-temple-1202586-wallpaper.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona",
        dedicated: "1927, October, 23-26",
        area: 75000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/320x200/mesa_arizona_temple_main.jpeg"
    },
    {
        templeName: "Tucson, Arizona",
        location: "Tucson, Arizona",
        dedicated: "2017, August, 13",
        area: 38216,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/320x200/tucson-arizona-temple-exterior-1929407-wallpaper.jpg"
    }

];

const container = document.querySelector(".templeContainer"); //select the the <div> where all temple cards are being inserted

createTempleCard(temples);

// filtering

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector('#new');
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

function getYear(temple) {
    return parseInt(temple.dedicated.split(",")[0].trim(), 10);
}

function renderAll() {
    container.innerHTML = "";  // clean the container
    createTempleCard(temples);
}

homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = ""; 
    createTempleCard(temples);
});

oldLink.addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = ""; 
    createTempleCard(temples.filter(temple => (getYear(temple)) < 1900));
});

newLink.addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = ""; 
    createTempleCard(temples.filter(temple => (getYear(temple)) > 2000));
});

largeLink.addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = ""; 
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = "";
    createTempleCard(temples.filter(temple => temple.area < 10000));
});


function createTempleCard(filteredTemples) {

    container.innerHTML = "";
    
    filteredTemples.forEach(temple => {        
        
        // Create card
        let card = document.createElement("section");
        card.classList.add("temple-card"); //add "temple-card" class to our created "section" element in our DOM
        
        // Create elements
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        let location = document.createElement("p");
        location.textContent = `${temple.location}`;

        let dedicated = document.createElement("p");
        dedicated.textContent = `${temple.dedicated}`;

        let area = document.createElement("p");
        area.textContent = `${temple.area.toLocaleString()} sq ft`;

        let image = document.createElement("img"); 
        image.dataset.src = temple.imageUrl; // lazy load
        image.loading = "lazy";
        image.alt = `${temple.templeName} Temple`;
    
        // Append to card
        card.append(templeName, location, dedicated, area, image);

        // Append card to container
        container.appendChild(card);

    })

    // --- IntersectionObserver for lazy loading ---
    const lazyImages = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // load image
                obs.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
};

document.cookie = "thirdparty-cookie=12345; SameSite=None; Secure; path=/; max-age=86400";