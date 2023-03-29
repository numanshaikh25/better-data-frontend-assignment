import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import Products from "../Products";

jest.mock("axios");

describe("Products", () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          title: "Product 1",
          description: "This is the first product",
          category: "category1",
          price: 10,
        },
        {
          id: 2,
          title: "Product 2",
          description: "This is the second product",
          category: "category2",
          price: 20,
        },
      ],
    });

    axios.get.mockResolvedValueOnce({
      data: ["category1", "category2"],
    });
  });

  test("renders the list of products", async () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );

    expect(await screen.findByText("Product 1")).toBeInTheDocument();
    expect(await screen.findByText("Product 2")).toBeInTheDocument();
  });

  test("filters the products by category", async () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );

    const categoryFilter = await screen.findByText("Categories");
    fireEvent.click(categoryFilter);

    const category1 = await screen.findByText("category1");
    fireEvent.click(category1);

    expect(await screen.findByText("Product 1")).toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
  });

  test("filters the products by search query", async () => {
    render(
      <MemoryRouter initialEntries={[{ state: { search: "second" } }]}>
        <Products />
      </MemoryRouter>
    );

    expect(screen.queryByText("Product 1")).not.toBeInTheDocument();
    expect(await screen.findByText("Product 2")).toBeInTheDocument();
  });

  test("filters the products by price range", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      );
    });

    const priceRangeInput = screen.getByLabelText("Price Range");
    fireEvent.change(priceRangeInput, { target: { value: 15 } });
    expect(await screen.findByText("Product 1")).toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
  });
});
