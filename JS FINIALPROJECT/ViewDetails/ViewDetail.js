// Get DOM elements
const productDetailsDiv = document.getElementById("productDetails");

// Get data from localStorage
const allProducts = JSON.parse(localStorage.getItem("allproducts"));
const productID = localStorage.getItem("productID");

// Function to display product details
function displayProductDetails() {
    // Check if we have data
    if (!allProducts || !productID) {
        productDetailsDiv.innerHTML = "<p>Product not found</p>";
        return;
    }

    // Find the selected product
    const selectedProduct = allProducts.find(product => product.id == productID);

    // If product not found
    if (!selectedProduct) {
        productDetailsDiv.innerHTML = "<p>Product not found</p>";
        return;
    }

    // Display the product
    const convertedPrice = Math.floor(selectedProduct.price * 87);
    const reviewsHTML = getReviewsHTML(selectedProduct.reviews);

    productDetailsDiv.innerHTML = `
        <main>
            <div id="flex_details">
                <div id="image">
                    <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}">
                </div>
                <div id="para">
                    <h3>${selectedProduct.title}</h3>
                    <p><b>Brand</b>: ${selectedProduct.brand}</p>
                    <p><b>Category</b>: ${selectedProduct.category}</p>
                    <p><b>Description</b>: ${selectedProduct.description}</p>
                    <p><b>Price: ₹</b><span>${convertedPrice}</span></p>
                    <button class="btn blue" id="addToCart">Add to Cart</button>
                    <button class="btn oranged" id="backToHome">Back to Home</button>
                </div>
            </div>

            <div id="review">
                <h1>Customer Reviews</h1>
                <hr>
                ${reviewsHTML}
            </div>
        </main>
    `;

    // Add button event listeners
    addButtonListeners();
}

// Function to create reviews HTML
function getReviewsHTML(reviews) {
    if (!reviews || reviews.length === 0) {
        return "<p>No reviews yet</p>";
    }

    return reviews.map(review => `
        <div id="ratings">
            ${"❤️".repeat(review.rating)}${"🖤".repeat(5 - review.rating)}
        </div>
        <p id="comment">${review.comment}</p>
        <p id="nam">By <strong>${review.reviewerName}</strong> on ${formatDate(review.Date)}</p>
        <hr>
    `).join("");
}

// Function to format date
function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

// Function to add button event listeners
function addButtonListeners() {
    const backButton = document.getElementById("backToHome");
    const cartButton = document.getElementById("addToCart");

    if (backButton) {
        backButton.addEventListener("click", goBackHome);
    }

    if (cartButton) {
        cartButton.addEventListener("click", addToCart);
    }
}

// Function to go back home
function goBackHome() {
    window.location.href = "../HOME/home.html";
}

// Function to add to cart
function addToCart() {
    // Get the selected product
    const selectedProduct = allProducts.find(product => product.id == productID);
    
    // Get existing cart or create empty array
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Check if product already in cart
    let existingProduct = cart.find(item => item.id === selectedProduct.id);
    
    if (existingProduct) {
        // If already in cart, increase quantity
        existingProduct.quantity += 1;
    } else {
        // If new product, add it with quantity 1
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
    }
    
    // Save cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cart));
    
    // Show success message
    alert("✅ Product added to cart!");
}

// Run when page loads
document.addEventListener("DOMContentLoaded", displayProductDetails);
