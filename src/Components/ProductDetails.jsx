import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row -mx-4 items-center">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="relative h-0 pb-[100%]">
            <img src={product.image} alt={product.title} className="absolute h-full w-full object-contain" />
          </div>
        </div>
        <div className="md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-700 text-lg mb-8">{product.description}</p>
          <p className="text-3xl font-bold mb-4">${product.price}</p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full inline-block font-bold text-lg mb-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <p className="text-gray-700 text-sm">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
