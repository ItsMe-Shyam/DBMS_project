import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTile from "./Components/ProductTile.jsx";
import Navbar from "./Components/Navbar.jsx";
import LoginSignupForm from "./Components/LoginSignupForm.jsx";
import Cart from "./Components/Cart.jsx";
import './App.css';

const App = () => {
  return (
      <Router>
      <Navbar />
        <Routes>
          {/* Route for the ProductTile component */}
          <Route path="/" element={<ProductTile />} />
          <Route path="/login" element={<LoginSignupForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
  );
};

export default App;
