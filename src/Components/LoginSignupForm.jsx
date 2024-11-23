import React, { useState } from "react";
import './LoginSignupForm.css';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);

  const loginHandleToggle = () => {
    setIsSignup(false);
    setIsLogin(true);
  };
  const signUpHandleToggle = () => {
    setIsSignup(true);
    setIsLogin(false);
  };

  return (
    <div className=" loginForm flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-[400px] lg:w-[600px]">
        {/* Toggle Buttons */}
        <div className="flex justify-between mb-8 border-b border-gray-300">
          <button
            onClick={loginHandleToggle}
            className={`w-1/2 py-3 font-semibold text-xl transition-colors duration-300 ${
              isLogin
                ? "bg-blue-500 text-white rounded-t-md"
                : "bg-gray-200 text-blue-500 hover:bg-gray-300"
            }`}
          >
            Login
          </button>
          <button
            onClick={signUpHandleToggle}
            className={`w-1/2 py-3 font-semibold text-xl transition-colors duration-300 ${
              !isLogin
                ? "bg-blue-500 text-white rounded-t-md"
                : "bg-gray-200 text-blue-500 hover:bg-gray-300"
            }`}
          >
            Sign Up
          </button>
        </div>
  
        {/* Form */}
        <form className="space-y-6">
          {isLogin ? (
            // Login Form
            <>
              <div className="flex flex-col space-y-2">
                <label htmlFor="loginEmail" className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  id="loginEmail"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="loginPassword" className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  id="loginPassword"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </>
          ) : (
            // Sign Up Form
            <>
              <div className="flex flex-col space-y-2">
                <label htmlFor="signupName" className="text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  id="signupName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="signupEmail" className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  id="signupEmail"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="signupPassword" className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  id="signupPassword"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
  
};

export default LoginSignupForm;
