import "./SearchBar.css";

function SearchBar({
  searchText,
  setSearchText,
  category,
  setCategory,
  sortOrder,
  setSortOrder,
  onClearFilters,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        className="filter-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="School Supplies">School Supplies</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select
        className="filter-select"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Default Sort</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

      <button className="clear-btn" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default SearchBar;