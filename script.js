// Product array
const products = [
    {id: 1, name: "CleanWave Soap"},
    {id: 2, name: "EcoFresh Detergent"},
    {id: 3, name: "Sparkle Shampoo"},
    {id: 4, name: "Glow Lotion"}
];

// Populate the select options
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name; // Value is product name
    option.textContent = product.name;
    productSelect.appendChild(option);
});
