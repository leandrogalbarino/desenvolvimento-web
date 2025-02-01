import { deliveryOptions } from "./deliveryOptions.js";
import { products } from "./products.js";
// import formatCurrency from "../scripts/utils/money.js";
export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));


    if (!cart) {
        cart = [];
    }
}

function saveStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function quantityProductAdded(productId) {
    const select = document.querySelector(`.js-num-products-${productId}`);
    if (!select) {
        return 1;
    }
    return select.value;
}

export function cartAddProduct(productId) {
    let matchingItem;
    let product;
    let quantity = Number(quantityProductAdded(productId));

    products.forEach((productsItem) => {
        if (productId === productsItem.id) {
            product = productsItem;
        }
    });

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId,
            quantity,
            priceCents: product.priceCents * quantity,
            deliveryOptionId: '1'
        });
    }
    saveStorage();
}

function deliveryOptionCalc(cartItem, option, operation) {
    deliveryOptions.forEach((deliveryOption) => {
        if (option === deliveryOption.id) {
            if (operation === 'sum') {
                cartItem.priceCents += deliveryOption.priceCents;
            }
            else if (operation === 'subtraction') {
                cartItem.priceCents -= deliveryOption.priceCents;
            }
        }
    });
}

function quantityCalc(cartItem, quantity) {
    cartItem.priceCents = (cartItem.priceCents / cartItem.quantity) * quantity;
    cartItem.quantity = quantity;
    saveStorage();
}



export function cartDeliveryChangeOption(cartItem, option) {
    if (cartItem.deliveryOptionId === option) {
        return;
    }

    const beforeOption = cartItem.deliveryOptionId;
    cartItem.deliveryOptionId = option;

    deliveryOptionCalc(cartItem, beforeOption, 'subtraction');
    deliveryOptionCalc(cartItem, cartItem.deliveryOptionId, 'sum');

    // Save Products
    saveStorage();
}


export function cartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

export function cartProductsPrice() {
    let cartPrice = 0;
    cart.forEach((cartItem) => {
        cartPrice += cartItem.priceCents;
    });
    return cartPrice;
}

export function cartDeliveryPrice() {
    let cartPrice = 0;
    cart.forEach((cartItem) => {
        deliveryOptions.forEach((deliveryOption) => {
            if (deliveryOption.id === cartItem.deliveryOptionId) {
                cartPrice += deliveryOption.priceCents;
            }
        });
    });
    return cartPrice;
}


export function removeFromCart(productId) {
    if (!productId) {
        console.error('productId não encontrado para este link:');
        return;
    }

    cart = cart.filter((cartItem) => {
        return cartItem.productId.trim() !== productId.trim();
    });
    saveStorage();
}

export function updateProductQuantity(productId) {
    cart.forEach((cartItem) => {
        if (productId.trim() === cartItem.productId.trim()) {
            const newQuantity = cartItem.quantity + 1;
            quantityCalc(cartItem, newQuantity);

        }
    });
    saveStorage();
}

export function loadCart(fun) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        const response = xhr.response;
        console.log(response);
        fun();
    });
    xhr.open('GET', 'https://supersimplebackend.dev/cart/');
    xhr.send();
  }
  