export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 10
},{
    productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
    quantity: 2
}];

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
    console.log(cart);
}

export function cartUpdateQuantity() {
    const divQuantityElem = document.querySelector('.js-cart-quantity');

    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    divQuantityElem.innerHTML = cartQuantity;
}