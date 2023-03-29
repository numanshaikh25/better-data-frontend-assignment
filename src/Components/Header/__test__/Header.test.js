import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Header from "../Header";

describe("Header component", () => {
  test("renders the logo and company name", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByAltText("Ecommerce Logo");
    expect(logo).toBeInTheDocument();
    const companyName = screen.getByText("DoorSteps");
    expect(companyName).toBeInTheDocument();
  });

  test("opens and closes the menu when clicking the toggle button", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const toggleButton = screen.getByLabelText("Toggle Menu");
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton);
    const closeButton = screen.getByLabelText("Close Menu");
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(toggleButton).toBeInTheDocument();
  });
});
