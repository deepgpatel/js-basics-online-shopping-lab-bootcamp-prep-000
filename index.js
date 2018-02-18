var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(apples) {
 // write your code here
 var shoppingCart = cart.push(apples);
   [shoppingCart] = {[apples]: Math.random() };
Object.keys(shoppingCart);
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
