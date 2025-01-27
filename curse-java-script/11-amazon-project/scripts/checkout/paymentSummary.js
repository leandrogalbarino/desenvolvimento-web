import formatCurrency from "../utils/money.js";
import { cartQuantity, cartProductsPrice, cartDeliveryPrice } from "../../data/cart.js";

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
        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;
    paymentSummaryElement.innerHTML = html;
}