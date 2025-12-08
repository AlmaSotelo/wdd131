// form.js (deferred)

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// to avoid the counter increaseing when review.html is refresh
document.querySelector("form").addEventListener("submit", () => {
    localStorage.setItem("submitted", "true");
});

// function to populate options dropdown
function bringProducts(products) {
    const productSelect = document.getElementById("productSelect");

    if (productSelect) {

        products.forEach(product => {
            const option = document.createElement("option"); //create new <option> element
            option.value = product.name; // per instructions
            option.textContent = product.name; // what user sees
            productSelect.appendChild(option); // add the current option to the <select> element
        });
    }
};

bringProducts(products);

