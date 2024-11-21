import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  fixed w-full z-20 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        {/* Brand Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          SwiftPay
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="#features" className="hover:text-gray-200 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-gray-200 transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-gray-200 transition">
                Get Started
              </a>
            </li>
          </ul>
        </div>

        {/* Login and Sign Up */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-white hover:text-gray-200 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-white text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen
            ? "bg-white text-gray-800 max-h-screen opacity-100"
            : "bg-blue-700 text-white max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-blue-600">
              How It Works
            </a>
          </li>
          <li>
            <a href="/signup" className="hover:text-blue-600">
              Get Started
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-blue-600">
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
