export const cart = [];

export function cartAddProduct(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({
            productId,
            quantity: 1
        });
    }
}

export function cartUpdateQuantity() {
    const divQuantityElem = document.querySelector('.js-cart-quantity');

    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    divQuantityElem.innerHTML = cartQuantity;
}