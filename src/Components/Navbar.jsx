import React from "react";
import './Navbar.css';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Hook to enable navigation
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="navbar flex items-center justify-between bg-blue-500 p-4 shadow-md">
      {/* Left Side - Heading */}
      <h1 className="text-white text-2xl font-bold">Welcome to DU Store</h1>
      
      {/* Right Side - Buttons */}
     {
      !isLoginPage && (
        <div className="flex gap-4">
        {/* Login Button */}
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100"
        >
          Login
        </button>
        {/* Sign Up Button */}
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </div>
      )
     }
    </nav>
  );
};

export default Navbar;
