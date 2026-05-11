import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: 80 },
  { id: 2, name: "Banana", category: "Fruits", price: 60 },
  { id: 3, name: "Milk", category: "Dairy", price: 120 },
  { id: 4, name: "Cheese", category: "Dairy", price: 350 },
  { id: 5, name: "Carrot", category: "Vegetable", price: 50 },
  { id: 6, name: "Tomato", category: "Vegetable", price: 70 },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    category === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <h1>Shopping App</h1>

      {/* MUST be button */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>

      {/* Category filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      {/* FIXED EMPTY STATE TEXT (EXACT MATCH) */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />
      )}

      <Cart cart={cart} total={total} />
    </div>
  );
};

export default App;