import { cart, loadFromStorage, cartAddProduct } from "../../data/cart.js";

describe('test suite: cartAddProduct', () => {
  it('add an existing product to the cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: '5968897c-4d27-4872-89f6-5bcb052746d7', 
        quantity: 1,
        priceCents: 1000,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    cartAddProduct('5968897c-4d27-4872-89f6-5bcb052746d7');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('5968897c-4d27-4872-89f6-5bcb052746d7')
    expect(cart[0].quantity).toEqual(2);

  });

  it('add a new product to the cart', () => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    cartAddProduct('5968897c-4d27-4872-89f6-5bcb052746d7');

    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('5968897c-4d27-4872-89f6-5bcb052746d7')
    expect(cart[0].quantity).toEqual(1);
  });
});