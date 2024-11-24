import React, { Fragment, useEffect, useState } from "react";
import './ProductTitle.css'; 

const ProductTile = ({ cartProducts, setCartProducts, setCartCount }) => {
  const [category, setCategory] = useState("all");
  const [quantities, setQuantities] = useState({}); // To manage quantities for each product

  const products = [
    {
      id: 1,
      name: "Burger",
      price: 5.99,
      description: "A delicious burger with crispy fries and a refreshing soda to complement your meal.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/049/423/635/small_2x/a-hamburger-and-fries-on-a-plate-with-a-glass-of-soda-png.png",
      category: "food",
    },
    {
      id: 2,
      name: "Rice",
      price: 2.99,
      description: "Premium quality rice perfect for cooking a variety of dishes from fried rice to biryani.",
      img: "https://cdn.dotpe.in/longtail/item_thumbnails/5739802/2JJJi6MZ.webp",
      category: "food",
    },
    {
      id: 3,
      name: "Pizza",
      price: 9.99,
      description: "Hot and cheesy pizza with a crispy crust, topped with your favorite ingredients.",
      img: "https://cdn.uengage.io/uploads/5/image-191979-1715686806.png",
      category: "food",
    },
    {
      id: 4,
      name: "Dairy Milk Chocolate",
      price: 3.49,
      description: "Smooth and creamy Dairy Milk chocolate, a perfect treat for any chocolate lover.",
      img: "https://flowercakengifts.com/product-images/1580986613-2-dairy-milk-silk-chocolate.jpg",
      category: "food",
    },
    {
      id: 5,
      name: "Onion",
      price: 1.49,
      description: "Fresh and flavorful onions, a perfect addition to salads, curries, and more.",
      img: "https://cdn.dotpe.in/longtail/item_thumbnails/7259612/BSGPmIaw.webp",
      category: "food",
    },
    {
      id: 6,
      name: "Orange Jelly Modak",
      price: 4.99,
      description: "Sweet and tangy orange jelly modak, a delightful treat to enjoy with family and friends.",
      img: "https://cdn.dotpe.in/longtail/item_thumbnails/1105554/OGIpZzzP.jpeg",
      category: "food",
    },
    {
      id: 7,
      name: "DSLR HD Camera",
      price: 499.99,
      description: "Capture high-quality photos and videos with this professional DSLR HD camera.",
      img: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?cs=srgb&dl=pexels-pixabay-51383.jpg&fm=jpg",
      category: "electronics",
    },
    {
      id: 8,
      name: "Inverter",
      price: 120.00,
      description: "A reliable inverter to power your home during power outages, providing smooth energy backup.",
      img: "https://s.alicdn.com/@sc04/kf/HTB1X3vSKVXXXXb8XVXXq6xXFXXXn.jpg_720x720q50.jpg",
      category: "electronics",
    },
    {
      id: 9,
      name: "Refrigerator",
      price: 349.99,
      description: "Energy-efficient refrigerator with spacious compartments to store all your groceries.",
      img: "https://cdn.dotpe.in/longtail/item_thumbnails/8031043/JQR9R0Vv.webp",
      category: "electronics",
    },
    {
      id: 10,
      name: "Speaker",
      price: 79.99,
      description: "High-quality speaker with rich sound and clear bass, perfect for any music lover.",
      img: "https://abhinavelectronics.com/wp-content/uploads/2023/12/91nM8F7aWvL._SX466_.jpg",
      category: "electronics",
    },
    {
      id: 11,
      name: "Wireless Bluetooth",
      price: 29.99,
      description: "Convenient wireless Bluetooth device to stream music and answer calls hands-free.",
      img: "https://abhinavelectronics.com/wp-content/uploads/2023/12/31Mj80flnlL.jpg",
      category: "electronics",
    },
    {
      id: 12,
      name: "AC",
      price: 299.99,
      description: "Cool your home efficiently with this high-performance air conditioner for year-round comfort.",
      img: "https://abhinavelectronics.com/wp-content/uploads/2023/12/download-31.jpeg",
      category: "electronics",
    },
    {
      id: 13,
      name: "Wireless Mouse",
      price: 19.99,
      description: "Sleek and ergonomic wireless mouse, designed for smooth navigation and comfort.",
      img: "https://prod.images.sellpy.net/fit-in/400x4096/photoRobot-manual-12-k-6/bnSgEUswjc-198a-single.jpg",
      category: "electronics",
    }
    // ... other products
  ];

  // Function to add a product to the cart with quantity
  const addToCart = (productId, quantity) => {
    const existingProduct = cartProducts.find((product) => product.id === productId);

    if (existingProduct) {
      // Update quantity if product already exists in the cart
      setCartProducts((prevCart) =>
        prevCart.map((product) =>
          product.id === productId
      ? { ...product, quantity: product.quantity + quantity }
      : product
    )
  );
} else {
  // Add new product with quantity
  const product = products.find((product) => product.id === productId);
  if (product) {
    setCartProducts((prevCart) => [
      ...prevCart,
      { ...product, quantity },
    ]);
  }
}
  setCartCount(cartProducts.length);

  };  

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const handleQuantityChange = (productId, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, (prevQuantities[productId] || 1) + change); // Ensure quantity doesn't go below 1
      return { ...prevQuantities, [productId]: newQuantity };
    });
  };

  return (
    <Fragment>
      <h1>Products</h1>
      <div className="products-container">
        {/* Dropdown Menu for Filtering */}
        <section className="mb-4 categoryContainer">
          <label htmlFor="category" className="mr-2">
            Filter by Category:
          </label>
          <select
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="electronics">Electronics</option>
          </select>
        </section>
        {filteredProducts.map((product) => {
          const quantity = quantities[product.id] || 1; // Get quantity for the current product, default to 1
          return (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-lg w-30 bg-white"
            >
              <img
                src={product.img}
                alt={product.name}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Description: {product.description}</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={() => handleQuantityChange(product.id, -1)} // Decrease quantity
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(product.id, 1)} // Increase quantity
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product.id, quantity)} // Pass product ID and quantity
                className="cartButton w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductTile;
