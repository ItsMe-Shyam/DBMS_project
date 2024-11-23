import React, { Fragment, useState } from "react";
import './ProductTitle.css';
const products = [
    { 
      id: 1, 
      name: "Product A", 
      price: 50, 
      image: "https://images.pexels.com/photos/1108094/pexels-photo-1108094.jpeg", 
      description: "A high-quality product for your daily needs." 
    },
    { 
      id: 2, 
      name: "Product B", 
      price: 75, 
      image: "https://images.pexels.com/photos/4302047/pexels-photo-4302047.jpeg", 
      description: "Stylish and durable, perfect for all occasions." 
    },
    { 
      id: 3, 
      name: "Product C", 
      price: 100, 
      image: "https://images.pexels.com/photos/1893609/pexels-photo-1893609.jpeg", 
      description: "Premium quality that ensures long-lasting use." 
    },
    { 
      id: 4, 
      name: "Product D", 
      price: 50, 
      image: "https://images.pexels.com/photos/3139053/pexels-photo-3139053.jpeg", 
      description: "A high-quality product for your daily needs." 
    },
    { 
      id: 5, 
      name: "Product E", 
      price: 75, 
      image: "https://images.pexels.com/photos/1796673/pexels-photo-1796673.jpeg", 
      description: "Stylish and durable, perfect for all occasions." 
    },
    { 
      id: 6, 
      name: "Product F", 
      price: 100, 
      image: "https://images.pexels.com/photos/2760249/pexels-photo-2760249.jpeg", 
      description: "Premium quality that ensures long-lasting use." 
    },
    { 
      id: 7, 
      name: "Product G", 
      price: 50, 
      image: "https://images.pexels.com/photos/3271009/pexels-photo-3271009.jpeg", 
      description: "A high-quality product for your daily needs." 
    },
    { 
      id: 8, 
      name: "Product H", 
      price: 75, 
      image: "https://images.pexels.com/photos/1174113/pexels-photo-1174113.jpeg", 
      description: "Stylish and durable, perfect for all occasions." 
    },
    { 
      id: 9, 
      name: "Product I", 
      price: 100, 
      image: "https://images.pexels.com/photos/256467/pexels-photo-256467.jpeg", 
      description: "Premium quality that ensures long-lasting use." 
    }
  ];

  const ProductTile = () => {
    // Initialize the cart state by reading from localStorage
    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    });
  
    // Function to save cart state to localStorage
    const saveCartToLocalStorage = (updatedCart) => {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
  
    // Function to update cart when the "Add to Cart" button is clicked
    const addToCart = (productId) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === productId);
        let updatedCart;
  
        if (existingItem) {
          // Increment the quantity if the product is already in the cart
          updatedCart = prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Add new product to the cart
          updatedCart = [...prevCart, { id: productId, quantity: 1 }];
        }
  
        // Save the updated cart to localStorage
        saveCartToLocalStorage(updatedCart);
  
        return updatedCart;
      });
    };
  
    // Function to update the quantity directly in the UI
    const updateQuantity = (productId, increment) => {
      setCart((prevCart) => {
        const updatedCart = prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, item.quantity + (increment ? 1 : -1)) }
              : item
          )
          .filter((item) => item.quantity > 0); // Remove items with 0 quantity
  
        // Save the updated cart to localStorage
        saveCartToLocalStorage(updatedCart);
  
        return updatedCart;
      });
    };
  
    // Function to get the quantity of a specific product from the cart
    const getQuantity = (productId) => {
      const item = cart.find((item) => item.id === productId);
      return item ? item.quantity : 1;
    };
  
    return (
      <Fragment>
        <h1>Products</h1>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg w-60 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Description: {product.description}</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={() => updateQuantity(product.id, false)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  disabled={getQuantity(product.id) === 0}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{getQuantity(product.id)}</span>
                <button
                  onClick={() => updateQuantity(product.id, true)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product.id)}
                className="cartButton w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </Fragment>
    );
  };
  
export default ProductTile;
