import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <div className={`product-card ${inStock ? "" : "out-of-stock"}`}>
      {children && <div className="card-badge">{children}</div>}
      
      <h2 className="card-title">{title}</h2>
      <p className="card-category">{category}</p>
      
      <p className="card-price">
        ₱{price.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
      
      <span className={`stock-label ${inStock ? "in" : "out"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
      
      <button
        className="add-btn"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;