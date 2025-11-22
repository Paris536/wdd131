document.addEventListener("DOMContentLoaded", () => {
    // ------------------------
    // 1. Product Array
    // ------------------------
    const products = [
        {id: 1, name: "CleanWave Soap", description: "Eco-friendly natural soap.", image: "images/soap.jpg"},
        {id: 2, name: "EcoFresh Detergent", description: "Safe for all fabrics.", image: "images/detergent.jpg"},
        {id: 3, name: "Sparkle Shampoo", description: "Gentle for all hair types.", image: "images/shampoo.jpg"},
        {id: 4, name: "Glow Lotion", description: "Moisturizes and protects skin.", image: "images/lotion.jpg"}
    ];

    // ------------------------
    // 2. Populate Featured Products (index.html)
    // ------------------------
    const productList = document.getElementById("productList");
    if (productList) {
        products.forEach(product => {
            productList.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
            `;
        });
    }

    // ------------------------
    // 3. Populate Product Gallery (products.html)
    // ------------------------
    const productGallery = document.getElementById("productGallery");
    if (productGallery) {
        products.forEach(product => {
            productGallery.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
            `;
        });
    }

    // ------------------------
    // 4. Populate Form Dropdown (form.html)
    // ------------------------
    const productSelect = document.getElementById("product");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // ------------------------
    // 5. LocalStorage Review Counter (review.html)
    // ------------------------
    const reviewCounter = document.getElementById("reviewCounter");
    if (reviewCounter) {
        let count = localStorage.getItem("reviewCount");
        count = count ? parseInt(count) : 0;
        count++;
        localStorage.setItem("reviewCount", count);
        reviewCounter.textContent = count;
    }
});
