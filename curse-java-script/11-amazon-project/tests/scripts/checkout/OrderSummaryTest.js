import { renderOrderSummary } from '../../../scripts/checkout/orderSummary.js';
import { loadFromStorage } from '../../../data/cart.js';

describe('test suite: renderOrderSummary', () => {
  const product1 = '5968897c-4d27-4872-89f6-5bcb052746d7'
  const product2 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
  let container;

  beforeEach(() => {
    container = document.querySelector('.js-test-container');
    if (!container) {
      // Cria um container no DOM virtual, se não existir
      container = document.createElement('div');
      container.className = 'js-test-container';
      document.body.appendChild(container);
    }
    container.innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      <div class="js-cart-quantity"></div>
    `;
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: product1,
        quantity: 1,
        priceCents: 1000,
        deliveryOptionId: '1'
      }, {
        productId: product2,
        quantity: 2,
        priceCents: 2000,
        deliveryOptionId: '2'
      }

      ]);
    });
    loadFromStorage();
    renderOrderSummary();
  });

  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);

    expect(
      document.querySelector(`.js-product-quantity-${product1}`).innerText
    ).toContain('Quantity: 1');
    expect(
      document.querySelector(`.js-product-quantity-${product2}`).innerText
    ).toContain('Quantity: 2')
  });
  


  afterEach(() => {
    container.innerHTML = ''; // Limpa o conteúdo do container
  });

});