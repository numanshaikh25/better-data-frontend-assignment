import React from "react";
import { storiesOf } from "@storybook/react";

import PrimaryButton from "../Components/Common/PrimaryButton";

storiesOf("Components/PrimaryButton", module)
  .add("default", () => <PrimaryButton text="Click Me" />)
  .add("rounded", () => <PrimaryButton text="Click Me" roundness="rounded-full" />)
  .add("with margin", () => <PrimaryButton text="Click Me" margin="mr-4" />)
  .add("with event handler", () => <PrimaryButton text="Click Me" event={() => alert("Button clicked!")} />);
