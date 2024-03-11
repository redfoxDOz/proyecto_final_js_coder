

// Productos
const products = [
    { id: 1, name: 'Stratocaster', price: 10000 },
    { id: 2, name: 'Fender', price: 20000 },
    { id: 3, name: 'ibanez', price: 50000 }
];

// carrito de compras
let cart = [];

//  mostrar los productos disponibles
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Agregar</button>`;
        productList.appendChild(li);
    });
}

// Agregar  producto al carrito de compras
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}
 // Limpiar el carrito
 function clearCart() {
    cart = [];
    displayCart();
    localStorage.removeItem('cart'); 
}

// mostrar el contenido del carrito de compras
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${item.id})">Quitar</button>`;
        cartItems.appendChild(li);
    });
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);

     // Guardar carrito en localStorage
     localStorage.setItem('cart', JSON.stringify(cart));
}

//  quitar un producto del carrito de compras
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        displayCart();
    }
}
// procesar el pago 
function checkout() {
    console.log('Checkout ejecutado'); // 
    if (cart.length === 0) {
        alert('No tienes nada en tu carrito.');
    } else {
        cart = [];
        displayCart();
        alert('¡Pagado! Gracias por comprar.');
    }
}
// el carrito desde localStorage al cargar la página
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        displayCart();
    }
}
// Llamar a la función para cargar el carrito desde localStorage al cargar la página
loadCartFromLocalStorage();
// Mostrar productos al cargar la página
displayProducts();

