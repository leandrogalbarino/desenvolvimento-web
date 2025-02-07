import formatCurrency from "../utils/money.js";
import { cartQuantity, cartProductsPrice, cartDeliveryPrice, cart } from "../../data/cart.js";
import { addOrder, orders} from "../../data/orders.js";


export function renderPaymentSummary() {
    const paymentSummaryElement = document.querySelector('.js-payment-summary');

    const productsMoney = cartProductsPrice();
    const deliveryMoney = cartDeliveryPrice();
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
        ${paymentButton()}
    `;
    paymentSummaryElement.innerHTML = html;
    addEventListeners();
}

function paymentButton() {
    let className = 'js-place-order';
    if (cart.length === 0) {
        className = 'payment-buttons-disabled';
    }
    const buttonHTML = `
        <button class="place-order-button ${className} button-primary">
            Place your order
        </button>
    `;
    return buttonHTML;

}

function placeOrderButton() {
    const placeOrder = document.querySelector('.js-place-order');
    console.log(orders);

    placeOrder.addEventListener('click', async () => {
        try {
            // GET - Get something from backend
            // POST - Create something
            // PUT - Updade something
            const response = await fetch('https://supersimplebackend.dev/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart: cart
                })
            });

            const order = await response.json();
            addOrder(order);

        } catch (error) {
            console.log('Unexpected error. Try again later.');
        }
        window.location.href = 'orders.html';
    });
}

function addEventListeners() {
    placeOrderButton();
}
