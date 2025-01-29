import { cart, cartDeliveryChangeOption, cartQuantity, removeFromCart, updateProductQuantity } from '../data/cart.js';
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-oop.js';
import '../data/cart-class.js';

function renderNumProducts() {
    document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity()} itens`;
}

export function renderCart() {
    renderNumProducts();
    renderOrderSummary();
    renderPaymentSummary();
    addEventListeners();
}

export function addEventListeners() {
    eventProductsDelete();
    eventProductsUpdate();
    eventRadioOptions();
}

function eventProductsDelete() {
    const deleteButtonList = document.querySelectorAll('.js-delete-link');
    deleteButtonList.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId.trim();
            removeFromCart(productId);
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();

            renderCart();
        });
    });
}

function eventRadioOptions() {
    cart.forEach((cartItem) => {
        const selectOption = document.querySelectorAll(`input[name="delivery-option-${cartItem.productId}"]`);
        selectOption.forEach((option) => {
            option.addEventListener('change', () => {
                cartDeliveryChangeOption(cartItem, option.value.trim());
                renderCart();
            });
        })
    });

}

function eventProductsUpdate() {
    const updateButtonList = document.querySelectorAll('.js-update-link');

    updateButtonList.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            updateProductQuantity(productId);
            renderCart();
        });
    });
}

function main() {
    renderCart();
    
}

main();