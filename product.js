// Retrieve product data from Local Storage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Display product details if data exists
if (product) {
    document.getElementById("productImage").src = product.image;
    document.getElementById("productTitle").textContent = product.title;
    document.getElementById("productDescription").textContent = product.description;
    document.getElementById("productPrice").textContent = `Price: $${product.price}`;
} else {
    console.log("No product data found!");
}
