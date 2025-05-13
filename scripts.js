function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ product, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product} added to cart!`);
}

document.addEventListener('DOMContentLoaded', () => {
  const cartList = document.getElementById('cartList');
  if (cartList) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.innerHTML = cart.map(item => `<li>${item.product} - $${item.price}</li>`).join('');
  }
});
