import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import PrimaryButton from "../Common/PrimaryButton";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    alert(`Added ${product.title} to cart!`);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  if (parseInt(id) > 20)
    return (
      <div className="flex justify-center items-center w-full h-128">
        <p className="text-2xl">No product found.</p>
      </div>
    );
  const ratingStars = [];
  for (let i = 0; i < Math.round(product.rating?.rate); i++) {
    ratingStars.push(<FaStar key={i} className="text-yellow-500 text-lg" />);
  }

  return (
    <>
      {isLoading ? ( // render the spinner if the loading state is true
        <div className="flex justify-center items-center h-128">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <PrimaryButton margin="mb-2" roundness="rounded-l-sm" text="Go Back" event={handleGoBack} />

          <div className="flex flex-col md:flex-row -mx-4 items-center">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
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
              <PrimaryButton roundness="rounded-full" margin="mb-4" event={handleAddToCart} text="Add to Cart" />

              <p className="text-gray-700 text-sm capitalize">Category: {product.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
