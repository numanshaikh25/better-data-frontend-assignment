import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import Sidebar from "../Components/Sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="px-12 py-12 flex flex-col md:flex-row">
      <Sidebar categories={categories} selectedCategory={selectedCategory} filterProducts={filterProducts} />
      <div className=" flex flex-wrap justify-center gap-4 md:w-3/4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
