import React, { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Add products to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Filter products by category
  const filteredProducts =
    category === "all"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
        );

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <h1>Shopping App</h1>

      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>

      {/* Category dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      {/* Product list */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />
      )}

      {/* Shopping cart */}
      <Cart cart={cart} total={total} />
    </div>
  );
};

export default App;