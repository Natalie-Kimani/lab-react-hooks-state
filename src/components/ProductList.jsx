import React from "react";
import ProductCard from "./ProductCard";

// EXPORT THIS FOR TESTS
export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: 80 },
  { id: 2, name: "Banana", category: "Fruits", price: 60 },
  { id: 3, name: "Milk", category: "Dairy", price: 120 },
  { id: 4, name: "Cheese", category: "Dairy", price: 350 },
  { id: 5, name: "Carrot", category: "Vegetable", price: 50 },
  { id: 6, name: "Tomato", category: "Vegetable", price: 70 },
];

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;

