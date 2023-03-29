import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "../ProductDetails";
jest.mock("axios");

describe("ProductDetails", () => {
  const product = {
    id: 1,
    title: "Product Title",
    price: 10.99,
    category: "Category",
    description: "Product Description",
    rating: {
      rate: 4.5,
      count: 10,
    },
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };

  test("renders product details", async () => {
    axios.get.mockResolvedValue({ data: product });

    render(
      <Router>
        <ProductDetails id={product.id} />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      expect(screen.getByText(`Category: ${product.category}`)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(`${product.rating.count} ratings`)).toBeInTheDocument();
    });
  });
});
