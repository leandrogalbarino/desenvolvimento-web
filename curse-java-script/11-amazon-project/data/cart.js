export let cart = JSON.parse(localStorage.getItem('cart'));


if (!cart) {
    cart = [];
}


function saveStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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
            quantity: 1,
            deliveryOptionId: '3'
        });
    }
    saveStorage();
}

export function cartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

export function removeFromCart(productId) {
    if (!productId) {
        console.error('productId não encontrado para este link:');
        return;
    }

    cart = cart.filter((cartProduct) => {
        return cartProduct.productId.trim() !== productId.trim();
    });
    saveStorage();
}

export function updateProductQuantity(productId) {
    cart.forEach((cartProduct) => {
        if (productId.trim() === cartProduct.productId.trim()) {
            cartProduct.quantity++;
        }
    });
    saveStorage();
}