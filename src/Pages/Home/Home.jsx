import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Common/PrimaryButton";
const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row md:justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-800">
            Welcome to DoorSteps
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            Shop the latest trends and discover unbeatable deals. Your one-stop-shop for all your fashion needs.
          </p>
          <Link to="/products">
            <PrimaryButton text="Shop Now" roundness="rounded-full" />
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
            alt="Product Image"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-800">
            Featured Products
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            Upgrade your shopping experience with our carefully curated selection.
          </p>
          <Link to="/products">
            <PrimaryButton text="View All Products" roundness="rounded-full" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
            alt="Featured Product Image"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
