import React from "react";

const Sidebar = ({ categories, selectedCategory, filterProducts }) => {
  return (
    <div className="bg-gray-200 py-4 px-8 flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="font-semibold text-lg mb-2">Categories</h2>
        <ul className="gap-4 flex  items-start flex-row flex-wrap md:flex-col md:items-start">
          <li
            className={`cursor-pointer ${selectedCategory === "" ? "font-bold" : ""}`}
            onClick={() => filterProducts("")}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer capitalize ${selectedCategory === category ? "font-bold" : ""}`}
              onClick={() => filterProducts(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
