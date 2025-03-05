let cart = [];

function addToCart(name, price, image) {
    let item = { name, price, image };
    cart.push(item);
    updateCart();
}

function updateCart() {
    let cartCount = document.getElementById("cart-count");
    cartCount.innerText = cart.length;

    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartItems.innerHTML += `
            <li>
                <img src="${item.image}" width="50"> ${item.name} - $${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">Remove</button>
            </li>
        `;
    });

    document.getElementById("total-price").innerText = Total: $${totalPrice.toFixed(2)};
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById("cart-icon").addEventListener("click", function() {
    document.getElementById("cart-modal").style.display = "block";
});

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}