import { productItem } from './products.js';
import { deliveryOptions, deliveryOptionItem } from './deliveryOptions.js';

function Cart(localStorageKey) {
  const cart = {
    cartItems: [],
  
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
  
      if (!this.cartItems) {
        this.cartItems = [];
      }
    },
  
    saveStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
    quantityProductAdded(productId) {
      const select = document.querySelector(`.js-num-products-${productId}`);
      if (!select) {
        return 1;
      }
      return Number(select.value);
    },
  
    cartItem(productId) {
      return this.cartItems.find((cartItem) => {
        return cartItem.productId === productId
      });
    },
  
    /* export */
    cartAddProduct(productId) {
      const quantity = this.quantityProductAdded(productId);
      const matchingItem = this.cartItem(productId);
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
    },
  
    deliveryOptionCalc(cartItem, option, operation) {
      const deliveryOption = deliveryOptionItem(option);
      if (operation === 'sum') {
        cartItem.priceCents += deliveryOption.priceCents;
      }
      else if (operation === 'subtraction') {
        cartItem.priceCents -= deliveryOption.priceCents;
      }
    },
  
    quantityCalc(cartItem, quantity) {
      cartItem.priceCents = (cartItem.priceCents / cartItem.quantity) * quantity;
      cartItem.quantity = quantity;
      this.saveStorage();
    },
    
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
    },
    cartQuantity() {
      let cartQuantity = 0;
      this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });
      return cartQuantity;
    },
    
    cartProductsPrice() {
      let cartPrice = 0;
      this.cartItems.forEach((cartItem) => {
        cartPrice += cartItem.priceCents;
      });
      return cartPrice;
    },
    
    cartDeliveryPrice() {
      let cartPrice = 0;
      this.cartItems.forEach((cartItem) => {
        const deliveryOption = deliveryOptionItem(cartItem.deliveryOptionId);
            cartPrice += deliveryOption.priceCents;
      });
      return cartPrice;
    },
  
    removeFromCart(productId) {
      if (!productId) {
        console.error('productId não encontrado para este link:');
        return;
      }
    
      this.cartItems = this.cartItems.filter((cartItem) => {
        return cartItem.productId.trim() !== productId.trim();
      });
      this.saveStorage();
    },
    
    updateProductQuantity(productId) {
      this.cartItems.forEach((cartItem) => {
        if (productId.trim() === cartItem.productId.trim()) {
          const newQuantity = cartItem.quantity + 1;
          quantityCalc(cartItem, newQuantity);
    
        }
      });
      this.saveStorage();
    }
  }

  return cart;
}

const cart = Cart('cart-oop');
const businnesCart = Cart('cart-business');


cart.cartAddProduct('aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f');
cart.cartAddProduct('bc2847e9-5323-403f-b7cf-57fde044a955');

businnesCart.cartAddProduct('aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f');

cart.loadFromStorage();
businnesCart.loadFromStorage();
console.log(cart);  
console.log(businnesCart);  



