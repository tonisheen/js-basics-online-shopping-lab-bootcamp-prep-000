var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var temp = { itemName: item, itemPrice: price};
  cart.push(temp);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var items_count = cart.length;
  if (items_count === 0) { return "Your shopping cart is empty."}
  var resp = "In your cart, you have ";
  var sep = ', and ';
  for (let i = 0; i < items_count; i++) {
    let item = cart[i];
    if ( i == items_count - 1 ) { sep = '.'}
    resp += `${item['itemName']} at ${item['itemPrice']}${sep}`;
  }
  return resp;
}

function total() {
  var cost = 0;
  var items_count = cart.length;
  for (let i = 0; i < items_count; i++) {
    cost += cart[i]['itemPrice'];
  }
  return cost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
    // write your code here
}
