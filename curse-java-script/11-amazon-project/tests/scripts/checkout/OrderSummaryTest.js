import { renderCart } from '../../../scripts/checkout.js';
// import { renderOrderSummary } from '../../../scripts/checkout/orderSummary.js';
import { loadFromStorage } from '../../../data/cart.js';



describe('test suite: renderOrderSummary', () => {
  const product1 = '5968897c-4d27-4872-89f6-5bcb052746d7'
  const product2 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
  let container;

  beforeEach(() => {
    container = document.querySelector('.js-test-container');

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
    renderCart();
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

  it('remove a product', () => {

    document.querySelector(`.js-delete-link-${product1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-delete-link-${product1}`)
    ).toEqual(null);
  });


  afterEach(() => {
    setTimeout(() => {
      container.innerHTML = '';
    }, 50);
  });

});