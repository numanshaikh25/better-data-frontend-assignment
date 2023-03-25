import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between ">
          <Link to="/" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
            Door Steps
          </Link>
          {!isMenuOpen ? (
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline-gray"
              aria-label="Toggle Menu"
              onClick={handleMenuOpen}
            >
              <FaBars style={{ color: "black" }} />
            </button>
          ) : (
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline-gray"
              aria-label="Close Menu"
              onClick={handleMenuClose}
            >
              <FaTimes style={{ color: "black" }} />
            </button>
          )}
        </div>
        <div className={`md:flex md:flex-row md:items-center md:mx-6 ${isMenuOpen ? "block" : "hidden"}`}>
          <form className="flex w-full  md:mx-6 mb-4 md:mb-0 lg:mt-0">
            <input
              type="text"
              className="bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline-gray w-full"
              placeholder="Search products..."
            />
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2 hover:bg-blue-600">
              <FaSearch />
            </button>
          </form>
          <nav className="flex flex-col md:flex-row">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 mx-3 py-2 md:py-0 block md:inline-block"
              onClick={handleMenuClose}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-gray-800 mx-3 py-2 md:py-0 block md:inline-block"
              onClick={handleMenuClose}
            >
              Products
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
