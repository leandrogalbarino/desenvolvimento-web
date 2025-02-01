import {cartQuantity} from '../data/cart.js';
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/backend-pratice.js';
// import '../data/cart-oop.js';
// import '../data/cart-class.js';

function renderNumProducts() {
    console.log(document.querySelector('.js-cart-quantity').innerHTML);
    document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity()} itens`;
}

export function renderCart() {
    renderNumProducts();
    renderOrderSummary();
    renderPaymentSummary();
}

renderCart();
