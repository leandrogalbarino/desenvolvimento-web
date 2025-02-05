export const orders = getStorage();

export function addOrder(order) {
  orders.unshift(order);
  saveStorage();
}

function saveStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function getStorage() {
  const orderItems = JSON.parse(localStorage.getItem('orders'));
  return orderItems ? orderItems : [];
}