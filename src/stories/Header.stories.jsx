import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "../Components/Header/Header";
import { MemoryRouter } from "react-router-dom";
storiesOf("Components/Header", module).add("default", () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
));
