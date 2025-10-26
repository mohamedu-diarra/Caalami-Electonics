const API_URL = 'https://api.npoint.io/e6f3624f777dd8e8fffe';

const productsTitle = document.getElementById('products-title');
const cardsContainer = document.getElementById('product-cards-container');
const loadingIndicator = document.getElementById('loading-indicator');

// Handle add to cart click
window.handleCartClick = function(id, name, isAvailable) {
    if (isAvailable) {
        alert(`✅ Added ${name} to your cart!`);
    } else {
        alert(`🔔 We will notify you when ${name} is back in stock.`);
    }
}

const loadProducts = async () => {
    try {
        loadingIndicator.style.display = 'block';
        const resp = await fetch(API_URL);
        const data = await resp.json();
        const products = data.products;

        console.log(products);

        productsTitle.textContent = "Our Complete Product Catalog";
        cardsContainer.innerHTML = '';

        products.forEach((product) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const available = product.in_stock;
            const stockClass = available ? "text-green-600" : "text-red-600";
            const stockText = available ? "In Stock" : "Out of Stock";
            const placeholder = `https://placehold.co/300x200/facc15/1f2937?text=${encodeURIComponent(product.name)}`;

            card.innerHTML = `
                <img src="${product.image}" onerror="this.src='${placeholder}'" alt="${product.name}">
                <div class="content">
                    <span>${product.category}</span>
                    <h3>${product.name}</h3>
                    <p class="par">${product.description}</p>
                    <div class="price-stock">
                        <p class="price">${product.currency} ${product.price}</p>
                        <p class="${stockClass}">${stockText}</p>
                    </div>
                    <button onclick="handleCartClick(${product.id}, '${product.name}', ${available})" ${available ? '' : 'disabled'}>
                        ${available ? 'Add to Cart' : 'Notify Me'}
                    </button>
                </div>
            `;

            cardsContainer.appendChild(card);
        });

        loadingIndicator.style.display = 'none';
    } catch (error) {
        loadingIndicator.style.display = 'none';
        productsTitle.textContent = "Products Unavailable";
        cardsContainer.innerHTML = `<p style="color:red;">Error loading products: ${error.message}</p>`;
    }
};

loadProducts();
