import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "../../lib/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    labelText: { description: "" },
    items: {
      description:
        "Pass in a collection of whatever kind of data structure preferred",
      control: "none",
    },
    itemToElement: {
      description:
        "Function to render items as custom components instead of strings. Defaults to null and is overridden by a getter",
      control: "none",
    },
    itemToString: {
      description:
        "Helper function passed to downshift that allows the library to render a given item to a string label. By default, it extracts the label field from a given item to serve as the item label in the list.",
      control: "none",
    },
    direction: {
      description:
        "Specify the direction of the dropdown. Can be either top or bottom.",
    },
    hideLabel: {
      description: "Specify whether the title text should be hidden or not",
    },
    initialSelectedItem: {
      description:
        "Allow users to pass in a number that are pre-selected from items",
    },
    disabled: { description: "Disable the control" },
    size: {
      description:
        "Specify the size of the ListBox. Currently supports either sm, md or lg as an option.",
    },
    onChange: {
      description:
        "onChange is a utility for this controlled component to communicate to a consuming component what kind of internal state changes are occurring.",
      control: "none",
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [{ name: "asd" }],
  direction: "bottom",
  titleText: "Select an option",
  itemToString: ({ item }: any) => (
    <div>
      {console.log({ item })}
      {item?.name}
    </div>
  ),
  size: "sm",
  fullWidth: false,
  disabled: false,
};
