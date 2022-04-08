import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "../../lib/components/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    type: {
      description:
        "Type 'dark' using the dark background without borderBottom. Type 'light' using the light background with 1px solid board on bottom. Type 'fluid' using the light background without borderBottom. ",
    },
    leftItems: {
      description: "The left items of the Navbar.",
      control: "none",
    },
    middleItems: {
      description: "The middle items of the Navbar.",
      control: "none",
    },
    rightItems: {
      description: "The right items of the Navbar.",
      control: "none",
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "dark",
};
