import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    console.log(`Added ${product.title} to cart!`);
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  const ratingStars = [];
  for (let i = 0; i < Math.round(product.rating?.rate); i++) {
    ratingStars.push(<FaStar key={i} className="text-yellow-500 text-lg" />);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full inline-block font-bold text-lg mb-2"
        onClick={handleGoBack}
      >
        Go Back
      </button>
      <div className="flex flex-col md:flex-row -mx-4 items-center">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="relative h-0 pb-[100%]">
            <img src={product.image} alt={product.title} className="absolute h-full w-full object-contain" />
          </div>
        </div>
        <div className="md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <div className="flex mb-2">{ratingStars}</div>
          <p className="text-gray-700 text-sm mb-8">{product.rating?.count} ratings</p>
          <p className="text-gray-700 text-lg mb-8">{product.description}</p>
          <p className="text-3xl font-bold mb-4">${product.price}</p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-l-sm inline-block font-bold text-lg mb-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <p className="text-gray-700 text-sm capitalize">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
