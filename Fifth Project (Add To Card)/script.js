// ===============================
// LAPTOP API
// ===============================

const laptopAPI =
"https://dummyjson.com/products/category/laptops";


// ===============================
// GET HTML ELEMENTS
// ===============================

const productList =
document.getElementById(
    "productList"
);

const cartItems =
document.getElementById(
    "cartItems"
);

const cartCount =
document.getElementById(
    "cartCount"
);

const totalPrice =
document.getElementById(
    "totalPrice"
);


// ===============================
// CART ARRAY
// ===============================

let cart = [];


// ===============================
// GET LAPTOP DATA
// ===============================

async function getLaptops() {

    try {

        const response =
        await fetch(laptopAPI);

        const data =
        await response.json();


        // Only show 4 laptops

        const laptops =
        data.products.slice(0, 4);


        displayProducts(
            laptops
        );

    }

    catch (error) {

        productList.innerHTML = `

            <p>
                API Error!
                Please check internet.
            </p>

        `;

        console.log(error);

    }

}


// ===============================
// DISPLAY LAPTOPS
// ===============================

function displayProducts(
    laptops
) {

    productList.innerHTML = "";

    laptops.forEach(
        function(product) {

            productList.innerHTML += `

            <div class="product-card">

                <img
                src="${product.thumbnail}"
                alt="${product.title}"
                >

                <h4>
                    ${product.title}
                </h4>

                <p>

                    Price:

                    <strong>
                        $${product.price}
                    </strong>

                </p>

                <button
                class="add-btn"

                onclick="
                addToCart(
                    ${product.id}
                )
                "
                >

                    Add to Cart

                </button>

            </div>

            `;

        }
    );


    // Save API products

    window.products =
    laptops;

}


// ===============================
// ADD TO CART
// ===============================

function addToCart(
    productID
) {

    const product =
    window.products.find(
        function(item) {

            return (
                item.id ===
                productID
            );

        }
    );


    const existProduct =
    cart.find(
        function(item) {

            return (
                item.id ===
                productID
            );

        }
    );


    // If product already exists

    if (existProduct) {

        existProduct.quantity++;

    }

    // Add new product

    else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    displayCart();

}


// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    // Empty cart

    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <p class="empty-cart">

                Your cart is empty

            </p>

        `;

        cartCount.innerText = 0;

        totalPrice.innerText =
        "$0.00";

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(
        function(item) {

            cartItems.innerHTML += `

            <div class="cart-item">

                <img
                src="${item.thumbnail}"
                alt="${item.title}"
                >


                <div>

                    <div
                    class="cart-name"
                    >

                        ${item.title}

                    </div>

                    <div
                    class="cart-price"
                    >

                        $${item.price}

                    </div>

                </div>


                <div
                class="quantity"
                >

                    <button

                    onclick="
                    decreaseQuantity(
                        ${item.id}
                    )
                    "

                    >
                        −
                    </button>


                    <span>

                        ${item.quantity}

                    </span>


                    <button

                    onclick="
                    increaseQuantity(
                        ${item.id}
                    )
                    "

                    >
                        +
                    </button>

                </div>


                <div>

                    $${(
                        item.price *
                        item.quantity
                    ).toFixed(2)}

                </div>


                <button

                class="delete-btn"

                onclick="
                deleteItem(
                    ${item.id}
                )
                "

                >

                    <i
                    class="
                    fa-solid
                    fa-trash
                    "
                    ></i>

                </button>

            </div>

            `;

        }
    );


    updateCartTotal();

}


// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(
    productID
) {

    const product =
    cart.find(
        function(item) {

            return (
                item.id ===
                productID
            );

        }
    );


    product.quantity++;

    displayCart();

}


// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(
    productID
) {

    const product =
    cart.find(
        function(item) {

            return (
                item.id ===
                productID
            );

        }
    );


    if (
        product.quantity > 1
    ) {

        product.quantity--;

    }

    else {

        deleteItem(
            productID
        );

        return;

    }


    displayCart();

}


// ===============================
// DELETE ITEM
// ===============================

function deleteItem(
    productID
) {

    cart =
    cart.filter(
        function(item) {

            return (
                item.id !==
                productID
            );

        }
    );


    displayCart();

}


// ===============================
// UPDATE TOTAL
// ===============================

function updateCartTotal() {

    let totalQuantity = 0;

    let total = 0;


    cart.forEach(
        function(item) {

            totalQuantity +=
            item.quantity;


            total +=

            item.price *

            item.quantity;

        }
    );


    cartCount.innerText =
    totalQuantity;


    totalPrice.innerText =

    "$" +

    total.toFixed(2);

}


// ===============================
// START API
// ===============================

getLaptops();