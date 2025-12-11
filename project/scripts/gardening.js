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

// get elements
//using.querySelector     
const aboutSection = document.querySelector('#about');
const aboutLink = document.querySelector('#boutLink');
//using.getElementById
const contentSection = document.getElementById('content');
const resourcesLink = document.getElementById('resourcesLink');

// - - - - - - - - -    About   - - - - - - - - -      
//               Show About, hide Resources    
//prepare
aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Hide the resources section first
    contentSection.style.display = 'none'

    // Check the current display style and switch it
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        // Show the section
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
});

//Prevent hiding when clicking inside its content
aboutSection.addEventListener("click", function (e) {
    e.stopPropagation();
});

// - - - - - -    Resources  - - - - -
//           show Resources, hide About
//prepare
resourcesLink.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    //hide other sections first
    aboutSection.style.display = "none";

    //load and show when clicked
    fetch("resources.txt")
        .then(response => response.text())
        .then(data => {
            contentSection.innerHTML = data;
            contentSection.style.display = "block";            
        });    
});

//Prevent hiding when clicking inside its content
contentSection.addEventListener("click", function (e) {
    e.stopPropagation();
});

// - - - - - - - - - - - - - - - - - - - -

//hide about and resources when clicking outside
document.addEventListener("click", function () {
    aboutSection.style.display = "none";
    contentSection.style.display = "none";
});






