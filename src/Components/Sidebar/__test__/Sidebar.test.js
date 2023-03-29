import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../Sidebar";

describe("Sidebar component", () => {
  const categories = ["electronics", "clothing"];
  const selectedCategory = "";
  const filterProducts = jest.fn();
  const setPriceRange = jest.fn();
  const priceRange = [0, 1000];

  beforeEach(() => {
    render(
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        filterProducts={filterProducts}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
      />
    );
  });

  test("renders all categories and 'All' option is bolded", () => {
    const allCategory = screen.getByText("All");
    expect(allCategory).toHaveClass("font-bold");

    categories.forEach((category) => {
      const categoryElement = screen.getByText(category);
      expect(categoryElement).not.toHaveClass("font-bold");
    });
  });

  test("calls filterProducts function when a category is clicked", () => {
    const categoryElement = screen.getByText("clothing");
    fireEvent.click(categoryElement);

    expect(filterProducts).toHaveBeenCalledWith("clothing");
  });

  test("renders price range slider with correct initial values", () => {
    const sliderElement = screen.getByRole("slider");

    expect(sliderElement).toHaveAttribute("min", "0");
    expect(sliderElement).toHaveAttribute("max", "1000");
    expect(sliderElement).toHaveAttribute("step", "10");
    expect(sliderElement).toHaveValue(String(priceRange[1]));
  });

  test("calls setPriceRange function when slider value is changed", () => {
    const sliderElement = screen.getByRole("slider");
    fireEvent.change(sliderElement, { target: { value: "150" } });

    expect(setPriceRange).toHaveBeenCalledWith([0, 150]);
  });
});
