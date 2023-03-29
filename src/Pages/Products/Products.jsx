import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isLoading, setIsLoading] = useState(true);

  const { state } = useLocation();
  const searchQuery = state?.search || "";

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
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
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const filtered = products.filter(updateProductsArray);
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery, priceRange]);

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {isLoading ? ( // render the spinner if the loading state is true
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="px-8 py-6 md:px-12 md:py-12 flex flex-col justify-evenly md:flex-row gap-4">
          <div className="category-container">
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              filterProducts={filterProducts}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
          <div className=" flex flex-wrap justify-center  md:justify-start  gap-4 md:w-3/4 md:h-132 h-50  overflow-y-scroll">
            {filteredProducts.length === 0 ? (
              <div className="text-center w-full mt-4">
                <p className="text-2xl">No products found.</p>
              </div>
            ) : (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
