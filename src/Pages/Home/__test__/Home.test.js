import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home";

describe("Home component", () => {
  test("renders the welcome message", () => {
    render(
      <Router basename="/">
        <Home />
      </Router>
    );
    const welcomeMessage = screen.getByText(/Welcome to DoorSteps/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders the 'Shop Now' button", () => {
    render(
      <Router basename="/">
        <Home />
      </Router>
    );
    const shopNowButton = screen.getByRole("button", { name: /Shop Now/i });
    expect(shopNowButton).toBeInTheDocument();
  });

  test("renders the 'Shop Now' button", () => {
    render(
      <Router basename="/">
        <Home />
      </Router>
    );
    const shopNowButton = screen.getByRole("button", { name: /Shop Now/i });
    expect(shopNowButton).toBeInTheDocument();
  });

  test("renders the 'View All Products' button", () => {
    render(
      <Router basename="/">
        <Home />
      </Router>
    );
    const viewAllProductsButton = screen.getByRole("button", { name: /View All Products/i });
    expect(viewAllProductsButton).toBeInTheDocument();
  });
});
