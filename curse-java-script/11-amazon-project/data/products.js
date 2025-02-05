import formatCurrency from "../scripts/utils/money.js";

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  // Method Overrriding 
  extraInfoHTML() {
    return '';
  }
}

// Inheritance
// Reuse code between classes
// All methods of Product contain in Cloating class, because Cloating is extend of Product
class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  // Method Overrriding 
  extraInfoHTML() {
    // For use method extraInfoHTML of parents use:
    // super.extraInfoHTML();
    // But if you didn't replace it, just access it with:
    // <p>${this.getPrice()}</p>
    // Inside this is the pointer for class
    // console.log(this);

    return `
    <a href="${this.sizeChartLink}" target="_blank">
      Size chart
    </a>
    `;
  }

}

// fetch = better way to make HTTP request
// fetch use promises
export function loadProductsFetch() {
  // By default fetch is get
  // Fetch is a lot more simple than XMLHttpRequest
  // response contain reponse from the backend
  const promise = fetch('https://supersimplebackend.dev/products/'
  ).then((response) => {
    return response.json();

  }).then((productsData) => {
    products = productsData.map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    console.log('load products');
  }).catch((error) => {
    console.log('Unexpected error. Please try again later');
    console.log(error);
  });
  return promise;
}



export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    const response = xhr.response;
    products = JSON.parse(response).map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    fun();
  });

  xhr.addEventListener('error', (error) => {
    console.log('Unexpected error. Please try again later');
  });
  xhr.open('GET', 'https://supersimplebackend.dev/products/');
  xhr.send();
}


export function productItem(productId) {
  return products.find(productsItem => productId === productsItem.id);
}

export let products = [];



/*
// Outside class this is undefined
// console.log(this);
// const object2 = {
//   a: 2,
//   b: this.a
// };

// this is undefined
// but we can change it if use .call()
function logThis(param1) {
  console.log(this + param1);
}
// logThis('1');
// set value this to 'hello'
logThis.call('hello', '1');

// arrow functions do not change the value of "this"

// this is pointer to object3
const object3 = {
  method() {
    console.log(this);
  }
};
object3.method();
*/

// const currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toLocaleTimeString());
// console.log(currentDate.toLocaleDateString());

// Witch style of programming should we use?
// OOP or Precedural Programing
// it's up to you

// Supersimple Dev prefer Precedural Programing in javaScript, because he think it's simpler, and use OOP if working on a team that also uses it

// OOP is more popular in other languages.
// So it's still useful to know