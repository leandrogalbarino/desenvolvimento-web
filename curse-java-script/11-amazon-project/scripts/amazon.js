// import {myCart as cart} from '../data/cart.js'
import { cart, cartAddProduct, cartQuantity } from '../data/cart.js'
// import * as cartModule from '../data/cart.js'
import { products, loadProducts, loadProductsFetch } from '../data/products.js'
import { formatCurrency } from './utils/money.js';


function productHTML(product) {
  let productsHTML = `
      <div class="product-container">
      <div class="product-image-container">
      <img class="product-image"
      src="${product.image}">
      </div>
      <div class="product-name limit-text-to-2-lines">
      ${product.name}
      </div>
      <div class="product-rating-container">
      <img class="product-rating-stars"
      src="${product.getStarsUrl()}">
      <div class="product-rating-count link-primary">
      ${product.rating.count}
      </div>
      </div>
      <div class="product-price">
      ${product.getPrice()}
      </div>
      <div class="product-quantity-container">
      <select class="js-num-products-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
      </div>
      <!-- Polymorphism - use a method without knowing the class -->
      
      ${product.extraInfoHTML()}
      
      <div class="product-spacer"></div>
      
      <div class="added-to-cart js-added-to-cart${product.id}">
      <img src="images/icons/checkmark.png">
      Added
      </div>
      
      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
      Add to Cart
      </button>
      </div>
      
      `;
  return productsHTML;
}

function createProducts() {
  const productsElement = document.querySelector('.products-grid');
  let productsHTML = '';

  const url = new URL(window.location.href);
  let searchName = url.searchParams.get('name');

  if (searchName) {
    searchName = searchName.toLowerCase();

    products.forEach((product) => {
      const productName = product.name.toLowerCase();
      if (productName.includes(searchName)) {
        productsHTML += productHTML(product);
      }
    });
    
    if (productsHTML === '') {
      productsHTML = `
        <p>No products matched your search.</p>
      `;
    }
    
  }
  else {
    products.forEach((product) => {
      productsHTML += productHTML(product);
    });
  }

  productsElement.innerHTML = productsHTML;
}

function cartUpdateQuantity() {
  const divQuantityElem = document.querySelector('.js-cart-quantity');
  divQuantityElem.innerHTML = cartQuantity();
}



function addedProductHTML(productId) {
  document.querySelector(`.js-added-to-cart${productId}`).style.opacity = 1;
  setTimeout(() => {
    document.querySelector(`.js-added-to-cart${productId}`).style.opacity = 0;
  }, 2000);
}

function eventAddCart() {
  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        cartAddProduct(productId);
        addedProductHTML(productId);
        cartUpdateQuantity();

      });
    });
}

function searchEvent() {
  const searchBar = document.querySelector('.js-search-bar');
  let value = searchBar.value;
  if (value.trim() === '') {
    return;
  }
  window.location.href = `amazon.html?name=${value}`;
  createProducts();
}


function searchEnterEvent() {
  const searchBar = document.querySelector('.js-search-bar');
  searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchEvent();
    }
  })
}

function searchClickEvent() {
  const searchButton = document.querySelector('.js-search-button')
  searchButton.addEventListener('click', () => {
    searchEvent();
  });
}


function addEventListeners() {
  eventAddCart();
  searchClickEvent();
  searchEnterEvent();
}

function renderProductsGrid() {
  createProducts();
  cartUpdateQuantity();
  addEventListeners();
}
// Call Back
// loadProducts(renderProductsGrid);

// Promise 
// So this Promise does same thing as a call back
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// }).then(() => {
//   renderProductsGrid();
// });

// Using fetch whitch return a promise
loadProductsFetch().then(() => {
  renderProductsGrid();
});

