import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultiSelect from "../../lib/components/MultiSelect";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
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
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args) => (
  <MultiSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }],
  direction: "bottom",
  titleText: "Select an option(s)",
  itemToString: ({ item }: any) => <div>{item?.name}</div>,
  size: "sm",
  fullWidth: false,
  disabled: false,
};
