// Datos de ejemplo de productos
const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 }
];

// Inicialización del carrito de compras
let cart = [];

// Función para mostrar los productos disponibles
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Agregar</button>`;
        productList.appendChild(li);
    });
}

// Función para agregar un producto al carrito de compras
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Función para mostrar el contenido del carrito de compras
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
}

// Función para quitar un producto del carrito de compras
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        displayCart();
    }
}

// Función para procesar el pago (puede personalizarse según tus necesidades)
function checkout() {
    alert('¡Gracias por tu compra!');
    cart = [];
    displayCart();
}

// Mostrar productos al cargar la página
displayProducts();
