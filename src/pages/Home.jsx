import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState(1000);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("default");

  const { addToCart } = useContext(CartContext);

  // ✅ Fetch products
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // ✅ Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // ✅ Filters + Sorting
  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "all" ? true : p.category === selectedCategory
    )
    .filter((p) => p.price <= priceFilter)
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  let sortedProducts = [...filteredProducts];
  if (sortOption === "priceLow")
    sortedProducts.sort((a, b) => a.price - b.price);
  if (sortOption === "priceHigh")
    sortedProducts.sort((a, b) => b.price - a.price);
  if (sortOption === "ratingHigh")
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);

  return (
    <div className="home-container">
      {/* 🏠 HERO SECTION */}
      <div className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <h1>
        Fashion <span>Fusion</span>
      </h1>
      <p>Upgrade your wardrobe with the latest fashion trends and accessories that make you stand out.</p>
      <button className="hero-btn">Shop Now</button>
    </div>

    <div className="hero-image">
      <img src="./handbag.png" alt="Fashion Bag" />
    </div>
  </div>
</div>


      {/* 🌈 CATEGORY HIGHLIGHTS */}
      <section className="categories-section">
        <h2>✨ Browse by Category</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`category-card ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              <h4>{cat.toUpperCase()}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🛍️ FILTERS SECTION */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.toUpperCase()}
            </option>
          ))}
        </select>

        <div className="range-filter">
          <label>Max Price: ${priceFilter}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </div>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="ratingHigh">Top Rated</option>
        </select>
      </div>

      {/* 🛒 PRODUCTS GRID */}
      {loading ? (
        <div className="loader">Loading products...</div>
      ) : (
        <div className="product-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}

      {/* 🌟 FEATURED SECTION */}
      <section className="featured">
        <h2>🔥 Featured Collections</h2>
        <div className="featured-banner">
          <img src="./public/b10.jpg" alt="Featured collection" />
          <div className="featured-text">
            <h3>New Arrivals</h3>
            <p>Trendy pieces picked just for you!</p>
            <button className="shop-btn">Explore Now</button>
          </div>
        </div>
      </section>

      {/* 💬 CUSTOMER REVIEWS */}
      <section className="reviews">
        <h2>💖 What Our Customers Say</h2>
        <div className="review-grid">
          <div className="review-card">
            <p>“Absolutely loved the quality and fast delivery!”</p>
            <h5>– Ayesha K.</h5>
          </div>
          <div className="review-card">
            <p>“Great variety and affordable prices. Highly recommend!”</p>
            <h5>– Ali R.</h5>
          </div>
          <div className="review-card">
            <p>“My go-to store for all fashion needs.”</p>
            <h5>– Sana T.</h5>
          </div>
        </div>
      </section>

      {/* 📩 NEWSLETTER */}
      <section className="newsletter">
        <h2>📬 Stay Updated!</h2>
        <p>Subscribe to get the latest deals and updates.</p>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email..." />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
}
