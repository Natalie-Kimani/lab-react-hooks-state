import React from "react";

const Cart = ({ cart, total, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} is in your cart
            </p>
            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: KSh {total}</h3>
    </div>
  );
};

export default Cart;
