import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Products from "../Pages/Products/Products";

storiesOf("Pages/Products", module).add("default", () => (
  <MemoryRouter>
    <Products />
  </MemoryRouter>
));
