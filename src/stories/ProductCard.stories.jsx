import React from "react";
import { storiesOf, addParameters } from "@storybook/react";
import ProductCard from "../Components/ProductCard/ProductCard";
import { BrowserRouter } from "react-router-dom";
const product = {
  id: 1,
  category: "men's clothing",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

storiesOf("Components/ProductCard", module).add("default", () => (
  <BrowserRouter>
    <ProductCard product={product} />
  </BrowserRouter>
));
