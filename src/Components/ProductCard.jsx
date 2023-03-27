import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80">
        <div className="relative h-80">
          <div className="flex items-center justify-center h-full">
            <img className="max-w-full max-h-full object-contain" src={product.image} alt={product.title} />
          </div>
          <div className="absolute top-0 right-0 bg-green-500 text-white capitalize px-2 py-1 rounded-bl-lg">
            {product.category}
          </div>
        </div>
        <div className="py-4 px-6">
          <h3 className="text-gray-500 mb-2 font-medium text-sm truncate">{product.title}</h3>
          <p className="text-gray-400 text-sm mb-2 truncate">{product.description}</p>
          <div className="text-2xl font-semibold mb-2">${product.price}</div>
          {/* <Link to={`/products/${product.id}`}>
            <button className="bg-yellow-500 text-white rounded-full py-2 px-4 hover:bg-yellow-600 transition-colors duration-300">
              View
            </button>
          </Link> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
