import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "../ProductCard";

describe("ProductCard", () => {
  const product = {
    id: 1,
    title: "Test Product",
    description: "This is a test product",
    price: 9.99,
    image: "https://example.com/test.jpg",
    category: "Test Category",
  };

  test("renders the product information", () => {
    render(
      <Router basename="/">
        <ProductCard product={product} />
      </Router>
    );

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByText(product.category)).toBeInTheDocument();

    const productImage = screen.getByAltText(product.title);
    expect(productImage).toHaveAttribute("src", product.image);
  });

  test("renders a link to the product page", () => {
    render(
      <Router basename="/">
        <ProductCard product={product} />
      </Router>
    );

    const productLink = screen.getByRole("link");
    expect(productLink).toHaveAttribute("href", `/products/${product.id}`);
  });
});
