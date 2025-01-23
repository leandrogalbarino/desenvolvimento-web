import { cart , cartDeliveryChangeOption , cartQuantity, removeFromCart, updateProductQuantity} from '../data/cart.js'
import { products } from '../data/products.js';
import formatCurrenty from './utils/money.js';
import {deliveryOptions} from '../data/deliveryOptions.js'
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
                                    $${formatCurrenty(matchingProduct.priceCents)}
                                </div>
                                <div class="product-quantity, js-product-quantity">
                                    <span>
                                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
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
    containerElement.innerHTML = productsHTML;
    cartQuantityUpdate();
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
        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrenty(deliveryOption.priceCents)} - `
        
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
        html += `
            <div class="delivery-option">
                <input type="radio" ${isChecked ? 'checked' : '' } value="${deliveryOption.id}" class="delivery-option-input"
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

function cartQuantityUpdate() {
    document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity()} itens`;
}


function eventProductsDelete() {
    const deleteButtonList = document.querySelectorAll('.js-delete-link');
    deleteButtonList.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId.trim();
            removeFromCart(productId);
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove()
            cartQuantityUpdate();
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

function eventProductsUpdate() {
    const updateButtonList = document.querySelectorAll('.js-update-link');
    updateButtonList.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            updateProductQuantity(productId);
            cartQuantityUpdate();
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