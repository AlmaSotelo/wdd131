//footer with current year
document.querySelector('#year').textContent = new Date().getFullYear();

const seeds = [
    {
        name: "tomatoe",
        category: "fruit",
        plantingSeasson: "spring",
        sqftNeeded: 3,
    },
    {
        name: "broccoli",
        category: "vegetable",
        plantingSeasson: "fall",
        sqftNeeded: 1.5,

    },
    {
        name: "Marigol",
        category: "medicinal",
        plantingSeasson: "winter",
        sqftNeeded: 2,
    },
    {
        name: "Jalapeño pepper",
        category: "vegetable",
        plantingSeasson: "spring",
        sqftNeeded: 2,
    },
    {
        name: "Basil",
        category: "herb",
        plantingSeasson: "spring",
        sqftNeeded: 1,
    },
    {
        name: "Geranium",
        category: "flower",
        plantingSeasson: "winter",
        sqftNeeded: 2,
    }
];


// - - - - - - - - -    About   - - - - - - - - -
//               Show About, hide Resources
//prepare*/

// ---------------------------- Get elements ----------------------------
const aboutSection = document.querySelector('#about');
const aboutLink = document.querySelector('#boutLink');

const contentSection = document.getElementById('content');
const resourcesLink = document.getElementById('resourcesLink');

const subCountEl = document.getElementById("subscribers");
const formSection = document.getElementById("formSection");


// -------------------------- ABOUT SECTION ------------------------------
if (aboutLink && aboutSection) {

    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (contentSection) contentSection.style.display = "none";

        aboutSection.style.display =
            (aboutSection.style.display === "block") ? "none" : "block";
    });

    aboutSection.addEventListener("click", e => e.stopPropagation());
}


// -------------------------- RESOURCES SECTION --------------------------
if (resourcesLink && contentSection) {

    resourcesLink.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (aboutSection) aboutSection.style.display = "none";

        fetch("resources.txt")
            .then(response => response.text())
            .then(data => {
                contentSection.innerHTML =
                    "<h1>Resources for your Success</h1>" + data;
                contentSection.style.display = "block";
            });
    });

    contentSection.addEventListener("click", e => e.stopPropagation());
}


// --------------------------- CLICK OUTSIDE ------------------------------
document.addEventListener("click", function () {
    if (aboutSection) aboutSection.style.display = "none";
    if (contentSection) contentSection.style.display = "none";
});


// ------------------------------ FORM -----------------------------------
let subCounter = 0;

if (formSection && subCountEl) {

    formSection.addEventListener("submit", function (e) {
        e.preventDefault();

        subCounter += 1;
        subCountEl.textContent = subCounter;

        formSection.reset();
    });
    
}





