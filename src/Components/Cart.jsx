import React, { useEffect, useState } from "react";
import './Cart.css';

const Cart = ({ cartProducts, setCartProducts, setCartCount }) => {
  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartProducts((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Get product details for the given product ID
  const getProductDetails = (productId) => {
    return  cartProducts.find((product) => product.id === productId);
  };

  return (
    <div className="cartHolder p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartProducts.map((item) => {
            const product = getProductDetails(item.id);
            if (!product) return null; // Skip if product details are not found

            return (
              <div
                key={item.id}
                className="cartProductCard flex items-center bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-gray-800 font-medium">
                    Price: ${product.price}
                  </p>
                  <p className="text-gray-600">
                    Quantity: <span className="font-semibold">{item.quantity}</span>
                  </p>
                </div>
                <div className="text-lg font-bold text-blue-600">
                  ${product.price * item.quantity}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)} // Correct onClick handler
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  REMOVE
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
