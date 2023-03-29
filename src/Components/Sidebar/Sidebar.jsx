import React, { useState } from "react";

const Sidebar = ({ categories, selectedCategory, filterProducts, setPriceRange, priceRange }) => {
  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  return (
    <div className="md:h-full bg-gray-200 py-4 px-8 flex flex-col justify-between">
      <div className="mb-4">
        <h1 className="font-bold text-lg mb-2 text-gray-800">Categories</h1>
        <ul className="gap-4 flex items-start flex-row flex-wrap md:flex-col md:items-start">
          <li
            className={`cursor-pointer ${
              selectedCategory === "" ? "font-semibold text-gray-800" : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => filterProducts("")}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer capitalize ${
                selectedCategory === category ? "font-semibold text-gray-800" : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => filterProducts(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="my-4">
          <h1 className="font-bold text-lg mb-2">Price Range</h1>
          <div className="flex flex-col justify-start space-x-4">
            <div className="flex justify-between mb-2">
              <div>$0</div> <div>${priceRange[1]}</div>
            </div>
            <div className="w-4/5 h-2 flex items-center">
              <input
                aria-label="Price Range"
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="slider w-full"
              />
              <div className="slider-track"></div>
              <div className="slider-thumb"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
