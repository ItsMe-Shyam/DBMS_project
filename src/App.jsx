import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTile from "./Components/ProductTile.jsx";
import Navbar from "./Components/Navbar.jsx";
import LoginSignupForm from "./Components/LoginSignupForm.jsx";
import Cart from "./Components/Cart.jsx";
import './App.css';

const App = () => {
  const[ cartProducts, setCartProducts]=useState([]);
  const [cartCount, setCartCount] = useState(0);
  return (
      <Router>
      <Navbar cartCount={cartCount} />
        <Routes>
          {/* Route for the ProductTile component */}
          <Route path="/" element={<ProductTile cartProducts={cartProducts} setCartProducts={setCartProducts} setCartCount={setCartCount}  />} />
          <Route path="/login" element={<LoginSignupForm />} />
          <Route path="/cart" element={<Cart cartProducts={cartProducts} cartCount={cartCount} />} />
        </Routes>
      </Router>
  );
};

export default App;
