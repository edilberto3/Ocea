// ==================== DATA ==================== //
const PRODUCTS = [
	{
		id: 1,
		name: "Ocea WaveReveal Tote",
		category: "Tote Bags",
		price: 2299,
		image: "Totebag.jpg",
		badge: "Bestseller",
		badgeClass: "",
		description:
			"A minimalist beige tote that transforms under sunlight or water, revealing hidden ocean wave patterns — simple indoors, vibrant and alive outdoors. Crafted from sustainable canvas with photochromic inks.",
		featured: true,
		stock: 48,
	},
	{
		id: 2,
		name: "Ocea Sandscape Backpack",
		category: "Backpacks",
		price: 3499,
		image: "Backpack.png",
		badge: null,
		badgeClass: "",
		description:
			"Crafted from durable, sustainable sand-colored canvas with elegant tan leather straps and buckles. Inspired by the textures of a peaceful beach. Spacious main compartment with padded shoulder straps.",
		featured: true,
		stock: 22,
	},
	{
		id: 3,
		name: "Accessories Bundle",
		category: "Accessories",
		price: 2999,
		image: "Accessories.png",
		badge: "Bundle",
		badgeClass: "gold",
		description:
			"A curated beach accessory bundle including a stainless steel bottle with WaveReveal print and a baseball cap with matching coastal design. Perfect for the ocean lifestyle.",
		featured: true,
		stock: 15,
	},
	{
		id: 4,
		name: "Ocea Green Duo Eco Bags",
		category: "Eco Bags",
		price: 999,
		image: "Ecobag.png",
		badge: "Eco Pick",
		badgeClass: "",
		description:
			"A premium-quality, durable duo set. Includes one large, structured olive-green canvas bag for heavy items and one classic natural beige cotton bag. Features reinforced handles and environmental messaging.",
		featured: false,
		stock: 60,
	},
	{
		id: 5,
		name: "Limited Edition Coastal Plaid Tote",
		category: "Limited Edition",
		price: 3999,
		image: "Coastal.png",
		badge: "Low Stock",
		badgeClass: "low",
		description:
			"An artisanal, small-batch tote featuring a hand-woven beach-inspired plaid pattern in soft pastel-coastal tones. Crafted with eco-friendly canvas and durable leather-accent handles. Quantities are strictly limited.",
		featured: true,
		stock: 4,
	},
	{
		id: 6,
		name: "Ocea Color-Changing Ocean Tote",
		category: "Tote Bags",
		price: 2299,
		image: "Oceatote.png",
		badge: "New",
		badgeClass: "",
		description:
			"A beige tote bag that transforms in sunlight or water, revealing beautiful ocean wave patterns. Simple and neutral indoors, vibrant and alive outdoors. Our signature WaveReveal technology at its best.",
		featured: false,
		stock: 35,
	},
];

const REVIEWS_DATA = [
	{
		name: "Maria S.",
		product: "Ocea WaveReveal Tote",
		rating: 5,
		text: "Absolutely stunning! I wore it to the beach and everyone was amazed when the waves appeared. Worth every peso.",
	},
	{
		name: "Jake R.",
		product: "Ocea Sandscape Backpack",
		rating: 5,
		text: "The quality is exceptional. The leather straps feel premium and the canvas is very durable. Love the minimalist aesthetic.",
	},
	{
		name: "Anna L.",
		product: "Limited Edition Coastal Plaid Tote",
		rating: 4,
		text: "Beautiful bag, the plaid pattern is gorgeous in person. Shipping was fast too. Would love more colors!",
	},
	{
		name: "Carlo M.",
		product: "Accessories Bundle",
		rating: 5,
		text: "The water bottle is amazing — it reveals the wave design when cold drinks are inside. Great bundle deal!",
	},
	{
		name: "Pia G.",
		product: "Ocea Green Duo Eco Bags",
		rating: 5,
		text: "Perfect eco bags for grocery runs. Love that they're durable AND sustainable. Very Filipino brand energy!",
	},
	{
		name: "Dean T.",
		product: "Ocea WaveReveal Tote",
		rating: 4,
		text: "Great gift for beach lovers. The color change is real and looks magical. Packaging was also beautiful.",
	},
];

const ORDERS_DATA = [
	{
		id: "OC-2025-001",
		customer: "Maria Santos",
		items: "Ocea WaveReveal Tote x1",
		total: "₱2,299",
		status: "Delivered",
		date: "Mar 20, 2025",
	},
	{
		id: "OC-2025-002",
		customer: "Jake Reyes",
		items: "Sandscape Backpack x1",
		total: "₱3,499",
		status: "Shipped",
		date: "Mar 22, 2025",
	},
	{
		id: "OC-2025-003",
		customer: "Anna Lim",
		items: "Coastal Plaid Tote x1",
		total: "₱3,999",
		status: "Processing",
		date: "Mar 23, 2025",
	},
	{
		id: "OC-2025-004",
		customer: "Carlo Mendoza",
		items: "Accessories Bundle x1",
		total: "₱2,999",
		status: "Delivered",
		date: "Mar 18, 2025",
	},
	{
		id: "OC-2025-005",
		customer: "Pia Garcia",
		items: "Green Duo Eco Bags x2",
		total: "₱1,998",
		status: "Shipped",
		date: "Mar 21, 2025",
	},
	{
		id: "OC-2025-006",
		customer: "Dean Torres",
		items: "WaveReveal Tote x1, Accessories x1",
		total: "₱5,298",
		status: "Processing",
		date: "Mar 24, 2025",
	},
];

const SUPPLIERS_DATA = [
	{
		name: "EcoWeave Philippines",
		materials: "Organic Cotton Canvas",
		location: "Cebu City, PH",
		cert: "GOTS Certified",
		leadDays: 7,
		status: "Active",
	},
	{
		name: "ChromaTech Solutions",
		materials: "Photochromic / Hydrochromic Inks",
		location: "Manila, PH",
		cert: "ISO 9001",
		leadDays: 10,
		status: "Active",
	},
	{
		name: "LeatherCraft Davao",
		materials: "Vegetable-Tanned Leather Straps",
		location: "Davao City, PH",
		cert: "LWG Certified",
		leadDays: 14,
		status: "Active",
	},
	{
		name: "GreenSteel Corp.",
		materials: "Stainless Steel (Bottles)",
		location: "Batangas, PH",
		cert: "SGS Verified",
		leadDays: 5,
		status: "Active",
	},
	{
		name: "NaturaDye Co.",
		materials: "Water-Based Eco Dyes",
		location: "Iloilo, PH",
		cert: "OEKO-TEX®",
		leadDays: 8,
		status: "Active",
	},
];

const USERS_DATA = [
	{
		name: "Maria Santos",
		email: "maria@email.com",
		role: "Customer",
		orders: 3,
		joined: "Jan 2025",
		status: "Active",
	},
	{
		name: "Jake Reyes",
		email: "jake@email.com",
		role: "Customer",
		orders: 1,
		joined: "Feb 2025",
		status: "Active",
	},
	{
		name: "Anna Lim",
		email: "anna@email.com",
		role: "Customer",
		orders: 2,
		joined: "Mar 2025",
		status: "Active",
	},
	{
		name: "Carlo Mendoza",
		email: "carlo@email.com",
		role: "Customer",
		orders: 4,
		joined: "Jan 2025",
		status: "Active",
	},
	{
		name: "Admin User",
		email: "admin@ocea.ph",
		role: "Admin",
		orders: 0,
		joined: "Jan 2025",
		status: "Active",
	},
];

const ACCOUNTS = [
	{
		email: "admin@ocea.ph",
		password: "admin123",
		role: "admin",
		name: "Admin User",
	},
	{
		email: "user@ocea.ph",
		password: "user123",
		role: "user",
		name: "Maria Santos",
	},
];

// ==================== STATE ==================== //
let cart = JSON.parse(localStorage.getItem("ocea_cart") || "[]");
let currentFilter = "All";
let currentRating = 0;
let reviews = [...REVIEWS_DATA];
let currentUser = JSON.parse(localStorage.getItem("ocea_user") || "null");
let detailQty = 1;
let currentDetailProduct = null;
let registeredUsers = JSON.parse(localStorage.getItem("ocea_users") || "[]");

// ==================== INIT ==================== //
document.addEventListener("DOMContentLoaded", () => {
	renderFeatured();
	renderProductsPage();
	renderReviews();
	updateCartCount();
	updateAccountMenu();
	updateCheckoutSummary();
});

// ==================== PAGE NAVIGATION ==================== //
function showPage(page) {
	document
		.querySelectorAll(".page")
		.forEach((p) => p.classList.remove("active"));
	const el = document.getElementById("page-" + page);
	if (el) el.classList.add("active");
	window.scrollTo({ top: 0, behavior: "smooth" });

	// Update nav active state
	document.querySelectorAll(".nav-links a").forEach((a) => {
		a.classList.toggle("active", a.dataset.page === page);
	});

	if (page === "products") renderProductsPage();
	if (page === "admin") renderAdminOverview();
	if (page === "dashboard") renderDashboard();
	if (page === "checkout") renderCheckoutSummary();

	// Close menus
	closeAccountMenu();
	if (page !== "auth") closeCartSidebar();
}

function filterAndShow(cat) {
	currentFilter = cat;
	showPage("products");
	renderProductsPage();
	// Update filter tab
	document.querySelectorAll(".filter-tab").forEach((btn) => {
		btn.classList.toggle("active", btn.textContent === cat);
	});
}

// ==================== PRODUCTS ==================== //
function renderFeatured() {
	const grid = document.getElementById("featuredGrid");
	if (!grid) return;
	const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);
	grid.innerHTML = featured.map((p) => productCardHTML(p)).join("");
}

function renderProductsPage() {
	const grid = document.getElementById("productsGrid");
	if (!grid) return;
	let filtered =
		currentFilter === "All"
			? PRODUCTS
			: PRODUCTS.filter((p) => p.category === currentFilter);

	const sort = document.getElementById("sortSelect")?.value;
	if (sort === "price-asc")
		filtered = [...filtered].sort((a, b) => a.price - b.price);
	else if (sort === "price-desc")
		filtered = [...filtered].sort((a, b) => b.price - a.price);
	else if (sort === "name")
		filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

	grid.innerHTML = filtered.map((p) => productCardHTML(p)).join("");
}

function productCardHTML(p) {
	return `
    <div class="product-card" onclick="showProductDetail(${p.id})">
      <div class="product-card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ""}
      </div>
      <div class="product-card-body">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <span class="product-price">₱${p.price.toLocaleString()}</span>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${p.id})" title="Add to cart">+</button>
        </div>
      </div>
    </div>`;
}

function setFilter(cat, btn) {
	currentFilter = cat;
	document
		.querySelectorAll(".filter-tab")
		.forEach((b) => b.classList.remove("active"));
	btn.classList.add("active");
	renderProductsPage();
}

function applySort() {
	renderProductsPage();
}

// ==================== PRODUCT DETAIL ==================== //
function showProductDetail(id) {
	const p = PRODUCTS.find((x) => x.id === id);
	if (!p) return;
	currentDetailProduct = p;
	detailQty = 1;
	const content = document.getElementById("productDetailContent");
	content.innerHTML = `
    <div class="product-detail">
      <div class="product-detail-breadcrumb">
        <span onclick="showPage('home')">Home</span> ›
        <span onclick="showPage('products')">Products</span> ›
        <span onclick="filterAndShow('${p.category}')">${p.category}</span> ›
        <span style="color:var(--text)">${p.name}</span>
      </div>
      <div class="product-detail-grid">
        <div class="product-detail-img">
          <img src="${p.image}" alt="${p.name}" />
        </div>
        <div class="product-detail-info">
          <p class="product-detail-category">${p.category}</p>
          <h1 class="product-detail-name">${p.name}</h1>
          <p class="product-detail-price">₱${p.price.toLocaleString()}</p>
          <p class="product-detail-desc">${p.description}</p>
          <p style="font-size:0.78rem;color:var(--text-3);margin-bottom:20px;">
            ${p.stock > 10 ? `✓ In Stock (${p.stock} available)` : p.stock > 0 ? `⚠ Only ${p.stock} left!` : "✗ Out of Stock"}
          </p>
          <div class="product-detail-actions">
            <div class="qty-control">
              <button class="qty-ctrl-btn" onclick="changeDetailQty(-1)">−</button>
              <span class="qty-display" id="detailQtyDisplay">1</span>
              <button class="qty-ctrl-btn" onclick="changeDetailQty(1)">+</button>
            </div>
            <button class="btn-primary" onclick="addToCartFromDetail()">Add to Cart</button>
          </div>
          <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;">
            <p style="font-size:0.75rem;color:var(--text-3);">🚚 Free shipping on orders over ₱3,000</p>
            <p style="font-size:0.75rem;color:var(--text-3);">↩ 30-day returns</p>
            <p style="font-size:0.75rem;color:var(--text-3);">🌿 Eco-friendly materials</p>
          </div>
        </div>
      </div>
    </div>`;
	showPage("product-detail");
}

function changeDetailQty(delta) {
	detailQty = Math.max(1, detailQty + delta);
	const el = document.getElementById("detailQtyDisplay");
	if (el) el.textContent = detailQty;
}

function addToCartFromDetail() {
	if (!currentDetailProduct) return;
	for (let i = 0; i < detailQty; i++) addToCart(currentDetailProduct.id);
}

// ==================== CART ==================== //
function addToCart(id) {
	const p = PRODUCTS.find((x) => x.id === id);
	if (!p) return;
	const existing = cart.find((c) => c.id === id);
	if (existing) existing.qty++;
	else
		cart.push({
			id: p.id,
			name: p.name,
			price: p.price,
			image: p.image,
			qty: 1,
		});
	saveCart();
	updateCartCount();
	renderCartItems();
	showToast(`${p.name} added to cart 🛍️`);
}

function removeFromCart(id) {
	cart = cart.filter((c) => c.id !== id);
	saveCart();
	updateCartCount();
	renderCartItems();
	updateCheckoutSummary();
}

function changeQty(id, delta) {
	const item = cart.find((c) => c.id === id);
	if (!item) return;
	item.qty = Math.max(1, item.qty + delta);
	saveCart();
	updateCartCount();
	renderCartItems();
	updateCheckoutSummary();
}

function saveCart() {
	localStorage.setItem("ocea_cart", JSON.stringify(cart));
}

function updateCartCount() {
	const total = cart.reduce((s, c) => s + c.qty, 0);
	const el = document.getElementById("cartCount");
	const el2 = document.getElementById("cartCountMobile");
	if (el) el.textContent = total;
	if (el2) el2.textContent = total;
}

function renderCartItems() {
	const el = document.getElementById("cartItems");
	if (!el) return;
	if (cart.length === 0) {
		el.innerHTML = `<div class="cart-empty">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <p>Your basket is empty</p>
      <button class="btn-outline" style="margin-top:16px" onclick="toggleCart(); showPage('products')">Browse Products</button>
    </div>`;
		document.getElementById("cartTotal").textContent = "₱0";
		return;
	}
	el.innerHTML = cart
		.map(
			(item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">₱${item.price.toLocaleString()}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
        <p class="cart-remove" onclick="removeFromCart(${item.id})">Remove</p>
      </div>
    </div>`,
		)
		.join("");
	const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
	document.getElementById("cartTotal").textContent =
		"₱" + total.toLocaleString();
}

function toggleCart() {
	const sidebar = document.getElementById("cartSidebar");
	const overlay = document.getElementById("cartOverlay");
	const isOpen = sidebar.classList.contains("open");
	if (!isOpen) renderCartItems();
	sidebar.classList.toggle("open");
	overlay.classList.toggle("active");
}

function closeCartSidebar() {
	document.getElementById("cartSidebar")?.classList.remove("open");
	document.getElementById("cartOverlay")?.classList.remove("active");
}

function checkout() {
	if (cart.length === 0) {
		showToast("Your cart is empty!");
		return;
	}
	toggleCart();
	showPage("checkout");
	updateCheckoutSummary();
}

// ==================== CHECKOUT ==================== //
function updateCheckoutSummary() {
	const el = document.getElementById("checkoutItems");
	if (!el) return;
	el.innerHTML =
		cart
			.map(
				(item) => `
    <div class="checkout-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="checkout-item-info">
        <p class="ci-name">${item.name} ×${item.qty}</p>
        <p class="ci-price">₱${(item.price * item.qty).toLocaleString()}</p>
      </div>
    </div>`,
			)
			.join("") || "<p class='muted'>No items</p>";

	const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
	const total = sub + 150;
	const subEl = document.getElementById("coSubtotal");
	const totEl = document.getElementById("coTotal");
	if (subEl) subEl.textContent = "₱" + sub.toLocaleString();
	if (totEl) totEl.textContent = "₱" + total.toLocaleString();
}

function renderCheckoutSummary() {
	updateCheckoutSummary();
}

function placeOrder() {
	const first = document.getElementById("co-first")?.value;
	const last = document.getElementById("co-last")?.value;
	const email = document.getElementById("co-email")?.value;
	const phone = document.getElementById("co-phone")?.value;
	const address = document.getElementById("co-address")?.value;
	if (!first || !last || !email || !phone || !address) {
		showToast("Please fill in all required fields.");
		return;
	}
	if (cart.length === 0) {
		showToast("Your cart is empty!");
		return;
	}
	const orderId = "OC-2025-" + String(Math.floor(Math.random() * 900) + 100);
	showToast(`✓ Order ${orderId} placed! Thank you for shopping with Ocea 🌊`);
	cart = [];
	saveCart();
	updateCartCount();
	setTimeout(() => showPage("tracking"), 1500);
}

// ==================== TRACKING ==================== //
function trackOrder() {
	const input = document.getElementById("trackingInput")?.value.trim();
	const resultEl = document.getElementById("trackingResult");
	if (!input) {
		resultEl.innerHTML = `<p class="muted">Please enter an order ID.</p>`;
		return;
	}
	const order = ORDERS_DATA.find(
		(o) => o.id.toLowerCase() === input.toLowerCase(),
	);
	if (!order) {
		resultEl.innerHTML = `<div style="margin-top:20px;padding:20px;background:var(--bg-2);border-radius:4px"><p>No order found for <strong>${input}</strong>. Please check the order ID and try again.</p></div>`;
		return;
	}
	const steps = [
		{ label: "Order Placed", sub: order.date, state: "done" },
		{
			label: "Processing",
			sub: "Preparing your items",
			state:
				order.status === "Processing"
					? "current"
					: order.status !== "Shipped" && order.status !== "Delivered"
						? "pending"
						: "done",
		},
		{
			label: "Shipped",
			sub: "On its way to you",
			state:
				order.status === "Shipped"
					? "current"
					: order.status === "Delivered"
						? "done"
						: "pending",
		},
		{
			label: "Delivered",
			sub: "Enjoy your Ocea product!",
			state: order.status === "Delivered" ? "done" : "pending",
		},
	];
	resultEl.innerHTML = `
    <div style="margin-top:30px;padding:24px;background:var(--surface);border:1px solid var(--border);border-radius:4px">
      <div style="display:flex;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
        <div><p class="eyebrow">Order ID</p><h3 style="font-size:1.2rem">${order.id}</h3></div>
        <div><p class="eyebrow">Customer</p><p>${order.customer}</p></div>
        <div><p class="eyebrow">Items</p><p>${order.items}</p></div>
        <div><p class="eyebrow">Total</p><p style="color:var(--ocean);font-family:var(--font-display);font-size:1.1rem">${order.total}</p></div>
      </div>
      <div class="tracking-steps">
        ${steps
					.map(
						(s) => `
          <div class="tracking-step">
            <div class="step-dot ${s.state}">${s.state === "done" ? "✓" : s.state === "current" ? "●" : "○"}</div>
            <div class="step-info"><h4>${s.label}</h4><p>${s.sub}</p></div>
          </div>`,
					)
					.join("")}
      </div>
    </div>`;
}

// ==================== SEARCH ==================== //
function handleSearch(val) {
	const dropdown = document.getElementById("searchDropdown");
	const input = document.getElementById("searchInput");
	if (!val.trim()) {
		dropdown.classList.add("hidden");
		return;
	}
	const results = PRODUCTS.filter(
		(p) =>
			p.name.toLowerCase().includes(val.toLowerCase()) ||
			p.category.toLowerCase().includes(val.toLowerCase()) ||
			p.description.toLowerCase().includes(val.toLowerCase()),
	);
	if (results.length === 0) {
		dropdown.innerHTML = `<div style="padding:16px;font-size:0.83rem;color:var(--text-3)">No results found</div>`;
	} else {
		dropdown.innerHTML = results
			.map(
				(p) => `
      <div class="search-result-item" onclick="closeSearch(); showProductDetail(${p.id})">
        <img src="${p.image}" alt="${p.name}" />
        <div><p class="sri-name">${p.name}</p><p class="sri-price">\u20b1${p.price.toLocaleString()}</p></div>
      </div>`,
			)
			.join("");
	}
	const rect = input.getBoundingClientRect();
	dropdown.style.top = (rect.bottom + 6) + "px";
	dropdown.style.left = rect.left + "px";
	dropdown.style.width = rect.width + "px";
	dropdown.classList.remove("hidden");
}

function closeSearch() {
	const dropdown = document.getElementById("searchDropdown");
	const input = document.getElementById("searchInput");
	if (dropdown) dropdown.classList.add("hidden");
	if (input) input.value = "";
}

document.addEventListener("click", (e) => {
	if (
		!e.target.closest(".search-wrap") &&
		!e.target.closest(".search-dropdown")
	) {
		document.getElementById("searchDropdown")?.classList.add("hidden");
	}
});

// ==================== REVIEWS ==================== //
function renderReviews() {
	const el = document.getElementById("reviewsGrid");
	if (!el) return;
	el.innerHTML = reviews
		.map(
			(r) => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <p class="review-author">${r.name}</p>
      <p class="review-product">${r.product}</p>
    </div>`,
		)
		.join("");
}

function openReviewModal() {
	document.getElementById("reviewModal").classList.remove("hidden");
}

function closeReviewModal() {
	document.getElementById("reviewModal").classList.add("hidden");
}

function setRating(n) {
	currentRating = n;
	document.querySelectorAll(".star").forEach((s, i) => {
		s.classList.toggle("active", i < n);
	});
}

function submitReview() {
	const name = document.getElementById("revName")?.value.trim();
	const product = document.getElementById("revProduct")?.value;
	const text = document.getElementById("revText")?.value.trim();
	if (!name || !text || currentRating === 0) {
		showToast("Please fill in all fields and select a rating.");
		return;
	}
	reviews.unshift({ name, product, rating: currentRating, text });
	renderReviews();
	closeReviewModal();
	showToast("Thank you for your review! ★");
	document.getElementById("revName").value = "";
	document.getElementById("revText").value = "";
	currentRating = 0;
	document
		.querySelectorAll(".star")
		.forEach((s) => s.classList.remove("active"));
}

// ==================== AUTH ==================== //
function toggleAccountMenu() {
	document.getElementById("accountMenu").classList.toggle("hidden");
}
function closeAccountMenu() {
	document.getElementById("accountMenu")?.classList.add("hidden");
}
document.addEventListener("click", (e) => {
	if (!e.target.closest(".account-btn") && !e.target.closest(".account-menu"))
		closeAccountMenu();
});

function updateAccountMenu() {
	const el = document.getElementById("accountMenuContent");
	if (!el) return;
	if (!currentUser) {
		el.innerHTML = `
      <a onclick="closeAccountMenu(); showPage('auth')">Sign In</a>
      <a onclick="closeAccountMenu(); switchAuth('register'); showPage('auth')">Create Account</a>
      <a onclick="closeAccountMenu(); showPage('tracking')">Track Order</a>`;
	} else if (currentUser.role === "admin") {
		el.innerHTML = `
      <div style="padding:12px 18px;font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-3)">Admin</div>
      <a onclick="closeAccountMenu(); showPage('admin')">Admin Dashboard</a>
      <button onclick="doLogout()">Sign Out</button>`;
	} else {
		el.innerHTML = `
      <div style="padding:12px 18px;font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-3)">${currentUser.name}</div>
      <a onclick="closeAccountMenu(); showPage('dashboard')">My Account</a>
      <a onclick="closeAccountMenu(); showPage('tracking')">Track Order</a>
      <button onclick="doLogout()">Sign Out</button>`;
	}
}

function switchAuth(mode) {
	const login = document.getElementById("authLogin");
	const reg = document.getElementById("authRegister");
	const tabs = document.querySelectorAll(".auth-tab");
	if (mode === "login") {
		login.classList.remove("hidden");
		reg.classList.add("hidden");
		tabs[0].classList.add("active");
		tabs[1].classList.remove("active");
	} else {
		login.classList.add("hidden");
		reg.classList.remove("hidden");
		tabs[0].classList.remove("active");
		tabs[1].classList.add("active");
	}
}

function doLogin() {
	const email = document.getElementById("loginEmail")?.value.trim();
	const pass = document.getElementById("loginPass")?.value;
	const found = [...ACCOUNTS, ...registeredUsers].find(
		(a) => a.email === email && a.password === pass,
	);
	if (!found) {
		showToast("Invalid email or password. Try the hint below!");
		return;
	}
	currentUser = { email: found.email, name: found.name, role: found.role };
	localStorage.setItem("ocea_user", JSON.stringify(currentUser));
	updateAccountMenu();
	showToast(`Welcome back, ${found.name}! 🌊`);
	if (found.role === "admin") showPage("admin");
	else showPage("dashboard");
}

function doRegister() {
	const first = document.getElementById("regFirst")?.value.trim();
	const last = document.getElementById("regLast")?.value.trim();
	const email = document.getElementById("regEmail")?.value.trim();
	const pass = document.getElementById("regPass")?.value;
	if (!first || !last || !email || !pass) {
		showToast("Please fill in all fields.");
		return;
	}
	if ([...ACCOUNTS, ...registeredUsers].find((a) => a.email === email)) {
		showToast("Email already registered. Please sign in.");
		return;
	}
	const newUser = {
		email,
		password: pass,
		role: "user",
		name: first + " " + last,
	};
	registeredUsers.push(newUser);
	localStorage.setItem("ocea_users", JSON.stringify(registeredUsers));
	currentUser = { email: newUser.email, name: newUser.name, role: "user" };
	localStorage.setItem("ocea_user", JSON.stringify(currentUser));
	updateAccountMenu();
	showToast(`Account created! Welcome to Ocea, ${first}! 🌊`);
	showPage("dashboard");
}

function doLogout() {
	currentUser = null;
	localStorage.removeItem("ocea_user");
	updateAccountMenu();
	showToast("Signed out. See you again! 👋");
	showPage("home");
}

// ==================== DASHBOARD ==================== //
function renderDashboard() {
	if (!currentUser) {
		showPage("auth");
		return;
	}
	const welcome = document.getElementById("dashWelcome");
	if (welcome) welcome.textContent = `Welcome back, ${currentUser.name}!`;
	renderUserOrders();
	renderUserProfile();
}

function switchDash(tab) {
	document
		.querySelectorAll("[id^=dash-]")
		.forEach((el) => el.classList.add("hidden"));
	document.getElementById("dash-" + tab)?.classList.remove("hidden");
	document
		.querySelectorAll(".dash-nav-btn")
		.forEach((b) => b.classList.remove("active"));
	event.target.classList.add("active");
}

function renderUserOrders() {
	const el = document.getElementById("ordersList");
	if (!el) return;
	const userOrders = ORDERS_DATA.slice(0, 3);
	if (userOrders.length === 0) {
		el.innerHTML = `<p class="muted">No orders yet. Start shopping!</p>`;
		return;
	}
	el.innerHTML = `
    <div class="order-row header"><span>Order ID</span><span>Items</span><span>Total</span><span>Status</span></div>
    ${userOrders
			.map(
				(o) => `
      <div class="order-row">
        <span style="color:var(--ocean);font-weight:500">${o.id}</span>
        <span>${o.items}</span>
        <span>${o.total}</span>
        <span><span class="order-status status-${o.status.toLowerCase()}">${o.status}</span></span>
      </div>`,
			)
			.join("")}`;
}

function renderUserProfile() {
	const el = document.getElementById("profileContent");
	if (!el || !currentUser) return;
	el.innerHTML = `
    <div style="max-width:400px;display:flex;flex-direction:column;gap:14px">
      <div class="form-group"><label>Name</label><input type="text" value="${currentUser.name}" /></div>
      <div class="form-group"><label>Email</label><input type="email" value="${currentUser.email}" /></div>
      <div class="form-group"><label>New Password</label><input type="password" placeholder="Leave blank to keep current" /></div>
      <button class="btn-primary" onclick="showToast('Profile updated!')">Save Changes</button>
    </div>`;
}

// ==================== ADMIN ==================== //
function renderAdminOverview() {
	renderAdminRecentOrders();
	renderInventoryTable();
	renderAdminOrdersTable();
	renderSuppliersTable();
	renderUsersTable();
	renderSalesChart();
}

function switchAdmin(panel) {
	document
		.querySelectorAll(".admin-panel")
		.forEach((p) => p.classList.add("hidden"));
	document.getElementById("admin-" + panel)?.classList.remove("hidden");
	document
		.querySelectorAll(".admin-nav-btn")
		.forEach((b) => b.classList.remove("active"));
	event.target.classList.add("active");
}

function renderAdminRecentOrders() {
	const el = document.getElementById("adminRecentOrders");
	if (!el) return;
	el.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>
          ${ORDERS_DATA.slice(0, 5)
						.map(
							(o) => `
            <tr>
              <td style="color:var(--ocean);font-weight:500">${o.id}</td>
              <td>${o.customer}</td>
              <td>${o.items}</td>
              <td>${o.total}</td>
              <td><span class="order-status status-${o.status.toLowerCase()}">${o.status}</span></td>
              <td>${o.date}</td>
            </tr>`,
						)
						.join("")}
        </tbody>
      </table>
    </div>`;
}

function renderInventoryTable() {
	const el = document.getElementById("inventoryTable");
	if (!el) return;
	el.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead>
        <tbody>
          ${PRODUCTS.map((p) => {
						const stockClass =
							p.stock === 0
								? "stock-out"
								: p.stock <= 5
									? "stock-low"
									: "stock-ok";
						const stockLabel =
							p.stock === 0
								? "Out of Stock"
								: p.stock <= 5
									? "Low Stock"
									: "In Stock";
						return `<tr>
              <td>${p.name}</td>
              <td>${p.category}</td>
              <td>₱${p.price.toLocaleString()}</td>
              <td class="${stockClass}">${p.stock} units</td>
              <td><span class="order-status status-${p.stock === 0 ? "processing" : p.stock <= 5 ? "shipped" : "delivered"}">${stockLabel}</span></td>
            </tr>`;
					}).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderAdminOrdersTable() {
	const el = document.getElementById("adminOrdersTable");
	if (!el) return;
	el.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
        <tbody>
          ${ORDERS_DATA.map(
						(o) => `
            <tr>
              <td style="color:var(--ocean);font-weight:500">${o.id}</td>
              <td>${o.customer}</td>
              <td>${o.items}</td>
              <td>${o.total}</td>
              <td><span class="order-status status-${o.status.toLowerCase()}">${o.status}</span></td>
              <td>${o.date}</td>
              <td><button class="btn-outline sm" onclick="showToast('Status updated!')">Update</button></td>
            </tr>`,
					).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderSuppliersTable() {
	const el = document.getElementById("suppliersTable");
	if (!el) return;
	el.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Supplier</th><th>Materials</th><th>Location</th><th>Certification</th><th>Lead Time</th><th>Status</th></tr></thead>
        <tbody>
          ${SUPPLIERS_DATA.map(
						(s) => `
            <tr>
              <td style="font-weight:500">${s.name}</td>
              <td>${s.materials}</td>
              <td>${s.location}</td>
              <td>${s.cert}</td>
              <td>${s.leadDays} days</td>
              <td><span class="order-status status-delivered">${s.status}</span></td>
            </tr>`,
					).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderUsersTable() {
	const el = document.getElementById("usersTable");
	if (!el) return;
	const allUsers = [
		...USERS_DATA,
		...registeredUsers
			.filter((u) => u.role !== "admin")
			.map((u) => ({
				name: u.name,
				email: u.email,
				role: "Customer",
				orders: 0,
				joined: "2025",
				status: "Active",
			})),
	];
	el.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Orders</th><th>Joined</th><th>Status</th></tr></thead>
        <tbody>
          ${allUsers
						.map(
							(u) => `
            <tr>
              <td style="font-weight:500">${u.name}</td>
              <td>${u.email}</td>
              <td><span style="font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:${u.role === "Admin" ? "var(--gold)" : "var(--text-3)"}">${u.role}</span></td>
              <td>${u.orders}</td>
              <td>${u.joined}</td>
              <td><span class="order-status status-delivered">${u.status}</span></td>
            </tr>`,
						)
						.join("")}
        </tbody>
      </table>
    </div>`;
}

function renderSalesChart() {
	const el = document.getElementById("salesChart");
	if (!el) return;
	const salesData = [
		{ name: "Ocea WaveReveal Tote", amount: 48200, pct: 100 },
		{ name: "Ocea Sandscape Backpack", amount: 31490, pct: 65 },
		{ name: "Limited Edition Coastal Plaid Tote", amount: 23994, pct: 50 },
		{ name: "Accessories Bundle", amount: 14995, pct: 31 },
		{ name: "Ocea Color-Changing Tote", amount: 6897, pct: 14 },
		{ name: "Ocea Green Duo Eco Bags", amount: 2997, pct: 6 },
	];
	el.innerHTML = salesData
		.map(
			(s) => `
    <div class="sales-bar-row">
      <span class="sales-bar-label">${s.name}</span>
      <div class="sales-bar-track">
        <div class="sales-bar-fill" style="width:${s.pct}%">₱${s.amount.toLocaleString()}</div>
      </div>
    </div>`,
		)
		.join("");
}

// ==================== CONTACT ==================== //
function submitContact(e) {
	e.preventDefault();
	showToast("Message sent! We'll get back to you within 24 hours. ✉");
	e.target.reset();
}

// ==================== TOAST ==================== //
function showToast(msg) {
	const toast = document.getElementById("toast");
	toast.textContent = msg;
	toast.classList.add("show");
	setTimeout(() => toast.classList.remove("show"), 3500);
}

// ==================== SCROLL EFFECT ==================== //
window.addEventListener("scroll", () => {
	const navbar = document.getElementById("navbar");
	if (navbar)
		navbar.style.boxShadow =
			window.scrollY > 20 ? "0 2px 20px rgba(26,23,20,0.1)" : "none";
});
