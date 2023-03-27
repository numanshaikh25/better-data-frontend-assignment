import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import Sidebar from "../Components/Sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { state } = useLocation();
  const searchQuery = state?.search || "";

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  const updateProductsArray = (product) => {
    if (selectedCategory !== "" && product.category !== selectedCategory) {
      return false;
    }
    if (
      searchQuery !== "" &&
      !(
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const filtered = products.filter(updateProductsArray);
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-12 py-12 flex flex-col justify-evenly md:flex-row gap-8">
      <Sidebar categories={categories} selectedCategory={selectedCategory} filterProducts={filterProducts} />
      <div className=" flex flex-wrap justify-start gap-4 w-3/4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
