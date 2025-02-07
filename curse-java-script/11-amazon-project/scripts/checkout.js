import { cartQuantity } from '../data/cart.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from '../data/cart.js';
// import '../data/backend-pratice.js';
// import '../data/cart-oop.js';
// import '../data/cart-class.js';


function renderNumProducts() {
    document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity()} itens`;
}

export function renderCart() {
    renderNumProducts();
    renderOrderSummary();
    renderPaymentSummary();
}

// Call Back
// loadProducts(renderCart);
// loadCart(renderCart);

// A big problem of callbacks
// Multiple callbacks cause a lot of nesting
// loadProducts(() => {
//     loadCart(() => {
//         renderCart();
//     });
// });


// Promise resolve this problem by ltting us flatten our code
// It's a recommended to use promises instead of callbacks
// Promisse will keep our code more flat
// Promise

// Run multiples promisses in a same time
// Best pratice
// Promise.all([
//     new Promise((resolve) => {
//         loadProductsFetch(() => {
//             resolve('value1')
//             // Value of value save in then(*value*) param
//         });
//     }),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve()
//         });
//     })

// ]).then((values) => {
//     console.log(values);
//     renderCart()
// });


// fetch helps us make our code a lot cleaner, because it can return a promise directly
// Promise.all([
//     loadProductsFetch(),
// new Promise((resolve) => {
//     loadCart(() => {
//         resolve()
//     });
// })

// ]).then((values) => {
//     console.log(values);
//     renderCart()
// });



// async await is a shortcut for promises and it removes all this extra code

// makes a function return a promise
// this code is shortcut for this code:
// function loadPage() {
//     return new Promise((resolve) => {
//         console.log('load page');
//         resolve('value2');
//     });
// }

// the best practice is use async await over promises and callbacks 
async function loadPage() {

    // await code finish equal then
    // We can only use await, when we're an async function
    // await only support Promises

    // We can use try/catch to catch errors in normal code
    try {
        // throw 'error 1';
        await loadProductsFetch();
        const value = await new Promise((resolve, reject) => {
            // throw 'error2';

            loadCart(() => {
                // reject('error3');
                resolve('afa')
            });
        });

    } catch (error) {
        console.log('Unexpected error. Please try again later');
    }
    renderCart();
}

loadPage();


// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1')
//         // Value of value save in then(*value*) param
//     });

// }).then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve()
//         });
//     });

// }).then(() => {
//     renderCart()
// });




// so now you might be wondering why do we use Promises it looks like it's more work and more code than just using a callback.
// So callbacks have a big problem which is multiple callbacks cause a lot of nesting
