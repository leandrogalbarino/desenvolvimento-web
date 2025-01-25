import { cart, cartDeliveryChangeOption, cartQuantity, deliveryPrice, productsPrice, removeFromCart, updateProductQuantity } from '../data/cart.js'
import { products } from '../data/products.js';
import formatCurrency from './utils/money.js';
import { deliveryOptions } from '../data/deliveryOptions.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

function renderCart() {
    const containerElement = document.querySelector('.js-order-summary');
    let productsHTML = ''

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        let matchingProduct;
        products.forEach((product) => {
            if (product.id === productId) {
                matchingProduct = product;
            }
        });
        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption;

        deliveryOptions.forEach((option) => {
            if (option.id === deliveryOptionId) {
                deliveryOption = option;
            }
        });

        if (matchingProduct && deliveryOption) {
            productsHTML += `
                <div class="cart-item-container js-cart-item-container-${productId}">
                    <div class="delivery-date">
                        Delivery date: ${dateAdd(deliveryOption.DeliveryDays)}
                    </div>

                    <div class="cart-item-details-grid">
                        <img class="product-image"
                            src="${matchingProduct.image}">

                            <div class="cart-item-details">
                                <div class="product-name">
                                    ${matchingProduct.name}
                                </div>
                                <div class="product-price">
                                    $${formatCurrency(cartItem.priceCents)}
                                </div>
                                <div class="product-quantity, js-product-quantity">
                                    <span>
                                        Quantity: <span class="quantity-label js-quantity-label-${productId}">${cartItem.quantity}</span>
                                    </span>
                                    <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                                        Update
                                    </span>
                                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id} ">
                                        Delete
                                    </span>

                                    </div>
                                </div>

                            <div class="delivery-options">
                                <div class="delivery-options-title">
                                    Choose a delivery option:
                                </div>
                                ${deliveryOptionsHTML(matchingProduct, cartItem)}
                            
                            </div>
                    </div>
                </div>
            `;
        }
    });
    /* <input class="quantity-update js-quantity-update-${productId}" type="number" value="${cartItem.quantity}"> */

    paymentSummaryHTML();
    containerElement.innerHTML = productsHTML;
    cartQuantityUpdateHTML();
    addEventListeners();
}

function dateAdd(days) {
    const today = dayjs();
    const deliveryDate = today.add(days, 'days');

    return deliveryDate.format('dddd, MMMM, D');
}

function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';
    deliveryOptions.forEach((deliveryOption) => {
        const dateString = dateAdd(deliveryOption.DeliveryDays);
        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} - `

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
        html += `
            <div class="delivery-option">
                <input type="radio" ${isChecked ? 'checked' : ''} value="${deliveryOption.id}" class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                    <div>
                        <div class="delivery-option-date">
                            ${dateString}
                        </div>
                        <div class="delivery-option-price">
                            ${priceString} Shipping
                        </div>
                    </div>
            </div>                
            `;
    });
    return html;
}

function cartQuantityUpdateHTML() {
    document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity()} itens`;
}

function paymentSummaryHTML() {
    const paymentSummaryElement = document.querySelector('.js-payment-summary');

    const productsMoney = productsPrice();
    const deliveryMoney = deliveryPrice();
    const totalBeforeTax = productsMoney + deliveryMoney;
    const tax = totalBeforeTax * 0.1;
    const orderTotal = totalBeforeTax + tax;

    const html = `
        <div class="payment-summary-title">
                Order Summary
        </div>

        <div class="payment-summary-row">
            <div>
                Items (${cartQuantity()}):
            </div>
            <div class="payment-summary-money">
                $${formatCurrency(productsMoney)}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>
                Shipping &amp; handling:
            </div>
            <div class="payment-summary-money">
                $${formatCurrency(deliveryMoney)}
            </div>
        </div>
        <div class="payment-summary-row subtotal-row">
            <div>
                Total before tax:
            </div>
            <div class="payment-summary-money">
                $${formatCurrency(totalBeforeTax)}
            </div>
        </div>
        <div class="payment-summary-row">
            <div>
                Estimated tax (10%):
            </div>
            <div class="payment-summary-money">
                $${formatCurrency(tax)}
            </div>
        </div>
        <div class="payment-summary-row total-row">
            <div>
                Order total:
            </div>
            <div class="payment-summary-money">
                $${formatCurrency(orderTotal)}
            </div>
        </div>
        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;
    paymentSummaryElement.innerHTML = html;
}

function eventProductsDelete() {
    const deleteButtonList = document.querySelectorAll('.js-delete-link');
    deleteButtonList.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId.trim();
            removeFromCart(productId);
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove()
            cartQuantityUpdateHTML();
            renderCart()
        });
    });
}

function eventRadioOptions() {
    cart.forEach((cartItem) => {
        const selectOption = document.querySelectorAll(`input[name="delivery-option-${cartItem.productId}"]`);
        selectOption.forEach((option) => {
            option.addEventListener('change', () => {
                cartDeliveryChangeOption(cartItem, option.value.trim())
                renderCart();
            });
        })
    });

}

// function updateHTML(productId) {
//     const inputElement = document.querySelector(`.js-quantity-update-${productId}`);
//     const quantityOldValue = document.querySelector(`.js-quantity-label-${productId}`);
//     inputElement.style.opacity = 1;
//     quantityOldValue.style.opacity = 0;   
// }

function eventProductsUpdate() {
    const updateButtonList = document.querySelectorAll('.js-update-link');

    updateButtonList.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            // ZSHN3updateHTML(productId);
            // link.innerHTML = updateHTML(productId);
            // console.log(updateButtonList.innerHTML);

            updateProductQuantity(productId);
            cartQuantityUpdateHTML();
            renderCart();
        });
    });
}


function addEventListeners() {
    eventProductsDelete();
    eventProductsUpdate();
    eventRadioOptions();
}

function main() {
    renderCart();
}

main();