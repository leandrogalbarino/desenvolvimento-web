import { productItem } from './products.js';
import { deliveryOptionItem } from './deliveryOptions.js';

// in Class use CapitalizeCase
class Cart {
  cartItems;
  localStorageKey;

  // More details about constructor
  // 1. Has to be named "constructor"
  // 2. Shold not return anything
  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  // setLocalStorageKey(localStorageKey) {
  //   this.localStorageKey = localStorageKey;
  // }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
    if (!this.cartItems) {
      this.cartItems = [];
    }
  }

  saveStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  quantityProductAdded(productId) {
    const select = document.querySelector(`.js-num-products-${productId}`);
    if (!select) {
      return 1;
    }
    return Number(select.value);
  }

  findCartItem(productId) {
    return this.cartItems.find((cartItem) => {
      return cartItem.productId === productId
    });
  }

  cartAddProduct(productId) {
    const quantity = this.quantityProductAdded(productId);
    const matchingItem = this.findCartItem(productId);
    const product = productItem(productId);
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        priceCents: product.priceCents * quantity,
        deliveryOptionId: '1'
      });
    }
    this.saveStorage();
  }

  deliveryOptionCalc(cartItem, option, operation) {
    const deliveryOption = deliveryOptionItem(option);
    if (operation === 'sum') {
      cartItem.priceCents += deliveryOption.priceCents;
    }
    else if (operation === 'subtraction') {
      cartItem.priceCents -= deliveryOption.priceCents;
    }
  }

  quantityCalc(cartItem, quantity) {
    cartItem.priceCents = (cartItem.priceCents / cartItem.quantity) * quantity;
    cartItem.quantity = quantity;
    this.saveStorage();
  }

  cartDeliveryChangeOption(cartItem, option) {
    if (cartItem.deliveryOptionId === option) {
      return;
    }
    const beforeOption = cartItem.deliveryOptionId;
    cartItemptionId = option;
    this.deliveryOptionCalc(cartItem, beforeOption, 'subtraction');
    this.deliveryOptionCalc(cartItem, cartItem.deliveryOptionId, 'sum');
    // Save Products
    this.saveStorage();
  }

  cartQuantity() {
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
  }

  cartProductsPrice() {
    let cartPrice = 0;
    this.cartItems.forEach((cartItem) => {
      cartPrice += cartItem.priceCents;
    });
    return cartPrice;
  }

  cartDeliveryPrice() {
    let cartPrice = 0;
    this.cartItems.forEach((cartItem) => {
      const deliveryOption = deliveryOptionItem(cartItem.deliveryOptionId);
      cartPrice += deliveryOption.priceCents;
    });
    return cartPrice;
  }

  removeFromCart(productId) {
    if (!productId) {
      console.error('productId não encontrado para este link:');
      return;
    }
    this.cartItems = this.cartItems.filter((cartItem) => {
      return cartItem.productId.trim() !== productId.trim();
    });
    this.saveStorage();
  }

  updateProductQuantity(productId) {
    const cartItem = findCartItem(productId);
    const newQuantity = cartItem.quantity + 1;
    quantityCalc(cartItem, newQuantity);
    this.saveStorage();
  }
}


// OOP - Object-Oriented Programming = organize our code into objects(tries to represent the real world)
// Class = help us generate these objects = object generator
// beneficies

// Instance of Class: Cart



// cart.cartAddProduct('aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f');
// cart.cartAddProduct('bc2847e9-5323-403f-b7cf-57fde044a955');
// businessCart.cartAddProduct('aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f');

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);



