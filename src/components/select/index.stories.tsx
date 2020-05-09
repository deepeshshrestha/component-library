import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./index";
const list = [
  { name: "option 1", icon: "", path: "" },
  { name: "option 2", icon: "", path: "" },
  { name: "option 3", icon: "", path: "" },
];
storiesOf("Select", module).add("default", () => {
  return (
    <Select
      list={list}
      value="Select an option"
      selectedOption={(value) => {
        console.log(value);
      }}
    />
  );
});
