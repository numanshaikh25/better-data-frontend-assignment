import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row md:justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-800">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui nec quam ullamcorper malesuada at in
            mauris.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://via.placeholder.com/500x400" alt="Product Image" className="w-full rounded-lg shadow-md" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row md:justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-800">
            Featured Products
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui nec quam ullamcorper malesuada at in
            mauris.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold">
            View All Products
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Featured Product Image"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
