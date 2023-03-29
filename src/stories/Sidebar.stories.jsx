import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const categories = ["books", "electronics", "furniture"];

const Template = (args) => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [priceRange, setPriceRange] = React.useState([0, 100]);

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        {...args}
        categories={categories}
        selectedCategory={selectedCategory}
        filterProducts={filterProducts}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
