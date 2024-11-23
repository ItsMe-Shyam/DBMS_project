import React, { useEffect, useState } from "react";
import './Cart.css';

// Dummy products array for fetching product details
const products = [
  { id: 1, name: "Product A", price: 50, image: "https://via.placeholder.com/150", description: "A high-quality product." },
  { id: 2, name: "Product B", price: 75, image: "https://via.placeholder.com/150", description: "Best in its category." },
  { id: 3, name: "Product C", price: 100, image: "https://via.placeholder.com/150", description: "Premium quality guaranteed." },
];

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Fetch cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Find product details based on cart item IDs
  const getProductDetails = (productId) => {
    return products.find((product) => product.id === productId);
  };

  return (
    <div className="cartHolder p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cart.map((item) => {
            const product = getProductDetails(item.id);
            if (!product) return null; // Skip if product details are not found

            return (
              <div
                key={item.id}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={product.image}
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
