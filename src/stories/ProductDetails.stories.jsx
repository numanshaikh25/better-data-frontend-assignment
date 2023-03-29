import React from "react";
import { FaStar } from "react-icons/fa";
import { storiesOf, addParameters } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

export default {
  title: "Components/ProductDetails",
  component: ProductDetails,
};

const Template = (args) => (
  <MemoryRouter initialEntries={[`/product/${1}`]}>
    <Routes>
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
