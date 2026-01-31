// Core Data for Bint-e-Zahra Modular CMS

const DEFAULT_CATEGORIES = [
    { id: 'garments', name: 'Garments', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop', description: 'Premium garments for every occasion.' },
    { id: 'cosmetics', name: 'Cosmetics', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop', description: 'High-end beauty and skincare products.' }
];

const DEFAULT_PRODUCTS = [
    { id: 1, name: "Luxury Silk Abaya", price: 28000, category: "garments", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop", description: "Premium silk abaya with intricate detailing.", colors: ["Black", "Midnight Blue", "Maroon"] },
    { id: 2, name: "Radiance Skin Serum", price: 4500, category: "cosmetics", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop", description: "Infused with botanical extracts for a youthful glow.", colors: ["Natural"] },
    { id: 3, name: "Velvet Evening Gown", price: 35000, category: "garments", image: "https://images.unsplash.com/photo-1539109132381-31a1ecdd2927?q=80&w=1974&auto=format&fit=crop", description: "Exquisite velvet gown for special occasions.", colors: ["Emerald Green", "Wine Red", "Rose Gold"] },
    { id: 4, name: "Matte Lipstick Collection", price: 2800, category: "cosmetics", image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=2080&auto=format&fit=crop", description: "Long-lasting matte finish in vibrant shades.", colors: ["Ruby", "Dusty Rose", "Soft Coral"] },
    { id: 5, name: "Embroidered Cotton Kurta", price: 12000, category: "garments", image: "https://images.unsplash.com/photo-1544006659-f02737672522?q=80&w=2070&auto=format&fit=crop", description: "Breathable cotton kurta with traditional embroidery.", colors: ["Off-White", "Cream", "Sky Blue"] },
    { id: 6, name: "Hydrating Facial Mask", price: 1800, category: "cosmetics", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop", description: "Instant hydration for tired skin.", colors: ["Clear"] }
];

const DEFAULT_SLIDERS = [
    { id: 1, title: 'Bint-e-Zahra Premium', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop', link: 'shop.html' },
    { id: 2, title: 'Beauty Reimagined', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop', link: 'shop.html?type=cosmetics' }
];

const DEFAULT_SECTIONS = [
    { id: 's1', type: 'hero', active: true },
    { id: 's2', type: 'features', active: true },
    { id: 's3', type: 'featuredProducts', title: 'Curated Favorites', active: true },
    { id: 's4', type: 'categoryGrid', active: true }
];

function initCMS() {
    if (!localStorage.getItem('categories')) localStorage.setItem('categories', JSON.stringify(DEFAULT_CATEGORIES));
    if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
    if (!localStorage.getItem('sliders')) localStorage.setItem('sliders', JSON.stringify(DEFAULT_SLIDERS));
    if (!localStorage.getItem('pageSections')) localStorage.setItem('pageSections', JSON.stringify(DEFAULT_SECTIONS));
}

function getData(key) { return JSON.parse(localStorage.getItem(key)) || []; }
function saveData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

initCMS();
