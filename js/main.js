// Main JS for Marquise-Vault

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initCart();
});

// --- Navbar Logic ---
function initNavbar() {
    const navbar = document.querySelector('nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// --- Cart Logic ---
function initCart() {
    updateCartCount();
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(product, color) {
    let cart = getCart();
    const itemKey = `${product.id}-${color}`;
    const existingIndex = cart.findIndex(item => item.cartId === itemKey);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, cartId: itemKey, selectedColor: color, quantity: 1 });
    }

    saveCart(cart);
}

function removeFromCart(cartId) {
    let cart = getCart();
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
}

function updateQuantity(cartId, delta) {
    let cart = getCart();
    const item = cart.find(i => i.cartId === cartId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        saveCart(cart);
        if (typeof renderCart === 'function') renderCart();
    }
}

function getSubtotal() {
    const cart = getCart();
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function updateCartCount() {
    const counts = document.querySelectorAll('.cart-count');
    const cart = getCart();
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);

    counts.forEach(el => {
        el.textContent = total;
    });
}
