import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Debounce Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  // Filter & Sort Logic
  let filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  if (sortOrder === "lowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // Document Title Effect
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  const handleAddToCart = (title) => {
    setCount((prev) => prev + 1);
    setLastAdded(title);
  };

  const handleClearFilters = () => {
    setSearchText("");
    setCategory("All");
    setSortOrder("default");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CvSU Mini Store</h1>
        <p className="cart-message">
          {count === 0
            ? "Your cart is empty."
            : `Items added to cart: ${count} (Last added: ${lastAdded})`}
        </p>
      </header>

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        category={category}
        setCategory={setCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onClearFilters={handleClearFilters}
      />

      <main>
        <p className="result-count">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <h2>No products found</h2>
            <p>Try a different keyword or category.</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {product.id === 2 && <span>New</span>}
                {product.id === 5 && <span>Sale</span>}
              </ProductCard>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;