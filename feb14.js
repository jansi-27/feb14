// Fetch product data from FakeStore API
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const productContainer = document.getElementById("productContainer");

        // Loop through products and display them
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Price: $${product.price}</p>
                <button class="seeMoreBtn" data-id="${product.id}">See More</button>
            `;

            productContainer.appendChild(productCard);
        });

        // Attach event listeners to all "See More" buttons
        document.querySelectorAll(".seeMoreBtn").forEach(button => {
            button.addEventListener("click", function () {
                const productId = this.getAttribute("data-id"); // Get product ID
                fetch(`https://fakestoreapi.com/products/${productId}`)
                    .then(response => response.json())
                    .then(product => {
                        localStorage.setItem("selectedProduct", JSON.stringify(product)); // Store in Local Storage
                        window.location.href = "product.html"; // Redirect to product page
                    })
                    .catch(error => console.error("Error fetching product details:", error));
            });
        });
    })
    .catch(error => console.error("Error fetching product data:", error));


