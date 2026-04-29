// ================= PRODUCT DATABASE =================
const productsDB = {
    "sony_headphones": {
        id: "sony_headphones",
        title: "Sony WH-1000XM4 Noise Cancelling Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 299.00, mrp: 349.00,
        rating: "★★★★☆", reviews: "12,453 ratings",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop"
        ],
        features: [
            "Industry-leading noise canceling with Dual Noise Sensor technology",
            "Up to 30-hour battery life with quick charging",
            "Touch Sensor controls to pause/play/skip tracks"
        ]
    },
    "polaroid_camera": {
        id: "polaroid_camera",
        title: "Polaroid Instant Camera - Mint Green Edition",
        category: "Electronics",
        price: 120.00, mrp: 150.00,
        rating: "★★★★☆", reviews: "3,120 ratings",
        images: [
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop"
        ],
        features: ["Point and shoot analog instant camera", "Autofocus 2-lens system", "Built-in double exposure capability"]
    },
    "fitness_watch": {
        id: "fitness_watch",
        title: "Smart Fitness Watch Series 7 GPS + Cellular",
        category: "Electronics",
        price: 199.00, mrp: 249.00,
        rating: "★★★★★", reviews: "5,640 ratings",
        images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop"
        ],
        features: ["Always-On Retina display", "Blood oxygen app tracking", "Water resistant up to 50 meters"]
    },
    "smartphone_pro": {
        id: "smartphone_pro",
        title: "Smartphone Pro Max 256GB - Sierra Blue",
        category: "Mobiles",
        price: 999.00, mrp: 1099.00,
        rating: "★★★★★", reviews: "8,902 ratings",
        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop"
        ],
        features: ["6.7-inch Super Retina display with ProMotion", "Cinematic mode adds shallow depth of field", "Pro camera system with 12MP Telephoto"]
    },
    "galaxy_android": {
        id: "galaxy_android",
        title: "Galaxy Android 5G - Phantom Black",
        category: "Mobiles",
        price: 799.00, mrp: 899.00,
        rating: "★★★★☆", reviews: "4,320 ratings",
        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=1000&auto=format&fit=crop"
        ],
        features: ["Pro-grade camera system", "120Hz display refresh rate", "All-day intelligent battery"]
    },
    "wireless_earbuds": {
        id: "wireless_earbuds",
        title: "Wireless Earbuds Pro with Wireless Charging Case",
        category: "Best Sellers",
        price: 149.00, mrp: 199.00,
        rating: "★★★★★", reviews: "45,902 ratings",
        images: [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop"
        ],
        features: ["Active Noise Cancellation", "Customizable fit and seal", "Transparency mode to hear your surroundings"]
    },
    "hd_tablet": {
        id: "hd_tablet",
        title: "Tablet 10-inch HD Display 64GB",
        category: "Best Sellers",
        price: 329.00, mrp: 399.00,
        rating: "★★★★★", reviews: "32,110 ratings",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop"
        ],
        features: ["10.2-inch Retina display", "A13 Bionic chip", "8MP Wide back camera, 12MP Ultra Wide front camera"]
    }
};

// ================= STATE MANAGEMENT =================
let cart = [];
let currentProductId = 'sony_headphones'; // Default product

// ================= DYNAMIC PRODUCT LOADER =================
function viewProduct(productId) {
    const product = productsDB[productId];
    currentProductId = productId; // Update global state
    
    // Update Text Elements
    document.getElementById('itemTitle').textContent = product.title;
    document.getElementById('crumbCategory').textContent = product.category;
    document.getElementById('crumbTitle').textContent = product.title.substring(0, 25) + '...';
    document.getElementById('itemRating').textContent = product.rating;
    document.getElementById('itemReviews').textContent = product.reviews;
    document.getElementById('itemPrice').textContent = Math.floor(product.price);
    document.getElementById('itemMrp').textContent = `$${product.mrp.toFixed(2)}`;
    document.getElementById('buyBoxPrice').textContent = product.price.toFixed(2);
    
    // Update Images
    document.getElementById('mainImage').src = product.images[0];
    const thumbs = document.querySelectorAll('.thumbnail');
    thumbs.forEach((thumb, index) => {
        thumb.src = product.images[index];
        thumb.classList.remove('active');
    });
    thumbs[0].classList.add('active'); // Set first thumb active

    // Update Features List
    const featuresList = document.getElementById('itemFeatures');
    featuresList.innerHTML = ''; // Clear old features
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Reset Quantity Dropdown
    document.getElementById('qty').value = "1";

    // Switch View
    hideAllViews();
    views.product.style.display = 'block';
    window.scrollTo(0, 0); // Scroll to top
}

// Initial Load
window.onload = () => viewProduct('sony_headphones');

// ================= VIEW NAVIGATION LOGIC (SPA) =================
const views = {
    category: document.getElementById('categoryView'),
    customerService: document.getElementById('customerServiceView'),
    product: document.getElementById('productView')
};

const grids = {
    "Home": document.getElementById('grid-Home'),
    "Electronics": document.getElementById('grid-Home'),
    "Mobiles": document.getElementById('grid-Mobiles'),
    "Best Sellers": document.getElementById('grid-BestSellers')
};

const categoryTitle = document.getElementById('categoryTitle');

function hideAllViews() {
    Object.values(views).forEach(view => view.style.display = 'none');
    Object.values(grids).forEach(grid => {
        if(grid) grid.style.display = 'none';
    });
}

document.querySelectorAll('.nav-category').forEach(link => {
    link.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        hideAllViews();
        
        if (category === 'Customer Service') {
            views.customerService.style.display = 'block';
        } else {
            views.category.style.display = 'block';
            categoryTitle.textContent = category === 'Home' ? 'All Products' : category;
            if (grids[category]) grids[category].style.display = 'grid';
        }
    });
});

document.getElementById('logoBtn').addEventListener('click', () => {
    hideAllViews();
    views.category.style.display = 'block';
    categoryTitle.textContent = 'All Products';
    grids['Home'].style.display = 'grid';
});
document.getElementById('homeCrumb').addEventListener('click', () => document.getElementById('logoBtn').click());

// ================= PRODUCT GALLERY ZOOM =================
function changeImage(element) {
    document.getElementById('mainImage').src = element.src;
    let thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

const mainImage = document.getElementById('mainImage');
mainImage.addEventListener('mousemove', function(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    mainImage.style.transformOrigin = `${x}% ${y}%`;
    mainImage.style.transform = "scale(1.5)";
});
mainImage.addEventListener('mouseleave', function() {
    mainImage.style.transformOrigin = "center center";
    mainImage.style.transform = "scale(1)";
});

// ================= DYNAMIC CART SYSTEM =================
const addToCartBtn = document.getElementById('addToCartBtn');
const cartCountElement = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartSubtotalElement = document.getElementById('cartSubtotal');
const cartProceedBtn = document.getElementById('cartProceedBtn');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutTotal = document.getElementById('checkoutTotal');

function updateCartUI() {
    let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountElement.textContent = totalItems;
    
    let totalValue = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartSubtotalElement.textContent = totalValue.toFixed(2);
    
    checkoutSubtotal.textContent = totalValue.toFixed(2);
    checkoutTotal.textContent = totalValue.toFixed(2);
    document.getElementById('finalPayBtn').textContent = `Pay $${totalValue.toFixed(2)} & Place Order`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: #565959; font-style: italic;">Your cart is currently empty.</p>';
        cartProceedBtn.style.display = 'none';
    } else {
        cartProceedBtn.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            cartItemsContainer.innerHTML += `
                <div class="cart-item-row">
                    <div class="cart-item-details">
                        <h4>${item.title}</h4>
                        <p>Qty: ${item.qty} | Price: $${item.price.toFixed(2)}</p>
                    </div>
                    <div>
                        <strong>$${(item.price * item.qty).toFixed(2)}</strong>
                        <button onclick="removeFromCart(${index})" style="margin-left: 10px; color: red; border:none; background:none; cursor:pointer;">❌</button>
                    </div>
                </div>
            `;
        });
    }
}

// Global function to remove item from cart
window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

addToCartBtn.addEventListener('click', () => {
    const qtySelected = parseInt(document.getElementById('qty').value);
    const product = productsDB[currentProductId]; // Fetch CURRENT product details
    
    const existingItem = cart.find(item => item.id === currentProductId);
    if (existingItem) {
        existingItem.qty += qtySelected;
    } else {
        // Push the dynamically loaded product to cart
        cart.push({ id: currentProductId, title: product.title, price: product.price, qty: qtySelected });
    }

    const originalText = addToCartBtn.textContent;
    addToCartBtn.textContent = 'Added to Cart ✓';
    addToCartBtn.style.backgroundColor = '#28a745';
    addToCartBtn.style.color = 'white';
    
    updateCartUI();

    setTimeout(() => {
        addToCartBtn.textContent = originalText;
        addToCartBtn.style.backgroundColor = '#ffd814';
        addToCartBtn.style.color = '#0f1111';
    }, 1500);
});

// ================= MODAL LOGIC =================
const modals = {
    cart: document.getElementById('cartModal'),
    signIn: document.getElementById('signInModal'),
    orders: document.getElementById('ordersModal'),
    checkout: document.getElementById('checkoutModal')
};

document.getElementById('navCart').addEventListener('click', () => modals.cart.style.display = 'block');
document.getElementById('navSignIn').addEventListener('click', () => modals.signIn.style.display = 'block');
document.getElementById('navOrders').addEventListener('click', () => modals.orders.style.display = 'block');

document.getElementById('buyNowBtn').addEventListener('click', () => {
    if(cart.length === 0) {
        document.getElementById('qty').value = 1;
        addToCartBtn.click();
    }
    modals.checkout.style.display = 'block';
});

cartProceedBtn.addEventListener('click', () => {
    modals.cart.style.display = 'none';
    modals.checkout.style.display = 'block';
});

const closeModals = () => Object.values(modals).forEach(m => m.style.display = 'none');
document.querySelectorAll('.close-btn').forEach(btn => btn.addEventListener('click', closeModals));
window.addEventListener('click', (e) => {
    if (Object.values(modals).includes(e.target)) closeModals();
});

// ================= FORM SUBMISSIONS =================
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('usernameInput').value;
    const firstName = email.split('@')[0]; 
    document.getElementById('navSignIn').innerHTML = `Hello, <strong>${firstName}</strong>`;
    closeModals();
    alert(`Sign in successful! Welcome back, ${firstName}.`);
});

document.getElementById('paymentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('finalPayBtn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Processing...';
    submitBtn.style.backgroundColor = '#ccc'; 
    
    setTimeout(() => {
        alert('🎉 Payment Successful! Your order has been placed.');
        closeModals();
        e.target.reset();
        
        cart = [];
        updateCartUI();
        
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '#ffa41c'; 
    }, 2000);
});