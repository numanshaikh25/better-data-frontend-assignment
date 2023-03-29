import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import "../index.css";

storiesOf("Pages/Home", module).add("default", () => (
  <MemoryRouter>
    <Home />
  </MemoryRouter>
));
